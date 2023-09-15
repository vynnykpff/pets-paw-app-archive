import Loader from "@/components/ui/Loader/Loader";
import VotingImage from "@/components/VotingBlock/components/VotingImage/VotingImage";
import VotingLogs from "@/components/VotingBlock/components/VotingLogs/VotingLogs";
import VotingReaction from "@/components/VotingBlock/components/VotingReaction/VotingReaction";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getImage } from "@/store/slices/votingSlice/thunks/getImage";
import { useEffect } from "react";
import styles from "./VotingBlock.module.scss";

const VotingBlock = () => {
  const { logs, isPending } = useAppSelector(state => state.votingSliceReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getImage.asyncThunk(null));
  }, []);

  return (
    <div className={styles.votingContainer}>
      <div className={styles.votingBlock}>
        {!isPending ? (
          <>
            <VotingImage />
            <VotingReaction />
          </>
        ) : (
          <Loader />
        )}
      </div>
      {logs.length > 0 && <VotingLogs />}
    </div>
  );
};

export default VotingBlock;
