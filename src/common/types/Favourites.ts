import { Voting } from "@/common/types/Voting";

export type FavouritesType = Omit<Voting, "value">;

export interface IFavouritesItem {
  id: string;
  url: string;
}
