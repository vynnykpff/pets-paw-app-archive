import { IBreedsItem } from "@/common/types/BreedsItem";
import { sortAsc } from "@/common/utils/sortAsc";
import { sortDesc } from "@/common/utils/sortDesc";
import { createSlice } from "@reduxjs/toolkit";
import breedsSliceThunks from "./thunks";

export interface BreedsState {
	isPending: boolean;

	breedId: string;
	breedImage: string;
	breedsData: IBreedsItem[];
	breedName: string;
	breedsNames: string[];
	breedsLimit: string;

	catTemperament: string;
	catOrigin: string;
	catWeight: string;
	catLifeSpan: string;
}

const initialState: BreedsState = {
	isPending: true,

	breedsData: [],
	breedsNames: [],

	// Single Cat
	breedId: "",
	breedName: "",
	breedImage: "",
	breedsLimit: "10",

	catTemperament: "",
	catOrigin: "",
	catWeight: "",
	catLifeSpan: "",
};

export const breedsSlice = createSlice({
	name: "breeds",
	initialState,
	reducers: {
		setSortAsc: (state, action) => {
			state.breedsData = sortAsc(action.payload);
		},
		setSortDesc: (state, action) => {
			state.breedsData = sortDesc(action.payload);
		},
		setBreedLimit: (state, action) => {
			state.breedsLimit = action.payload;
		},
	},
	extraReducers: builder => {
		for (const thunk of breedsSliceThunks) {
			builder.addCase(thunk.asyncThunk.pending, state => {
				state.isPending = true;
			});
			builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
		}
	},
});

export const { setSortAsc, setSortDesc, setBreedLimit } = breedsSlice.actions;

export default breedsSlice.reducer;
