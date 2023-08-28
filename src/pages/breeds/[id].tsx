import BreedDescription from "@/components/Breeds/SpecificBreed/BreedDescription";
import BreedSlider from "@/components/Breeds/SpecificBreed/BreedSlider";
import LayoutPageContent
  from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import axios from "axios";
import Head from "next/head";
import {useRouter} from "next/router";
import React, {FC, useEffect, useState} from "react";

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

const SpecificBreed: FC = () => {
	const [breedItems, setBreedItems] = useState<BreedItem[]>([]);
	const [breedDescription, setBreedDescription] = useState<Breed>({} as Breed);
	const router = useRouter();

	const {id} = router.query;

	const fetchBreedItem = async () => {
		const apiUrl = 'https://api.thecatapi.com/v1/';
		await axios.get(`${apiUrl}breeds/${id}`)
			.then(res => setBreedDescription(res.data as Breed));

		id && await axios.get(`${apiUrl}images/search?breed_ids=${id}&limit=${5}`, {
			headers: {
				'x-api-key': process.env.NEXT_PUBLIC_CAT_API
			}
		})
			.then(res => setBreedItems(res.data));
	}

	useEffect(() => {
		fetchBreedItem();
	}, [id]);

	return (
		<>
			<Head>
				<title>Breeds - PetsPaw</title>
			</Head>

			<LayoutPage>
				<LayoutPageContent>
					<BreedSlider urls={breedItems.map(item => item.url)}/>
					<BreedDescription breed={breedDescription}/>
				</LayoutPageContent>
			</LayoutPage>
		</>
	);
}

export default SpecificBreed;
