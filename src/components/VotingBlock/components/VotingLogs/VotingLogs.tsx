import FavouriteIcon from "@/assets/icons/favourite.svg";
import styles from "./VotingLogs.module.scss";

const VotingLogs = () => {
	return (
		<div className={styles.votingLogsContent}>
			<div className={styles.dataContainer}>
				<div className={styles.logTime}>22:35</div>
				<div className={styles.logTitle}>
					Image ID: <span className={styles.logCode}>fQSunHvl8</span> was added to Favourites
				</div>
			</div>
			<div className={styles.logIcon}>
				<FavouriteIcon viewBox="0 0 30 26" />
			</div>
		</div>
	);
};

export default VotingLogs;
