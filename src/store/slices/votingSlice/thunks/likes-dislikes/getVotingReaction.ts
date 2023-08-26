import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { IReactionItem } from "@/common/types/ReactionItem";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/get_voting_reaction", async function (userId: string, { rejectWithValue }) {
	try {
		return await VotingService.getVotingReaction(userId);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

interface ImageData {
	id: string;
	url: string;
}

interface ReactionData {
	image: ImageData;
	value: number;
}

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
	const extractedData: IReactionItem[] = action.payload.map((item: ReactionData) => {
		return {
			url: item.image.url,
			value: item.value,
		};
	});

	const likesArray = extractedData.filter(item => item.value === 1);
	const disLikesArray = extractedData.filter(item => item.value === -1);

	return {
		...state,
		likesArray,
		disLikesArray,
		isPending: false,
	};
};

export const getVotingReaction: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
