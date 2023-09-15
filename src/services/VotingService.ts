import { CatImageType } from "@/common/types/Breeds";
import { VotingData } from "@/common/types/Voting";
import { catApi } from "@/services/api";

export class VotingService {
  // TODO: replace CatImageType on another type
  public static async getImage(): Promise<CatImageType> {
    const response = await catApi.get<CatImageType[]>("/images/search");
    return response.data[0];
  }

  public static async setReaction(reaction: VotingData): Promise<void> {
    await catApi.post("/votes", {
      image_id: reaction.image_id,
      value: reaction.value,
      sub_id: reaction.sub_id,
    });
  }

  public static async getReaction(userId: string): Promise<VotingData[]> {
    const response = await catApi.get<VotingData[]>(`/votes?sub_id=${userId}`);
    return response.data;
  }

  public static async setFavourites(favouriteData: VotingData): Promise<void> {
    await catApi.post("/favourites", {
      image_id: favouriteData.image_id,
      sub_id: favouriteData.sub_id,
    });
  }

  public static async getFavourites(userId: string): Promise<VotingData[]> {
    const response = await catApi.get<VotingData[]>(`/favourites?sub_id=${userId}`);
    return response.data;
  }

  public static async deleteFavourites(favouriteId: string): Promise<void> {
    await catApi.delete(`/favourites/${favouriteId}`);
  }
}
