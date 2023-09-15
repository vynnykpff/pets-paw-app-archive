import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { FavouriteItem, VotingState } from "@/common/types/Voting";
import { VotingService } from "@/services/VotingService";
import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const asyncThunk = createAsyncThunk("voting/get_favourites", async function (userId: string, { rejectWithValue }) {
  try {
    return VotingService.getFavourites(userId);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<VotingState, PayloadAction<FavouriteItem[]>> = (state, action) => {
  const favourites: FavouriteItem[] = action.payload.map(favourite => {
    return {
      image: favourite.image,
      id: favourite.id,
    };
  });

  return {
    ...state,
    favourites,
    isPending: false,
  };
};

export const getFavourites: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
