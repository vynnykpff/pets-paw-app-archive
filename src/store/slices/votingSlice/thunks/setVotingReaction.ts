import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { SetVoting } from "@/types/SetVoting";
import { StoreAsyncThunk } from "@/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/types/StoreAsyncThunkHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/set_reaction", async function (setVoting: SetVoting, { rejectWithValue }) {
	try {
		return await VotingService.setReaction(setVoting);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
	state.image_id = action.payload.image_id;
	state.value = action.payload.value;
	state.sub_id = action.payload.sub_id;
	state.isPending = false;
};

export const setVotingReaction: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
