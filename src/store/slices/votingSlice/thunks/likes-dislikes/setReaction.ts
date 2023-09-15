import { LogType } from "@/common/constants/logType";
import { VotingReaction } from "@/common/constants/votingReaction";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { VotingData, VotingState } from "@/common/types/Voting";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { VotingService } from "@/services/VotingService";
import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const asyncThunk = createAsyncThunk("voting/set_reaction", async function (votingData: VotingData, { rejectWithValue }) {
  try {
    return VotingService.setReaction(votingData);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<VotingState, PayloadAction<VotingData>> = (state, action) => {
  return {
    ...state,
    logs: [
      {
        type: (action.payload.value as VotingReaction) === VotingReaction.LIKE ? LogType.LIKE : LogType.DISLIKE,
        imageId: action.payload.image_id,
        time: getCurrentTime(),
      },
      ...state.logs,
    ],
  };
};

export const setReaction: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
