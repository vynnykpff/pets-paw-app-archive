import BreedDescription from "@/components/Breeds/SpecificBreed/BreedDescription";
import BreedSlider from "@/components/Breeds/SpecificBreed/BreedSlider";
import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface Breed {
  id: string;
  name: string;
  weight: {
    imperial: string;
    metric: string;
  };
  temperament: string;
  origin: string;
  life_span: string;
}

interface BreedItem {
  id: string;
  url: string;
}

// TODO: bring out logic with API to redux
const SpecificBreed: FC = () => {
  const [breedItems, setBreedItems] = useState<BreedItem[]>([]);
  const [breedDescription, setBreedDescription] = useState<Breed>({} as Breed);
  const [showModalError, setShowModalError] = useState(false);
  const router = useRouter();

  const { id } = router.query;

  // TODO: bring out logic with API to redux
  const fetchBreedItem = async () => {
    const apiUrl = "https://api.thecatapi.com/v1/";

    try {
      const breedResponse = await axios.get(`${apiUrl}breeds/${String(id)}`);
      const breedData: Breed = breedResponse.data;

      setBreedDescription(breedData);

      if (id) {
        const imagesResponse = await axios.get(`${apiUrl}images/search?breed_ids=${String(id)}&limit=${5}`, {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_CAT_API,
          },
        });

        const imagesData: BreedItem[] = imagesResponse.data;

        setBreedItems(imagesData);
      }
    } catch (error) {
      setShowModalError(true);
    }
  };

  useEffect(() => {
    void fetchBreedItem();
  }, [id]);

  return (
    <>
      <Head>
        <title>Breeds - PetsPaw</title>
      </Head>

      <LayoutPage>
        <LayoutPageContent>
          <BreedSlider urls={breedItems.map(item => item.url)} />
          <BreedDescription breed={breedDescription} />
          {showModalError && <ModalNotification title="Error with getting images" typeNotification="error" />}
        </LayoutPageContent>
      </LayoutPage>
    </>
  );
};

export default SpecificBreed;
