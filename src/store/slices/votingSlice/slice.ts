import { LogType } from "@/common/constants/logType";
import { IFavouritesItem } from "@/common/types/Favourites";
import { IReactionItem } from "@/common/types/ReactionItem";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import votingSliceThunks from "./thunks";

export interface ILog {
	type: LogType;
	time: string;
	imageId: string;
}

export interface VotingState {
	isPending: boolean;

	imageId: string;
	imageUrl: string;
	imageStatus: number;

	likesArray: IReactionItem[];
	disLikesArray: IReactionItem[];
	favouritesArray: IFavouritesItem[];

	logs: ILog[];
}

const initialState: VotingState = {
	isPending: true,

	imageId: "",
	imageUrl: "",
	imageStatus: 0,

	likesArray: [],
	disLikesArray: [],
	favouritesArray: [],

	logs: [],
};

export const votingSlice = createSlice({
	name: "voting",
	initialState,
	reducers: {
		addToLogs: (state, action: PayloadAction<ILog>) => {
			state.logs = [action.payload, ...state.logs];
		},
		removeLogByImageId: (state, action: PayloadAction<string>) => {
			state.logs = state.logs.filter(o => o.imageId !== action.payload);
		},
	},
	extraReducers: builder => {
		for (const thunk of votingSliceThunks) {
			builder.addCase(thunk.asyncThunk.pending, state => {
				state.isPending = true;
			});
			builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
		}
	},
});

export const { addToLogs, removeLogByImageId } = votingSlice.actions;

export default votingSlice.reducer;
