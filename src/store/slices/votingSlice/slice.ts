import { IFavouritesItem } from "@/common/types/Favourites";
import { IReactionItem } from "@/common/types/ReactionItem";
import { createSlice } from "@reduxjs/toolkit";
import votingSliceThunks from "./thunks";

export interface VotingState {
	isPending: boolean;
	image_id: string;
	sub_id?: string | null;
	url: string;
	value: number;
	likesArray: IReactionItem[];
	disLikesArray: IReactionItem[];
	favouritesArray: IFavouritesItem[];
}

const initialState: VotingState = {
	isPending: true,
	image_id: "",
	sub_id: null,
	url: "",
	value: 0,
	likesArray: [],
	disLikesArray: [],
	favouritesArray: [],
};

export const votingSlice = createSlice({
	name: "voting",
	initialState,
	reducers: {
		setUserId: (state, action) => {
			state.sub_id = action.payload;
		},
	},
	extraReducers: builder => {
		for (const thunk of votingSliceThunks) {
			builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
		}
	},
});

export const { setUserId } = votingSlice.actions;

export default votingSlice.reducer;
