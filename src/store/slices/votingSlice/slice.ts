import { createSlice } from "@reduxjs/toolkit";
import votingSliceThunks from "./thunks";

export interface VotingState {
	isPending: boolean;
	image_id: string;
	sub_id?: string | null;
	url: string;
	value: number;
}

const initialState: VotingState = {
	isPending: true,
	image_id: "",
	sub_id: null,
	url: "",
	value: 0,
};

export const votingSlice = createSlice({
	name: "voting",
	initialState,
	reducers: {},
	extraReducers: builder => {
		for (const thunk of votingSliceThunks) {
			builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
		}
	},
});

export default votingSlice.reducer;
