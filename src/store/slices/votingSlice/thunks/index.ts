import { VotingState } from "@/store/slices/votingSlice/slice";
import { deleteFavouriteItem } from "@/store/slices/votingSlice/thunks/favourite/deleteFavouriteItem";
import { getFavouritesItems } from "@/store/slices/votingSlice/thunks/favourite/getFavouritesItems";
import { setFavouriteReaction } from "@/store/slices/votingSlice/thunks/favourite/setFavouriteReaction";
import { getVotingImage } from "@/store/slices/votingSlice/thunks/getVotingImage";
import { getVotingReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/getVotingReaction";
import { setVotingReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/setVotingReaction";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

const thunks: StoreAsyncThunk<VotingState>[] = [
  getVotingImage,
  getVotingReaction,
  setVotingReaction,
  setFavouriteReaction,
  getFavouritesItems,
  deleteFavouriteItem,
];

export default thunks;
