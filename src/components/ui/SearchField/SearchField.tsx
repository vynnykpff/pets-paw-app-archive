import SearchIcon from "@/assets/icons/search.svg";
import cn from "classnames";
import { useState } from "react";
import styles from "./SearchField.module.scss";

const SearchField = () => {
	const [isFocus, setIsFocus] = useState(false);

	return (
		<div
			onFocus={() => setIsFocus(true)}
			onBlur={() => setIsFocus(false)}
			className={cn(styles.searchContainer, isFocus ? styles.searchContainerFocus : styles.searchContainer)}
		>
			<input placeholder="Search for breeds by name" className={styles.searchInput} type="text" />
			<div className={styles.iconContainer}>
				<SearchIcon />
			</div>
		</div>
	);
};

export default SearchField;
