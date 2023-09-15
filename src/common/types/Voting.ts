import { Log } from "@/common/types/Logs";

export type VotingState = {
  isPending: boolean;
  imageId: string;
  imageUrl: string;
  likes: VotingImageReaction[];
  disLikes: VotingImageReaction[];
  favourites: FavouriteItem[];
  logs: Log[];
};

export type VotingImage = {
  id: string;
  url: string;
};

export type VotingImageReaction = {
  url: string;
  value: number;
};

export type VotingReactionData = {
  image: VotingImage;
  value: number;
};

export type VotingData = {
  sub_id: string;
  image_id: string;
  value: number;
};

export type FavouriteItem = {
  image: VotingImage;
  id: number;
};
