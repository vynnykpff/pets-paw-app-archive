import ActiveFavouriteIcon from "@/assets/icons/activeFavourite.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import FavouriteIcon from "@/assets/icons/favourite.svg";

import LikeIcon from "@/assets/icons/like.svg";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getVotingImage } from "@/store/slices/votingSlice/thunks/getVotingImage";
import { setVotingReaction } from "@/store/slices/votingSlice/thunks/setVotingReaction";
import cn from "classnames";
import { useState } from "react";
import styles from "./VotingReaction.module.scss";

const VotingReaction = () => {
	const [isClicked, setIsClicked] = useState(false);
	const { image_id: imageId, sub_id: subId } = useAppSelector(state => state.votingSliceReducer);
	const dispatch = useAppDispatch();

	const handleNextImage = (value: number) => {
		dispatch(getVotingImage.asyncThunk(null));
		dispatch(setVotingReaction.asyncThunk({ image_id: imageId, value, sub_id: subId }));
	};

	return (
		<div className={styles.votingReactionContainer}>
			<div onClick={() => handleNextImage(1)} className={cn(styles.votingReactionItem, styles.likeItem)}>
				<LikeIcon />
			</div>
			<div onClick={() => setIsClicked(prev => !prev)} className={cn(styles.votingReactionItem, styles.favouriteItem)}>
				{isClicked ? <ActiveFavouriteIcon /> : <FavouriteIcon />}
			</div>
			<div onClick={() => handleNextImage(-1)} className={cn(styles.votingReactionItem, styles.dislikeItem)}>
				<DislikeIcon />
			</div>
		</div>
	);
};

export default VotingReaction;
