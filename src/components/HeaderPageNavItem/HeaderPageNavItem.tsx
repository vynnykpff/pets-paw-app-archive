import { INavItem } from "@/types/navItem";
import Link from "next/link";
import { FC } from "react";
import styles from "./HeaderPageNavItem.module.scss";

const HeaderPageNavItem: FC<INavItem> = ({ route, NavIcon }) => {
	return (
		<Link className={styles.navIconContainer} href={route}>
			<NavIcon />
		</Link>
	);
};

export default HeaderPageNavItem;
