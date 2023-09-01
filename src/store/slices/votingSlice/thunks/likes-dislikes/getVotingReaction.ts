import { ReactionStatus } from "@/common/types/Voting";
import { VotingService } from "@/services/VotingService";
import { VotingState } from "@/store/slices/votingSlice/slice";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("voting/get_voting_reaction", async function (userId: string, { rejectWithValue }) {
  try {
    return await VotingService.getVotingReaction(userId);
  } catch (error: any) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An error occurred");
    }
  }
});

interface ImageData {
  id: string;
  url: string;
}

interface ReactionData {
  image: ImageData;
  value: number;
}

const storeHandler: StoreAsyncThunkHandler<VotingState> = (state, action: PayloadAction<>) => {
  const extractedData: ReactionStatus[] = action.payload.map((item: ReactionData) => {
    return {
      url: item.image.url,
      value: item.value,
    };
  });

  const likes = extractedData.filter(item => item.value === 1);
  const disLikes = extractedData.filter(item => item.value === -1);

  return {
    ...state,
    likes,
    disLikes,
    isPending: false,
  };
};

export const getVotingReaction: StoreAsyncThunk<VotingState> = {
  asyncThunk,
  storeHandler,
};
