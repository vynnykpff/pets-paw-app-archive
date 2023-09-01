export interface CatImageType {
  url: string;
  id: string;
}

interface CatWeight {
  metric: string;
}

export interface BreedsCurrentImage {
  breed: string;
  limit: number;
  page: number;
}

export interface BreedsData {
  id: string;
  name: string;
}

export interface GetBreedsDataResponse {
  id: string;
  name: string;
  image: CatImageType;
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
