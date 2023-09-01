import { configureStore } from "@reduxjs/toolkit";

import breedsSliceReducer from "./slices/breedsSlice/slice";
import themeSliceReducer from "./slices/themeSlice";
import votingSliceReducer from "./slices/votingSlice/slice";
import searchSliceReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    themeSliceReducer,
    votingSliceReducer,
    breedsSliceReducer,
    searchSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
