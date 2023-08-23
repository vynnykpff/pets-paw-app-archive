import cn from "classnames";
import { useState } from "react";
import styles from "./VotingReaction.module.scss";

import LikeIcon from "@/assets/icons/like.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import FavouriteIcon from "@/assets/icons/favourite.svg";
import ActiveFavouriteIcon from "@/assets/icons/activeFavourite.svg";

const VotingReaction = () => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className={styles.votingReactionContainer}>
			<div className={cn(styles.votingReactionItem, styles.likeItem)}>
				<LikeIcon />
			</div>
			<div onClick={() => setIsClicked(prev => !prev)} className={cn(styles.votingReactionItem, styles.favouriteItem)}>
				{isClicked ? <ActiveFavouriteIcon /> : <FavouriteIcon />}
			</div>
			<div className={cn(styles.votingReactionItem, styles.dislikeItem)}>
				<DislikeIcon />
			</div>
		</div>
	);
};

export default VotingReaction;
