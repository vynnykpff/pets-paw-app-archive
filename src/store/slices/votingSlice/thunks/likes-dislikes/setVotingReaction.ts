import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { SetVoting } from "@/common/types/SetVoting";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/set_reaction", async function (setVoting: SetVoting, { rejectWithValue }) {
	try {
		return await VotingService.setReaction(setVoting);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
	state.value = action.payload.value;
};

export const setVotingReaction: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
