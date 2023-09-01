import { LogType } from "@/common/constants/logType";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { Voting } from "@/common/types/Voting";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/set_reaction", async function (votingData: Voting, { rejectWithValue }) {
  try {
    return await VotingService.setReaction(votingData);
  } catch (error: any) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An error occurred");
    }
  }
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action: PayloadAction<>) => {
  state.imageStatus = action.payload.value;
  state.logs = [
    { type: action.payload.value === 1 ? LogType.LIKE : LogType.DISLIKE, imageId: action.payload.image_id, time: getCurrentTime() },
    ...state.logs,
  ];
};

export const setVotingReaction: StoreAsyncThunk<VotingState> = {
  asyncThunk,
  storeHandler,
};
