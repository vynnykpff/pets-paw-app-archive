import { LogType } from "@/common/constants/logType";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { VotingData, VotingState } from "@/common/types/Voting";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { VotingService } from "@/services/VotingService";
import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const asyncThunk = createAsyncThunk("voting/set_favourite", async function (favouriteData: VotingData, { rejectWithValue }) {
  try {
    return VotingService.setFavourites(favouriteData);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<VotingState, PayloadAction<VotingData>> = (state, action) => {
  return {
    ...state,
    logs: [{ type: LogType.ADD_TO_FAVOURITE, imageId: action.payload.image_id, time: getCurrentTime() }, ...state.logs],
  };
};

export const setFavourite: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
