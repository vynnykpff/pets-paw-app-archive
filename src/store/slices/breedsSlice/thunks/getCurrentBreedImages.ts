import { BreedsCurrentImage, IBreedsItem } from "@/common/types/Breeds";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";

import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { BreedsService } from "@/services/BreedsService";
import { BreedsState } from "@/store/slices/breedsSlice/slice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("breeds/get_current_breed_images", async function (arg: BreedsCurrentImage, { rejectWithValue }) {
  try {
    return await BreedsService.getCurrentBreedImage(arg.page, arg.breed, arg.limit);
  } catch (error: any) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An error occurred");
    }
  }
});

// TODO: fix bug with action payload type
const storeHandler: StoreAsyncThunkHandler<BreedsState> = (state, action) => {
  state.breedsData = action.payload.map((image: IBreedsItem) => ({
    url: image.url,
    id: image.id,
    breedName: image.breeds[0].name,
  }));
  state.isPending = false;
};

export const getCurrentBreedImages: StoreAsyncThunk<BreedsState> = {
  asyncThunk,
  storeHandler,
};
