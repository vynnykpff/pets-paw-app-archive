import LayoutPageHeader from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageHeader/LayoutPageHeader";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import styles from "./LayoutPage.module.scss";

const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const isHeaderVisible = router.pathname !== ROUTES.home;

	return (
		<div className={styles.container}>
			{isHeaderVisible && <LayoutPageHeader />}
			{children}
		</div>
	);
};

export default LayoutPage;
