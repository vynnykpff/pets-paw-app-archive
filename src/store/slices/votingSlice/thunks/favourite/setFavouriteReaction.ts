import { LogType } from "@/common/constants/logType";
import { FavouritesType } from "@/common/types/Favourites";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/set_favourite", async function (favouriteData: FavouritesType, { rejectWithValue }) {
  try {
    await VotingService.setFavourites(favouriteData);
    return favouriteData.image_id;
  } catch (error: any) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An error occurred");
    }
  }
});

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action) => {
  state.logs = [{ type: LogType.ADD_TO_FAVOURITE, imageId: action.payload, time: getCurrentTime() }, ...state.logs];
};

export const setFavouriteReaction: StoreAsyncThunk<VotingState> = {
  asyncThunk,
  storeHandler,
};
