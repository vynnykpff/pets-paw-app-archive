import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { VotingImage } from "@/common/types/Voting";
import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/get_image", async function (arg, { rejectWithValue }) {
  try {
    return await VotingService.getImage();
  } catch (error: any) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Error with getting image");
  }
});

// TODO: fix typing for storeHandler
// @ts-expect-error
const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, { payload: { url, id } }: PayloadAction<VotingImage>) => {
  state.imageId = id;
  state.imageUrl = url;
  state.isPending = false;
};

export const getVotingImage: StoreAsyncThunk<VotingState> = {
  asyncThunk,
  storeHandler,
};
