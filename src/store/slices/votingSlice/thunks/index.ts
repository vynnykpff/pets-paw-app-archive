import { VotingState } from "@/store/slices/votingSlice/slice";
import { getVotingImage } from "@/store/slices/votingSlice/thunks/getVotingImage";
import { setVotingReaction } from "@/store/slices/votingSlice/thunks/setVotingReaction";
import { StoreAsyncThunk } from "@/types/StoreAsyncThunk";

const thunks: Array<StoreAsyncThunk<VotingState>> = [getVotingImage, setVotingReaction];

export default thunks;
