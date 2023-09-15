import GridImages from "@/components/GridImages/GridImages";
import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Loader from "@/components/ui/Loader/Loader";
import LogError from "@/components/ui/LogError/LogError";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import { useAppSelector } from "@/hooks/useAppSelector";
import styles from "@/styles/Reaction.module.scss";
import Head from "next/head";
import { FC } from "react";

// TODO: Change naming functions to Pascal_Case, e.x. DislikesPage
const Dislikes: FC = () => {
  const { disLikes, isPending } = useAppSelector(state => state.votingSliceReducer);

  return (
    <>
      <Head>
        <title>Dislikes - PetsPaw</title>
      </Head>
      <LayoutPage>
        <LayoutPageContent>
          <div className={styles.galleryContainer}>
            {!isPending ? (
              <>
                <GridImages arrayImages={disLikes} />
                {!disLikes.length && <LogError title="No item found" />}
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

export default withAuthorizedRoute(Dislikes);
