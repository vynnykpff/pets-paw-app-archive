interface CatImageType {
	url: string;
	id: string;
}

interface CatWeight {
	metric: string;
}

export interface BreedsCurrentImage {
	breed: string;
	limit: string;
}

interface BreedsData {
	name: string;
}

export interface IBreedsItem {
	id: string;
	name: string;
	image: CatImageType;
	url: string;
	temperament: string;
	origin: string;
	weight: CatWeight;
	life_span: string;
	breeds: BreedsData[];
	breedName: string;
}
