import SearchField from "@/components/ui/SearchField/SearchField";
import HeaderPageNavItem from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageHeader/components/HeaderPageNavItem/HeaderPageNavItem";
import { ROUTES } from "@/constants/routes";
import { INavItem } from "@/types/navItem";
import styles from "./LayoutPageHeader.module.scss";

import LikeIcon from "@/assets/icons/like.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import Favourites from "@/assets/icons/favourite.svg";

const LayoutPageHeader = () => {
	const data: INavItem[] = [
		{ route: ROUTES.likes, NavIcon: LikeIcon },
		{ route: ROUTES.favourites, NavIcon: Favourites },
		{ route: ROUTES.dislikes, NavIcon: DislikeIcon },
	];

	return (
		<header className={styles.headerContainer}>
			<SearchField />
			<div className={styles.navItemsContainer}>
				{data.map((item, index) => (
					<HeaderPageNavItem key={index} {...item} />
				))}
			</div>
		</header>
	);
};

export default LayoutPageHeader;
