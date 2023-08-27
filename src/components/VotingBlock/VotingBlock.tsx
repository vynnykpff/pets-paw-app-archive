import VotingImage from "@/components/VotingBlock/components/VotingImage/VotingImage";
import VotingLogs from "@/components/VotingBlock/components/VotingLogs/VotingLogs";
import VotingReaction from "@/components/VotingBlock/components/VotingReaction/VotingReaction";
import { useAppSelector } from "@/hooks/useAppSelector";
import styles from "./VotingBlock.module.scss";

const VotingBlock = () => {
	const { logs } = useAppSelector(state => state.votingSliceReducer);
	return (
		<div className={styles.votingContainer}>
			<div className={styles.votingBlock}>
				<VotingImage />
				<VotingReaction />
			</div>
			{logs.length > 0 && <VotingLogs />}
		</div>
	);
};

export default VotingBlock;
