import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getVotingImage } from "@/store/slices/votingSlice/thunks/getVotingImage";
import { AnyAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import styles from "./VotingImage.module.scss";

const VotingImage = () => {
	const { url } = useAppSelector(state => state.votingSliceReducer);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getVotingImage.asyncThunk(null) as unknown as AnyAction);
	}, []);

	return (
		<div className={styles.votingImageContainer}>
			<img src={url} className={styles.image} alt="random-cat" />
		</div>
	);
};

export default VotingImage;
