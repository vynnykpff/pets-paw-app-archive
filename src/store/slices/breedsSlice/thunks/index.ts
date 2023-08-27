import { StoreAsyncThunk } from "@/common/types/StoreAsyncThunk";
import { BreedsState } from "@/store/slices/breedsSlice/slice";
import { getBreedsData } from "@/store/slices/breedsSlice/thunks/getBreedsData";
import { getCurrentBreedImages } from "@/store/slices/breedsSlice/thunks/getCurrentBreedImages";

const thunks: Array<StoreAsyncThunk<BreedsState>> = [getBreedsData, getCurrentBreedImages];

export default thunks;
