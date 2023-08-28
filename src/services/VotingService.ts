import { FavouritesType } from "@/common/types/Favourites";
import { VotingData } from "@/common/types/VotingData";
import { catApi } from "@/services/api";

export class VotingService {
	public static async getImage() {
		const response = await catApi.get("/images/search");
		return response.data[0];
	}

	public static async setReaction(reaction: VotingData) {
		const response = await catApi.post("/votes", {
			image_id: reaction.image_id,
			value: reaction.value,
			sub_id: reaction.sub_id,
		});
		return response.data;
	}

	public static async getVotingReaction(userId: string) {
		const response = await catApi.get(`/votes?sub_id=${userId}`);
		return response.data;
	}

	public static async setFavourites(favouriteData: FavouritesType) {
		const response = await catApi.post(`/favourites`, {
			image_id: favouriteData.image_id,
			sub_id: favouriteData.sub_id,
		});
		return response.data;
	}

	public static async getFavourites(userId: string) {
		const response = await catApi.get(`/favourites?&sub_id=${userId}`);
		return response.data;
	}

	public static async deleteFavourites(favouriteId: string) {
		const response = await catApi.delete(`/favourites/${favouriteId}`);
		return response.data;
	}
}
