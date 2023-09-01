import { IBreedsItem } from "@/common/types/Breeds";

export const sortAsc = (arr: IBreedsItem[]) => {
  return arr.slice().sort((a, b) => a.breedName.localeCompare(b.breedName));
};
