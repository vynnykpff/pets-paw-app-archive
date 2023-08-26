import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/get_favourites_items", async function (userId: string, { rejectWithValue }) {
	try {
		return await VotingService.getFavourites(userId);
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
	id: string;
}

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
	const extractedData: Array<{ url: string; id: string }> = action.payload.map((item: ReactionData) => {
		return {
			url: item.image.url,
			id: item.id,
		};
	});

	return {
		...state,
		favouritesArray: extractedData,
		isPending: false,
	};
};

export const getFavouritesItems: StoreAsyncThunk<VotingState> = {
	asyncThunk,
	storeHandler,
};
