import { SetVoting } from "@/types/SetVoting";

export type FavouritesType = Omit<SetVoting, "value">;

export interface IFavouritesItem {
	id: string;
	url: string;
}
