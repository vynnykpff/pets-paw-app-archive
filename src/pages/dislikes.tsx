import GridImages from "@/components/GridImages/GridImages";
import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Loader from "@/components/ui/Loader/Loader";
import LogError from "@/components/ui/LogError/LogError";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getVotingReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/getVotingReaction";
import styles from "@/styles/Reaction.module.scss";
import Head from "next/head";
import { FC, useEffect } from "react";

const Dislikes: FC = () => {
	const dispatch = useAppDispatch();
	const { disLikesArray, isPending } = useAppSelector(state => state.votingSliceReducer);
	const { userId } = useAppSelector(state => state.userSliceReducer);

	useEffect(() => {
		if (userId) {
			dispatch(getVotingReaction.asyncThunk(userId));
		}
	}, [userId]);
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
								<GridImages arrayImages={disLikesArray} />
								{!disLikesArray.length && <LogError title="No item found" />}
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
