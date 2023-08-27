import { IBreedsItem } from "@/common/types/BreedsItem";

export const sortAsc = (arr: IBreedsItem[]) => {
	return arr.slice().sort((a, b) => a.breedName.localeCompare(b.breedName));
};
