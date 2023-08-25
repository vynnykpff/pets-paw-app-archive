import { SetVoting } from "@/types/SetVoting";
import axios from "axios";

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
		const response = await this.votingApi.post(`/votes`, {
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
}
