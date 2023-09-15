import ActiveFavouriteIcon from "@/assets/icons/activeFavourite.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import FavouriteIcon from "@/assets/icons/favourite.svg";
import LikeIcon from "@/assets/icons/like.svg";
import { LogType } from "@/common/constants/logType";
import { getCurrentTime } from "@/common/utils/getCurrentTime";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { addToLogs } from "@/store/slices/votingSlice/slice";
import { setFavourite } from "@/store/slices/votingSlice/thunks/favourite/setFavourite";
import { getImage } from "@/store/slices/votingSlice/thunks/getImage";
import { setReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/setReaction";
import cn from "classnames";
import firebase from "firebase/compat";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./VotingReaction.module.scss";
import auth = firebase.auth;

const VotingReaction = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { imageId } = useAppSelector(state => state.votingSliceReducer);
  // const { userId } = useAppSelector(state => state.userSliceReducer);
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const dispatch = useAppDispatch();
  const addToFavouritesReactions = useRef([]);

  const handleNextImage = (value: number) => {
    if (value === VotingReaction.DISLIKE) {
      setShowModal(true);
      setModalMessage("successfully added to Dislikes");
    } else {
      setShowModal(true);
      setModalMessage("successfully added to Likes");
    }

    setTimeout(() => {
      setIsClicked(false);
      dispatch(getImage.asyncThunk(null));
      dispatch(setReaction.asyncThunk({ image_id: imageId, value, sub_id: user?.uid }));
    }, 1200);
  };

  const handleSetFavourites = () => {
    if (isClicked) {
      addToFavouritesReactions.current = addToFavouritesReactions.current.filter(i => i.image_id !== imageId && i.sub_id !== userId);
      setIsClicked(false);
      dispatch(addToLogs({ type: LogType.REMOVE_FROM_FAVOURITE, imageId, time: getCurrentTime() }));
    } else {
      addToFavouritesReactions.current.push({ image_id: imageId, sub_id: userId });
      setIsClicked(true);
      dispatch(addToLogs({ type: LogType.ADD_TO_FAVOURITE, imageId, time: getCurrentTime() }));
    }
  };

  useEffect(() => {
    return () => {
      for (const reaction of addToFavouritesReactions.current) {
        dispatch(setFavourite.asyncThunk({ image_id: reaction.image_id, sub_id: userId }));
      }
    };
  }, []);

  return (
    <>
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
      {showModal && <ModalNotification title={modalMessage} typeNotification={"success"} />}
    </>
  );
};

export default VotingReaction;
