import FavouriteIcon from "@/assets/icons/fillFavourite.svg";
import { LogType } from "@/common/constants/logType";
import GridImages from "@/components/GridImages/GridImages";
import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Loader from "@/components/ui/Loader/Loader";
import LogError from "@/components/ui/LogError/LogError";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import VotingLogs from "@/components/VotingBlock/components/VotingLogs/VotingLogs";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { deleteFavourite } from "@/store/slices/votingSlice/thunks/favourite/deleteFavourite";
import { getFavourites } from "@/store/slices/votingSlice/thunks/favourite/getFavourites";
import styles from "@/styles/Reaction.module.scss";
import Head from "next/head";
import { FC, useEffect, useState } from "react";

const Favourites: FC = () => {
  const dispatch = useAppDispatch();
  const { favouritesArray, isPending, logs } = useAppSelector(state => state.votingSliceReducer);
  const { userId } = useAppSelector(state => state.userSliceReducer);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(getFavourites.asyncThunk(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (userId && logs.length && logs[0].type === LogType.REMOVE_FROM_FAVOURITE) {
      dispatch(getFavourites.asyncThunk(userId));
    }
  }, [logs]);

  const handleRemoveFavouriteItem = (id: string | undefined) => {
    if (id === undefined) {
      return;
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      dispatch(deleteFavourite.asyncThunk(id));
    }, 1200);
  };

  const filteredLogs = logs.filter(o => o.type === LogType.REMOVE_FROM_FAVOURITE);

  return (
    <>
      <Head>
        <title>Favourites - PetsPaw</title>
      </Head>
      <LayoutPage>
        <LayoutPageContent>
          <div className={styles.galleryContainer}>
            {!isPending ? (
              <>
                <GridImages isHoverAble={true} arrayImages={favouritesArray}>
                  {image => (
                    <div className={styles.imageIcon}>
                      <FavouriteIcon onClick={() => handleRemoveFavouriteItem(image.id)} />
                    </div>
                  )}
                </GridImages>
                {!favouritesArray.length && <LogError title="No item found" />}
                {logs.length > 0 && <VotingLogs logs={filteredLogs} />}
              </>
            ) : (
              <Loader />
            )}
          </div>
        </LayoutPageContent>
        {showModal && <ModalNotification title="Successfully deleted!" typeNotification={"success"} />}
      </LayoutPage>
    </>
  );
};

export default withAuthorizedRoute(Favourites);
