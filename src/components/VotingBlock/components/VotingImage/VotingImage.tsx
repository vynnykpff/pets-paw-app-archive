import { useAppSelector } from "@/hooks/useAppSelector";
import Image from "next/image";
import styles from "./VotingImage.module.scss";

const VotingImage = () => {
  const { imageUrl } = useAppSelector(state => state.votingSliceReducer);

  return (
    <div className={styles.votingImageContainer}>
      <Image width={100} height={100} src={imageUrl} className={styles.image} alt="random-cat" />
    </div>
  );
};

export default VotingImage;
