import { LogType } from "@/common/constants/logType";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { VotingData, VotingState } from "@/common/types/Voting";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { VotingService } from "@/services/VotingService";
import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const asyncThunk = createAsyncThunk("voting/delete_favourite", async function (favouriteId: string, { rejectWithValue }) {
  try {
    return VotingService.deleteFavourites(favouriteId);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<VotingState, PayloadAction<VotingData>> = (state, action) => {
  return {
    ...state,
    logs: [
      {
        type: LogType.REMOVE_FROM_FAVOURITE,
        imageId: action.payload.image_id,
        time: getCurrentTime(),
      },
      ...state.logs,
    ],
  };
};

export const deleteFavourite: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
