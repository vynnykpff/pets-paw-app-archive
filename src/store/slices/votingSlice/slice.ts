import { Log } from "@/common/types/Logs";
import { ReactionStatus } from "@/common/types/Voting";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import votingSliceThunks from "./thunks";

export interface VotingState {
  isPending: boolean;
  imageId: string;
  imageUrl: string;

  imageStatus: number;

  likes: ReactionStatus[];
  disLikes: ReactionStatus[];
  favourites: ReactionStatus[];
  logs: Log[];
}

const initialState: VotingState = {
  isPending: false,
  imageId: "",
  imageUrl: "",

  imageStatus: 0,

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
    for (const thunk of votingSliceThunks) {
      builder.addCase(thunk.asyncThunk.pending, state => {
        state.isPending = true;
      });
      builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
    }
  },
});

export const { addToLogs } = votingSlice.actions;

export default votingSlice.reducer;
