import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { FavouritesType } from "@/common/types/Favourites";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/set_favourite", async function (favouriteData: FavouritesType, { rejectWithValue }) {
	try {
		return await VotingService.setFavourites(favouriteData);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
const storeHandler: StoreAsyncThunkHandler<VotingState> = () => {};

export const setFavouriteReaction: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
