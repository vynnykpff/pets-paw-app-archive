import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

const SpecificBreed: FC = () => {

	const [breedItem, setBreedItem] = useState([])
	const [breedDescription, setBreedDescription] = useState({});
	const router = useRouter()

	const {id} = router.query;

	console.log(id);

	const fetchBreedItem = async () => {
		const apiUrl = 'https://api.thecatapi.com/v1/'
		await axios.get(`${apiUrl}breeds/${id}`)
			.then(res => setBreedDescription(res.data))

		await axios.get(`${apiUrl}images/search?breed_ids=${id}&limit=5`)
			.then(res => setBreedItem(res.data))
	}

	useEffect(() => {
		fetchBreedItem()
	}, [id]);

	return <div>
		{JSON.stringify(breedDescription)}
		{JSON.stringify(breedItem)}
	</div>
}


export default SpecificBreed;
