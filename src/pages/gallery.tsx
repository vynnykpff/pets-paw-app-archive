import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import Head from "next/head";
import { FC } from "react";
import GalleryNavigation from "@/components/GalleryNavigation/GalleryNavigation";
import styles from "@/styles/Reaction.module.scss";
import GridImages from "@/components/GridImages/GridImages";
import FavouriteIcon from "@/assets/icons/fillFavourite.svg";
import Loader from "@/components/ui/Loader/Loader";
import { useAppSelector } from "@/hooks/useAppSelector";
import { deleteFavouriteItem } from "@/store/slices/votingSlice/thunks/favourite/deleteFavouriteItem";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const Gallery: FC = () => {
  const { favouritesArray, isPending } = useAppSelector(state => state.votingSliceReducer);
  const dispatch = useAppDispatch();
  const handleRemoveFavouriteItem = (id: string | undefined) => {
    if (id === undefined) {
      return;
    }
    dispatch(deleteFavouriteItem.asyncThunk(id));
  };

  return (
    <>
      <Head>
        <title>Gallery - PetsPaw</title>
      </Head>
      <LayoutPage>
        <LayoutPageContent>
          <GalleryNavigation />
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
              </>
            ) : (
              <Loader />
            )}
          </div>
        </LayoutPageContent>
      </LayoutPage>
    </>
  );
};

export default withAuthorizedRoute(Gallery);
