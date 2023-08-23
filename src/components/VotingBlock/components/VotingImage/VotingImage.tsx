import catImage from "@/assets/images/cat.png";
import Image from "next/image";
import styles from "./VotingImage.module.scss";

const VotingImage = () => {
	return (
		<div className={styles.votingImageContainer}>
			<Image priority={true} className={styles.image} src={catImage} alt="cat" />
		</div>
	);
};

export default VotingImage;
