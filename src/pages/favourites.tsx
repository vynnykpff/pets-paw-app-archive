import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { deleteFavouriteItem } from "@/store/slices/votingSlice/thunks/favourite/deleteFavouriteItem";
import { getFavouritesItems } from "@/store/slices/votingSlice/thunks/favourite/getFavouritesItems";
import Head from "next/head";
import { FC, useEffect } from "react";

const Favourites: FC = () => {
	const dispatch = useAppDispatch();
	const { sub_id: subId, favouritesArray, isPending } = useAppSelector(state => state.votingSliceReducer);

	useEffect(() => {
		if (subId) {
			dispatch(getFavouritesItems.asyncThunk(subId));
		}
	}, [subId]);

	const handleRemoveFavouriteItem = (id: string) => {
		dispatch(deleteFavouriteItem.asyncThunk(id));
		dispatch(getFavouritesItems.asyncThunk(subId));

	};

	return (
		<>
			<Head>
				<title>Favourites - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>
					{!isPending ? (
						favouritesArray.map((item, index) => (
							<div style={{ position: "relative", width: 150, height: 150, display: "flex", columnGap: 30 }} key={index}>
								<img width="100%" src={item.url} alt="like item" />
								<span
									style={{
										padding: 10,
										fontSize: 20,
										cursor: "pointer",
										color: "var(--background-static)",
										position: "absolute",
										top: 0,
										right: 0,
									}}
									onClick={() => handleRemoveFavouriteItem(item.id)}
								>
									x
								</span>
							</div>
						))
					) : (
						<div>Loading...</div>
					)}
				</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default withAuthorizedRoute(Favourites);
