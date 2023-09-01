import { IBreedsItem } from "@/common/types/Breeds";

export const sortDesc = (arr: IBreedsItem[]) => {
  return arr.slice().sort((a, b) => b.breedName.localeCompare(a.breedName));
};
