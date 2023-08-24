import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import themeSliceReducer from "./slices/themeSlice";
import votingSliceReducer from "./slices/votingSlice/slice";

export const store = configureStore({
	reducer: {
		themeSliceReducer,
		votingSliceReducer,
	},
	middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
