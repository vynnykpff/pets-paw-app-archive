import ActiveFavouriteIcon from "@/assets/icons/activeFavourite.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import FavouriteIcon from "@/assets/icons/favourite.svg";

import LikeIcon from "@/assets/icons/like.svg";
import { LogType } from "@/common/constants/logType";
import { FavouritesType } from "@/common/types/Favourites";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { addToLogs } from "@/store/slices/votingSlice/slice";
import { setFavouriteReaction } from "@/store/slices/votingSlice/thunks/favourite/setFavouriteReaction";
import { getVotingImage } from "@/store/slices/votingSlice/thunks/getVotingImage";
import { setVotingReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/setVotingReaction";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import styles from "./VotingReaction.module.scss";

const VotingReaction = () => {
	const [isClicked, setIsClicked] = useState(false);
	const { image_id: imageId, sub_id: subId } = useAppSelector(state => state.votingSliceReducer);
	const dispatch = useAppDispatch();
	const addToFavouritesReactions = useRef<FavouritesType[]>([]);

	const handleNextImage = (value: number) => {
		setIsClicked(false);
		dispatch(getVotingImage.asyncThunk(null));
		dispatch(setVotingReaction.asyncThunk({ image_id: imageId, value, sub_id: subId }));
	};

	const handleSetFavourites = () => {
		if (isClicked) {
			addToFavouritesReactions.current = addToFavouritesReactions.current.filter(i => i.image_id !== imageId && i.sub_id !== subId);
			setIsClicked(false);
			dispatch(addToLogs({ type: LogType.REMOVE_FROM_FAVOURITE, imageId, time: getCurrentTime() }));
		} else {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			addToFavouritesReactions.current.push({ image_id: imageId, sub_id: subId! });
			setIsClicked(true);
			dispatch(addToLogs({ type: LogType.ADD_TO_FAVOURITE, imageId, time: getCurrentTime() }));
		}
	};

	useEffect(() => {
		return () => {
			for (const reaction of addToFavouritesReactions.current) {
				dispatch(setFavouriteReaction.asyncThunk({ image_id: reaction.image_id, sub_id: reaction.sub_id }));
			}
		};
	}, []);

	return (
		<div className={styles.votingReactionContainer}>
			<div onClick={() => handleNextImage(1)} className={cn(styles.votingReactionItem, styles.likeItem)}>
				<LikeIcon />
			</div>
			<div onClick={handleSetFavourites} className={cn(styles.votingReactionItem, styles.favouriteItem)}>
				{isClicked ? <ActiveFavouriteIcon /> : <FavouriteIcon />}
			</div>
			<div onClick={() => handleNextImage(-1)} className={cn(styles.votingReactionItem, styles.dislikeItem)}>
				<DislikeIcon />
			</div>
		</div>
	);
};

export default VotingReaction;
