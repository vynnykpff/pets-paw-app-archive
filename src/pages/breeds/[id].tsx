import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import Head from "next/head";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import LayoutPageContent
  from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import BreedSlider from "@/components/Breeds/SpecificBreed/BreedSlider";
import BreedDescription from "@/components/Breeds/SpecificBreed/BreedDescription";

interface BreedItem {
  id: string;
  url: string;
}

const SpecificBreed: FC = () => {

  const [breedItems, setBreedItems] = useState<BreedItem[]>([])
  const [breedDescription, setBreedDescription] = useState({});
  const router = useRouter()

  const {id} = router.query;

  const fetchBreedItem = async () => {
    const apiUrl = 'https://api.thecatapi.com/v1/'
    await axios.get(`${apiUrl}breeds/${id}`)
      .then(res => setBreedDescription(res.data))

    id && await axios.get(`${apiUrl}images/search?breed_ids=${id}&limit=${5}`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_CAT_API
      }
    })
      .then(res => setBreedItems(res.data))
  }

  useEffect(() => {
    fetchBreedItem()
  }, [id]);

  console.log(breedDescription)
  return <>
    <Head>
      <title>Breeds - PetsPaw</title>
    </Head>

    <LayoutPage>
      <LayoutPageContent>
        <BreedSlider urls={breedItems.map(item => item.url)}/>
        <BreedDescription breed={breedDescription} />
      </LayoutPageContent>
    </LayoutPage>
  </>
}


export default SpecificBreed;
