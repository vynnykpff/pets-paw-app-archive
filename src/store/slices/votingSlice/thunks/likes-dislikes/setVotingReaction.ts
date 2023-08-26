import { LogType } from "@/common/constants/logType";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { VotingData } from "@/common/types/VotingData";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/set_reaction", async function (votingData: VotingData, { rejectWithValue }) {
	try {
		return await VotingService.setReaction(votingData);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
	state.value = action.payload.value;
	state.logs = [
		{ type: action.payload.value === 1 ? LogType.LIKE : LogType.DISLIKE, imageId: action.payload.image_id, time: getCurrentTime() },
		...state.logs,
	];
};

export const setVotingReaction: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
