import { INavItem } from "@/types/navItem";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./HeaderPageNavItem.module.scss";

const HeaderPageNavItem: FC<INavItem> = ({ route, NavIcon }) => {
	const router = useRouter();

	return (
		<Link
			className={cn(styles.navIconContainer, router.pathname === route ? styles.navActiveIconContainer : styles.navIconContainer)}
			href={route}
		>
			<div className={cn(styles.icon, router.pathname === route ? styles.iconActive : styles.icon)}>
				<NavIcon />
			</div>
		</Link>
	);
};

export default HeaderPageNavItem;
