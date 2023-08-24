import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getVotingImage } from "@/store/slices/votingSlice/thunks/getVotingImage";
import { setVotingReaction } from "@/store/slices/votingSlice/thunks/setVotingReaction";
import { AnyAction } from "@reduxjs/toolkit";
import cn from "classnames";
import { useState } from "react";
import styles from "./VotingReaction.module.scss";

import LikeIcon from "@/assets/icons/like.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import FavouriteIcon from "@/assets/icons/favourite.svg";
import ActiveFavouriteIcon from "@/assets/icons/activeFavourite.svg";

const VotingReaction = () => {
	const [isClicked, setIsClicked] = useState(false);
	const { image_id: imageId } = useAppSelector(state => state.votingSliceReducer);
	const dispatch = useAppDispatch();

	const handleNextImage = () => {
		dispatch(setVotingReaction.asyncThunk({ image_id: imageId, value: 1, sub_id: "vynnykpff" }) as unknown as AnyAction);
		dispatch(getVotingImage.asyncThunk(null) as unknown as AnyAction);
	};

	return (
		<div className={styles.votingReactionContainer}>
			<div onClick={handleNextImage} className={cn(styles.votingReactionItem, styles.likeItem)}>
				<LikeIcon />
			</div>
			<div onClick={() => setIsClicked(prev => !prev)} className={cn(styles.votingReactionItem, styles.favouriteItem)}>
				{isClicked ? <ActiveFavouriteIcon /> : <FavouriteIcon />}
			</div>
			<div onClick={handleNextImage} className={cn(styles.votingReactionItem, styles.dislikeItem)}>
				<DislikeIcon />
			</div>
		</div>
	);
};

export default VotingReaction;
