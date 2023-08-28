import {FC, ReactNode} from "react";
import styles from "./ReactionCard.module.scss";

const ReactionCard: FC<{ children?: ReactNode; imageUrl: string; isHoverAble?: boolean }> = ({
	                                                                                             children,
	                                                                                             imageUrl,
	                                                                                             isHoverAble = false,
                                                                                             }) => {

	return (
		<div style={{backgroundImage: `url(${imageUrl})`}} className={styles.cardItem}>
			{isHoverAble && <div className={styles.reactionHover}>{children}</div>}
		</div>
	);
};
export default ReactionCard;
