import ReactionCard from "@/components/ReactionCard/ReactionCard";
import GalleryGrid from "@/components/ui/GalleryGrid/GalleryGrid";
import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getVotingReaction } from "@/store/slices/votingSlice/thunks/likes-dislikes/getVotingReaction";
import Head from "next/head";
import { FC, useEffect } from "react";

const Dislikes: FC = () => {
	const dispatch = useAppDispatch();
	const { sub_id: subId, disLikesArray, isPending } = useAppSelector(state => state.votingSliceReducer);

	useEffect(() => {
		if (subId) {
			dispatch(getVotingReaction.asyncThunk(subId));
		}
	}, [subId]);
	return (
		<>
			<Head>
				<title>Dislikes - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>
					<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
						{!isPending ? (
							Array(Math.ceil(disLikesArray.length / 5))
								.fill(null)
								.map((gallery, galleryIndex) => (
									<GalleryGrid key={galleryIndex} reversed={!!(galleryIndex % 2)}>
										{disLikesArray.slice(galleryIndex, galleryIndex + 5).map((image, index) => (
											<ReactionCard key={index} imageUrl={image.url} />
										))}
									</GalleryGrid>
								))
						) : (
							<div>Loading...</div>
						)}
					</div>
				</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default withAuthorizedRoute(Dislikes);
