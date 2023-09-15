import { VotingReaction } from "@/common/constants/votingReaction";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { VotingImageReaction, VotingReactionData, VotingState } from "@/common/types/Voting";
import { VotingService } from "@/services/VotingService";
import { CaseReducer, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

const asyncThunk = createAsyncThunk("voting/get_reaction", async function (userId: string, { rejectWithValue }) {
  try {
    return VotingService.getReaction(userId);
  } catch (error) {
    return rejectWithValue((error as AxiosError).message);
  }
});

const storeHandler: CaseReducer<VotingState, PayloadAction<VotingReactionData[]>> = (state, action) => {
  const extractedData: VotingImageReaction[] = action.payload.map(item => {
    return {
      url: item.image.url,
      value: item.value,
    };
  });

  const likes = extractedData.filter(like => (like.value as VotingReaction) === VotingReaction.LIKE);
  const disLikes = extractedData.filter(dislike => (dislike.value as VotingReaction) === VotingReaction.DISLIKE);

  return {
    ...state,
    likes,
    disLikes,
    isPending: false,
  };
};

export const getReaction: StoreAsyncThunk<typeof asyncThunk, typeof storeHandler> = {
  asyncThunk,
  storeHandler,
};
