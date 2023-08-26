import { FavouritesType } from "@/common/types/Favourites";
import { SetVoting } from "@/common/types/SetVoting";
import axios from "axios";

// TODO
// Типизация для каждого ответа с сервера

export class VotingService {
	private static votingApi = axios.create({
		baseURL: process.env.NEXT_PUBLIC_CAT_BASE_URL,
		headers: {
			"x-api-key": process.env.NEXT_PUBLIC_CAT_API,
			"Content-Type": "application/json",
		},
	});

	public static async getImage() {
		const response = await this.votingApi.get("/images/search");
		return response.data[0];
	}

	public static async setReaction(reaction: SetVoting) {
		const response = await this.votingApi.post("/votes", {
			image_id: reaction.image_id,
			value: reaction.value,
			sub_id: reaction.sub_id,
		});
		return response.data;
	}

	public static async getVotingReaction(userId: string) {
		const response = await this.votingApi.get(`/votes?sub_id=${userId}`);
		return response.data;
	}

	public static async setFavourites(favouriteData: FavouritesType) {
		const response = await this.votingApi.post(`/favourites`, {
			image_id: favouriteData.image_id,
			sub_id: favouriteData.sub_id,
		});
		return response.data;
	}

	public static async getFavourites(userId: string) {
		const response = await this.votingApi.get(`/favourites?&sub_id=${userId}`);
		return response.data;
	}

	public static async deleteFavourites(favouriteId: string) {
		const response = await this.votingApi.delete(`/favourites/${favouriteId}`);
		return response.data;
	}
}
