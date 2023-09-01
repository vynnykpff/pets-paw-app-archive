import { CatImageType, GetBreedsDataResponse, IBreedsItem } from "@/common/types/Breeds";
import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { StoreAsyncThunkHandler } from "@/common/types/StoreAsyncThunkHandler";
import { BreedsService } from "@/services/BreedsService";
import { BreedsState } from "@/store/slices/breedsSlice/slice";
import { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type BreedsNamesPayload = {
  page: number;
  limit: number;
};

type BreedsPayloadData = {
  id: string;
  name: string;
  url: CatImageType[];
  imageId: CatImageType[];
};

const asyncThunk = createAsyncThunk("breeds/get_breeds_names", async function ({ page, limit }: BreedsNamesPayload, { rejectWithValue }) {
  try {
    return await BreedsService.getBreedsData(page, limit);
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    } else {
      return rejectWithValue("An error occurred");
    }
  }
});

// TODO: fix bag with typing
const storeHandler: StoreAsyncThunkHandler<BreedsState> = (state, action: PayloadAction<GetBreedsDataResponse[]>) => {
  const breedsData = action.payload.map<IBreedsItem>(item => {
    return {
      breedsId: item.id,
      breedName: item.name,
      url: item.image?.url,
      breedImageId: item.image?.id,
    };
  });

  const hasMoreBreeds = breedsData.length > 0;

  const names = action.payload.map(item => ({ text: item.name, value: item.id }));

  return {
    ...state,
    breedsData,
    isPending: false,
    hasMoreBreeds,
    breedsNames: names,
  };
};

export const getBreedsData: StoreAsyncThunk<BreedsState> = {
  asyncThunk,
  storeHandler,
};
