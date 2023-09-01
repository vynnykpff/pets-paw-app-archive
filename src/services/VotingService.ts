import { CatImageType } from "@/common/types/Breeds";
import { FavouritesType } from "@/common/types/Favourites";
import { Voting } from "@/common/types/Voting";
import { catApi } from "@/services/api";
import { AxiosResponse } from "axios";

export class VotingService {
  // TODO: fix error with typing
  public static async getImage(): Promise<CatImageType> {
    const response: AxiosResponse<CatImageType[]> = await catApi.get("/images/search");
    return response.data[0];
  }

  public static async setReaction(reaction: Voting): Promise<void> {
    await catApi.post("/votes", {
      image_id: reaction.image_id,
      value: reaction.value,
      sub_id: reaction.sub_id,
    });
  }

  public static async getVotingReaction(userId: string): Promise<Voting[]> {
    const response: AxiosResponse<Voting[]> = await catApi.get(`/votes?sub_id=${userId}`);
    return response.data;
  }

  public static async setFavourites(favouriteData: FavouritesType): Promise<void> {
    await catApi.post("/favourites", {
      image_id: favouriteData.image_id,
      sub_id: favouriteData.sub_id,
    });
  }

  public static async getFavourites(userId: string): Promise<FavouritesType[]> {
    const response: AxiosResponse<FavouritesType[]> = await catApi.get(`/favourites?sub_id=${userId}`);
    return response.data;
  }

  public static async deleteFavourites(favouriteId: string): Promise<void> {
    await catApi.delete(`/favourites/${favouriteId}`);
  }
}
