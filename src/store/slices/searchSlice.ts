import { createSlice } from "@reduxjs/toolkit";
import {IBreedsItem} from "@/common/types/BreedsItem";

export interface SearchState {
	searchValue: IBreedsItem[];
	inputValue: string;
}

const initialState: SearchState = {
	searchValue: [],
	inputValue: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		setInputValue: (state, action) => {
			state.inputValue = action.payload;
		}
	},
});

export const { setSearchValue, setInputValue } = searchSlice.actions;
export default searchSlice.reducer;