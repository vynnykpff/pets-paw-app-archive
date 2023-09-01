import { LogType } from "@/common/constants/logType";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/delete_favourite_item", async function (favouriteId: string, { rejectWithValue }) {
  try {
    await VotingService.deleteFavourites(favouriteId);
    return favouriteId;
  } catch (error: any) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An error occurred");
    }
  }
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
  state.logs = [
    {
      type: LogType.REMOVE_FROM_FAVOURITE,
      imageId: action.payload,
      time: getCurrentTime(),
    },
    ...state.logs,
  ];
};

export const deleteFavouriteItem: StoreAsyncThunk<VotingState> = {
  asyncThunk,
  storeHandler,
};
