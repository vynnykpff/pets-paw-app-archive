import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/get_image", async function (arg, { rejectWithValue }) {
	try {
		return await VotingService.getImage();
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
	state.imageId = action.payload.id;
	state.imageUrl = action.payload.url;
	state.isPending = false;
};

export const getVotingImage: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
