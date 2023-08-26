import DislikeIcon from "@/assets/icons/dislike.svg";

import LikeIcon from "@/assets/icons/like.svg";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import styles from "./VotingLogs.module.scss";

const VotingLogs = () => {
	const { value, image_id: imageId } = useAppSelector(state => state.votingSliceReducer);

	return (
		<div className={styles.votingLogsContent}>
			<div className={styles.dataContainer}>
				<div className={styles.logTime}>{getCurrentTime()}</div>
				<div className={styles.logTitle}>
					Image ID: <span className={styles.logCode}>{imageId}</span> was added to {value === -1 ? "Dislikes" : "Likes"}
				</div>
			</div>
			<div className={styles.logIcon}>
				{value === -1 ? <DislikeIcon viewBox="0 0 30 26" /> : <LikeIcon viewBox="0 0 30 26" />}
				{/*<FavouriteIcon viewBox="0 0 30 26" />*/}
			</div>
		</div>
	);
};

export default VotingLogs;
