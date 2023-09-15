import { Log } from "@/common/types/Logs";
import { VotingState } from "@/common/types/Voting";
import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { thunks } from "./thunks";

const initialState: VotingState = {
  isPending: false,
  imageId: "",
  imageUrl: "",
  likes: [],
  disLikes: [],
  favourites: [],
  logs: [],
};

export const votingSlice = createSlice({
  name: "voting",
  initialState,
  reducers: {
    addToLogs: (state, action: PayloadAction<Log>) => {
      state.logs = [action.payload, ...state.logs];
    },
  },
  extraReducers: builder => {
    for (const thunk of thunks) {
      builder.addCase(thunk.asyncThunk.pending, state => {
        state.isPending = true;
      });
      builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler as CaseReducer);
    }
  },
});

export const { addToLogs } = votingSlice.actions;

export default votingSlice.reducer;
