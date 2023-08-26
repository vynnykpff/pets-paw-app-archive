import { VotingData } from "@/common/types/VotingData";

export type FavouritesType = Omit<VotingData, "value">;

export interface IFavouritesItem {
	id: string;
	url: string;
}
