import { useAppSelector } from "@/hooks/useAppSelector";
import styles from "./VotingImage.module.scss";

const VotingImage = () => {
	const { imageUrl } = useAppSelector(state => state.votingSliceReducer);

	return (
		<div className={styles.votingImageContainer}>
			<img src={imageUrl} className={styles.image} alt="random-cat" />
		</div>
	);
};

export default VotingImage;
