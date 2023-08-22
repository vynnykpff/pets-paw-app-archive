import styles from "./SearchField.module.scss";
import SearchIcon from "@/assets/icons/search.svg";

const SearchField = () => {
	return (
		<div className={styles.searchContainer}>
			<input placeholder="Search for breeds by name" className={styles.searchInput} type="text" />
			<div className={styles.iconContainer}>
				<SearchIcon />
			</div>
		</div>
	);
};

export default SearchField;
