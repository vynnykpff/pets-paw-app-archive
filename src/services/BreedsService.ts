import {catApi} from "@/services/api";

export class BreedsService {
	public static async getBreedsData(page: number = 0, limit: string = "10") {
		const response = await catApi.get(`/breeds?page=${page}&limit=${limit}`);
		return response.data;
	}

	public static async getCurrentBreedImage(page: number = 0, breed: string, limit: string = "10") {
		if (breed.length > 1) {
			const response = await catApi.get(`/images/search?breed_ids=${breed}&limit=${limit}&page=${page}`);
			return response.data;
		}
		return null;
	}

	public static async getGalleryData(order: string, breedIds: string, subId: string, limit: string = "10") {
		const response = await catApi.get(`/images/search?breed_ids=${breedIds}&limit=${limit}&order=${order}&sub_id=${subId}`);
		return response.data;
	}
}
