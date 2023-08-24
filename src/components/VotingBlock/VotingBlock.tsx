import VotingImage from "@/components/VotingBlock/components/VotingImage/VotingImage";
import VotingLogs from "@/components/VotingBlock/components/VotingLogs/VotingLogs";
import VotingReaction from "@/components/VotingBlock/components/VotingReaction/VotingReaction";
import styles from "./VotingBlock.module.scss";

const VotingBlock = () => {
	return (
		<div className={styles.votingContainer}>
			<div className={styles.votingBlock}>
				<VotingImage />
				<VotingReaction />
			</div>
			<div className={styles.votingLogsContainer}>
				<VotingLogs />
				<VotingLogs />
				<VotingLogs />
				<VotingLogs />
				<VotingLogs />
			</div>
		</div>
	);
};

export default VotingBlock;
