import {FC, ReactNode} from "react";
import styles from "./ReactionCard.module.scss";
import {useRouter} from "next/router";
import {Routes} from "@/common/constants/routes";
import cn from "classnames";

const ReactionCard: FC<{ children?: ReactNode; imageUrl: string; isHoverAble?: boolean }> = ({children, imageUrl, isHoverAble = false}) => {
	const router = useRouter();

	return (
		<div style={{backgroundImage: `url(${imageUrl})`}} className={styles.cardItem}>
			{isHoverAble && <div
				className={cn(styles.reactionHover, router.pathname !== Routes.FAVOURITES ? styles.additionalyHover : styles.reactionHover)}>{children}</div>}
		</div>
	);
};
export default ReactionCard;
