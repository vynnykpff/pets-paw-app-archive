import { FC, ReactNode } from "react";
import styles from "./ReactionCard.module.scss";

const ReactionCard: FC<{ children?: ReactNode; imageUrl: string }> = ({ children, imageUrl }) => {
	return (
		<div style={{ backgroundImage: `url(${imageUrl})` }} className={styles.cardItem}>
			{children && <div className={styles.reactionHover}>{children}</div>}
		</div>
	);
};

export default ReactionCard;
