import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";

import { StoreAsyncThunkHandler } from "@/types/StoreAsyncThunkHandler";
import { StoreAsyncThunk } from "@/types/StoreAsyncThunk";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/get_image", async function (arg, { rejectWithValue }) {
	try {
		return await VotingService.getImage();
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
	state.image_id = action.payload.id;
	state.url = action.payload.url;
	state.isPending = false;
};

export const getVotingImage: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
