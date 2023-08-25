import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { StoreAsyncThunk } from "@/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/types/StoreAsyncThunkHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/delete_favourite_item", async function (favouriteId: string, { rejectWithValue }) {
	try {
		return await VotingService.deleteFavourites(favouriteId);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
const storeHandler: StoreAsyncThunkHandler<VotingState> = () => {};

export const deleteFavouriteItem: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
