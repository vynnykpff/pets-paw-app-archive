import GridImages from "@/components/GridImages/GridImages";
import Loader from "@/components/ui/Loader/Loader";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getBreedsData } from "@/store/slices/breedsSlice/thunks/getBreedsData";
import styles from "@/styles/Reaction.module.scss";
import React, { useEffect } from "react";

const Breeds = () => {
	const dispatch = useAppDispatch();
	const { breedsLimit, breedsData, isPending } = useAppSelector(state => state.breedsSliceReducer);

	useEffect(() => {
		dispatch(getBreedsData.asyncThunk(breedsLimit));
	}, []);

	return <div className={styles.galleryContainer}>{!isPending ? <GridImages arrayImages={breedsData} /> : <Loader />}</div>;
};

export default Breeds;
