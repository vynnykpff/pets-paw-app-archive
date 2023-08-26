import FavouriteIcon from "@/assets/icons/fillFavourite.svg";
import { LogType } from "@/common/constants/logType";
import GridImages from "@/components/GridImages/GridImages";
import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Loader from "@/components/ui/Loader/Loader";
import LogError from "@/components/ui/LogError/LogError";
import VotingLogs from "@/components/VotingBlock/components/VotingLogs/VotingLogs";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { deleteFavouriteItem } from "@/store/slices/votingSlice/thunks/favourite/deleteFavouriteItem";
import { getFavouritesItems } from "@/store/slices/votingSlice/thunks/favourite/getFavouritesItems";
import styles from "@/styles/Reaction.module.scss";
import Head from "next/head";
import { FC, useEffect } from "react";

const Favourites: FC = () => {
	const dispatch = useAppDispatch();
	const { sub_id: subId, favouritesArray, isPending, logs } = useAppSelector(state => state.votingSliceReducer);

	useEffect(() => {
		if (subId) {
			dispatch(getFavouritesItems.asyncThunk(subId));
		}
	}, [subId]);

	useEffect(() => {
		if (subId && logs.length && logs[0].type === LogType.REMOVE_FROM_FAVOURITE) {
			dispatch(getFavouritesItems.asyncThunk(subId));
		}
	}, [logs]);

	const handleRemoveFavouriteItem = (id: string | undefined) => {
		if (id === undefined) {
			return;
		}
		dispatch(deleteFavouriteItem.asyncThunk(id));
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
			</LayoutPage>
		</>
	);
};

export default withAuthorizedRoute(Favourites);
