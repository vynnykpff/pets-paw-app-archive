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

// eslint-disable-next-line @typescript-eslint/no-empty-function
const storeHandler: StoreAsyncThunkHandler<VotingState> = () => {};

export const setVotingReaction: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
