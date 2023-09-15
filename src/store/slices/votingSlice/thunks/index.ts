import { deleteFavourite } from "@/store/slices/votingSlice/thunks/favourite/deleteFavourite";
import { getFavourites } from "@/store/slices/votingSlice/thunks/favourite/getFavourites";
import { setFavourite } from "@/store/slices/votingSlice/thunks/favourite/setFavourite";
import { getImage } from "@/store/slices/votingSlice/thunks/getImage";
import { getReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/getReaction";
import { setReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/setReaction";

export const thunks = [getImage, getReaction, setReaction, getFavourites, setFavourite, deleteFavourite];
