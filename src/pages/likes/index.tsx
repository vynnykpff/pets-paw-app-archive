import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getVotingReaction } from "@/store/slices/votingSlice/thunks/getVotingReaction";
import Head from "next/head";
import { FC, useEffect } from "react";

const Likes: FC = () => {
	const dispatch = useAppDispatch();
	const { sub_id: subId, likesArray, isPending } = useAppSelector(state => state.votingSliceReducer);

	useEffect(() => {
		if (subId) {
			dispatch(getVotingReaction.asyncThunk(subId));
		}
	}, [subId]);

	return (
		<>
			<Head>
				<title>Likes - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>
					{!isPending ? (
						likesArray.map((item, index) => <img key={index} width={200} src={item.url} alt="like item" />)
					) : (
						<div>Loading...</div>
					)}
				</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default withAuthorizedRoute(Likes);
