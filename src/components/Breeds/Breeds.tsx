import GridImages from "@/components/GridImages/GridImages";
import Loader from "@/components/ui/Loader/Loader";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {useAppSelector} from "@/hooks/useAppSelector";
import {getBreedsData} from "@/store/slices/breedsSlice/thunks/getBreedsData";
import styles from "@/styles/Reaction.module.scss";
import React, {useEffect} from "react";
import breedsStyles from "./Breeds.module.scss";
import Button from "@/components/ui/Button/Button";
import {useRouter} from "next/router";
import cn from "classnames";

const Breeds = () => {
	const router = useRouter()
	const dispatch = useAppDispatch();
	const {breedsLimit, breedsData, isPending} = useAppSelector(state => state.breedsSliceReducer);
	useEffect(() => {
		dispatch(getBreedsData.asyncThunk(breedsLimit));
	}, []);
	return <div className={styles.galleryContainer}>{!isPending ? <GridImages isHoverAble={true} arrayImages={breedsData}>{image => (
		<div className={cn(breedsStyles.buttonContainer)}>
			<Button className={breedsStyles.breedsIcon} onClick={() => router.push(`/breeds/${image.breedsId}`)}>{image.breedName}</Button>
		</div>
	)}</GridImages> : <Loader/>}</div>;
};

export default Breeds;
