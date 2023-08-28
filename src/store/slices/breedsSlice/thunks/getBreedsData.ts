import {IBreedsItem} from "@/common/types/BreedsItem";
import {BreedsService} from "@/services/BreedsService";
import {BreedsState} from "@/store/slices/breedsSlice/slice";

import {StoreAsyncThunkHandler} from "@/common/types/StoreAsyncThunkHandler";
import {StoreAsyncThunk} from "@/common/types/StoreAsyncThunk";
import {createAsyncThunk} from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk("breeds/get_breeds_names", async function ({page, limit}: {
	page: number,
	limit: string
}, {rejectWithValue}) {
	try {
		return await BreedsService.getBreedsData(page, limit);
	} catch (error: any) {
		return rejectWithValue(error.message);
	}
});

const storeHandler: StoreAsyncThunkHandler<BreedsState> = (state, action) => {
	const breedsData = action.payload.map((item: IBreedsItem) => {
		return {
			breedsId: item.id,
			breedName: item.name,
			url: item.image?.url,
			breedImageId: item.image?.id,
		};
	});

	const hasMoreBreeds = breedsData.length > 0;

	const names = action.payload.map((item: IBreedsItem) => ({text: item.name, value: item.id}));

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
