import ArrowIcon from "@/assets/icons/arrow.svg";
import AscIcon from "@/assets/icons/asc.svg";
import DescIcon from "@/assets/icons/desc.svg";
import UploadIcon from "@/assets/icons/upload.svg";
import {Routes} from "@/common/constants/routes";
import Button from "@/components/ui/Button/Button";
import CurrentPath
	from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/components/CurrentPath/CurrentPath";
import Select, {Variant} from "@/components/ui/Select/Select";
import {getVariantProperty} from "@/components/ui/Select/utils/getVariantProperty";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {useAppSelector} from "@/hooks/useAppSelector";
import {setBreedLimit, setSortAsc, setSortDesc} from "@/store/slices/breedsSlice/slice";
import {getBreedsData} from "@/store/slices/breedsSlice/thunks/getBreedsData";
import {getCurrentBreedImages} from "@/store/slices/breedsSlice/thunks/getCurrentBreedImages";
import {useRouter} from "next/router";
import {FC, PropsWithChildren, useEffect, useState} from "react";
import styles from "./LayoutPageContent.module.scss";

const limitVariants: Variant[] = [
	{text: "Limit 10", value: "10"},
	{text: "Limit 5", value: "5"},
	{text: "Limit 15", value: "15"},
	{text: "Limit 20", value: "20"},
];

const LayoutPageContent: FC<PropsWithChildren> = ({children}) => {
	const router = useRouter();
	const [path, setPath] = useState("");
	const {breedsNames, breedsData} = useAppSelector(state => state.breedsSliceReducer);
	const breedsVariants: Variant[] = [{text: "All breeds", value: " "}, ...breedsNames];
	const [currentBreedsState, setCurrentBreedsState] = useState(getVariantProperty(breedsVariants[0], "value"));
	const [currentLimitState, setCurrentLimitState] = useState(getVariantProperty(limitVariants[0], "value"));
	const dispatch = useAppDispatch();

	const getCurrentPagePath = () => {
		const pagePath = router.pathname.split("/")[1].toUpperCase();
		setPath(pagePath);
	};

	useEffect(() => {
		if (currentBreedsState !== " ") dispatch(getCurrentBreedImages.asyncThunk({
			breed: currentBreedsState,
			limit: currentLimitState
		}));
		dispatch(getBreedsData.asyncThunk(currentLimitState));
	}, [currentBreedsState]);

	useEffect(() => {
		dispatch(setBreedLimit(currentLimitState));

		if (currentBreedsState === " ") {
			dispatch(getBreedsData.asyncThunk(currentLimitState));
		} else {
			dispatch(getCurrentBreedImages.asyncThunk({breed: currentBreedsState, limit: currentLimitState}));
		}
	}, [currentLimitState]);

	useEffect(() => {
		getCurrentPagePath();
	}, [router.pathname]);

	return (
		<div className={styles.container}>
			<div className={styles.pageNavigate}>
				<div className={styles.navigateButtonsContainer}>
					<Button onClick={() => router.back()}>
						<ArrowIcon/>
					</Button>
					<CurrentPath path={path}/>
				</div>
				{router.pathname === Routes.BREEDS && (
					<>
						<Select
							maxWidth="85%"
							minWidth="120px"
							currentState={currentBreedsState}
							setCurrentState={setCurrentBreedsState}
							variants={breedsVariants}
						/>
						<Select
							maxWidth="15%"
							minWidth="110px"
							currentState={currentLimitState}
							setCurrentState={setCurrentLimitState}
							variants={limitVariants}
						/>
						<Button onClick={() => dispatch(setSortDesc(breedsData))} className={styles.sortIcon}>
							<DescIcon/>
						</Button>
						<Button onClick={() => dispatch(setSortAsc(breedsData))} className={styles.sortIcon}>
							<AscIcon/>
						</Button>
					</>
				)}
				{router.pathname === Routes.GALLERY && (
					<Button className={styles.uploadButton}><UploadIcon/> <span>Upload</span></Button>
				)}
			</div>
			<div className={styles.scrollContainer}>{children}</div>
		</div>
	);
};

export default LayoutPageContent;
