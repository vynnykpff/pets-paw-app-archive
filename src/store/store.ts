import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import breedsSliceReducer from "./slices/breedsSlice/slice";

import themeSliceReducer from "./slices/themeSlice";
import userSliceReducer from "./slices/userSlice";
import votingSliceReducer from "./slices/votingSlice/slice";
import searchSliceReducer from "./slices/searchSlice";

export const store = configureStore({
	reducer: {
		themeSliceReducer,
		votingSliceReducer,
		userSliceReducer,
		breedsSliceReducer,
		searchSliceReducer,
	},
	middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
