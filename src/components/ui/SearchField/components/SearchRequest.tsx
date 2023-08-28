import React from 'react';
import {useAppSelector} from "@/hooks/useAppSelector";
import styles from "./SearchRequest.module.scss";

const SearchRequest = () => {
	const {inputValue} = useAppSelector(state => state.searchSliceReducer);

	return (
		<div className={styles.searchRequestContainer}>
			<p className={styles.searchRequestTitle}>Search results for: <span>{inputValue.length > 0 ? inputValue : "No data"}</span></p>
		</div>
	);
};

export default SearchRequest;
