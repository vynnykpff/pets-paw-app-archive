import { BreedsData, CatImageType } from "@/common/types/Breeds";
import { catApi } from "@/services/api";

export class BreedsService {
  public static async getBreedsData(page = 0, limit = 10): Promise<BreedsData[]> {
    const response = await catApi.get<BreedsData[]>(`/breeds?page=${page}&limit=${limit}`);
    console.log("BREEDS", response.data);
    return response.data;
  }

  public static async getCurrentBreedImage(page = 0, breed: string, limit = 10): Promise<CatImageType[]> {
    if (breed.length > 1) {
      const response = await catApi.get<CatImageType[]>(`/images/search?breed_ids=${breed}&limit=${limit}&page=${page}`);
      return response.data;
    }
    return [];
  }

  public static async getGalleryData(order: string, breedIds: string, subId: string, limit = 10): Promise<ImageData[]> {
    const response = await catApi.get<ImageData[]>(`/images/search?breed_ids=${breedIds}&limit=${limit}&order=${order}&sub_id=${subId}`);
    return response.data;
  }
}
