import SearchIcon from "@/assets/icons/search.svg";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import styles from "./SearchField.module.scss";
import { useRouter } from "next/router";
import { Routes } from "@/common/constants/routes";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getBreedsData } from "@/store/slices/breedsSlice/thunks/getBreedsData";
import { setInputValue, setSearchValue } from "@/store/slices/searchSlice";

const SearchField = () => {
	const [isFocus, setIsFocus] = useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { breedsData } = useAppSelector((state) => state.breedsSliceReducer);

	useEffect(() => {
		dispatch(getBreedsData.asyncThunk({ page: 0, limit: 100 }));
	}, []);

	const handleFiltered = () => {
		if (inputRef.current) {
			const inputValue = inputRef.current.value;
			if (inputValue) {
				const data = breedsData.filter((item) =>
					item.breedName.toLowerCase().includes(inputValue.toLowerCase())
				);
				dispatch(setSearchValue(data));
				dispatch(setInputValue(inputValue));
			}
		}
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleFiltered();
		}
	};

	return (
		<div
			onClick={() => router.push(Routes.SEARCH)}
			onFocus={() => setIsFocus(true)}
			onBlur={() => setIsFocus(false)}
			className={cn(
				styles.searchContainer,
				isFocus ? styles.searchContainerFocus : styles.searchContainer
			)}
		>
			<input
				ref={inputRef}
				placeholder="Search for breeds by name"
				className={styles.searchInput}
				type="text"
				onKeyDown={handleKeyPress} // Add this line
			/>
			<div onClick={handleFiltered} className={styles.iconContainer}>
				<SearchIcon />
			</div>
		</div>
	);
};

export default SearchField;
