import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { VotingImage, VotingState } from "@/common/types/Voting";
import { VotingService } from "@/services/VotingService";
import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const asyncThunk = createAsyncThunk("voting/get_image", async function (arg, { rejectWithValue }) {
  try {
    return VotingService.getImage();
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<VotingState, PayloadAction<VotingImage>> = (state, action) => {
  return {
    ...state,
    imageId: action.payload.id,
    imageUrl: action.payload.url,
    isPending: false,
  };
};

export const getImage: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
