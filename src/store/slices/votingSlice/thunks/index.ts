import { VotingState } from "@/store/slices/votingSlice/slice";
import { getVotingImage } from "@/store/slices/votingSlice/thunks/getVotingImage";
import { getVotingReaction } from "@/store/slices/votingSlice/thunks/getVotingReaction";
import { setVotingReaction } from "@/store/slices/votingSlice/thunks/setVotingReaction";
import { StoreAsyncThunk } from "@/types/StoreAsyncThunk";

const thunks: Array<StoreAsyncThunk<VotingState>> = [getVotingImage, getVotingReaction, setVotingReaction];

export default thunks;
