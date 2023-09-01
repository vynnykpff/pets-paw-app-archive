import SearchField from "@/components/ui/SearchField/SearchField";
import HeaderPageNavItem from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageHeader/components/HeaderPageNavItem/HeaderPageNavItem";
import { Routes } from "@/common/constants/routes";
import { INavItem } from "@/common/types/NavItem";
import styles from "./LayoutPageHeader.module.scss";

import LikeIcon from "@/assets/icons/like.svg";
import DislikeIcon from "@/assets/icons/dislike.svg";
import FavouritesIcon from "@/assets/icons/favourite.svg";

const LayoutPageHeader = () => {
  const data: INavItem[] = [
    { route: Routes.LIKES, NavIcon: LikeIcon },
    { route: Routes.FAVOURITES, NavIcon: FavouritesIcon },
    { route: Routes.DISLIKES, NavIcon: DislikeIcon },
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
