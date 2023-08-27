import { catApi } from "@/services/api";

export class BreedsService {
	public static async getBreedsData(limit: string = "10") {
		const response = await catApi.get(`/breeds?limit=${limit}`);
		return response.data;
	}

	public static async getCurrentBreedImage(breed: string, limit: string = "10") {
		console.log("breed", breed);
		console.log("limit", limit);

		if (breed.length > 1) {
			const response = await catApi.get(`/images/search?breed_ids=${breed}&limit=${limit}`);
			return response.data;
		}
		return null;
	}
}
