import LayoutPageHeader from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageHeader/LayoutPageHeader";
import { ROUTES } from "@/common/constants/routes";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";
import styles from "./LayoutPage.module.scss";

const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const isContentVisible = router.pathname !== ROUTES.home;

	return (
		<div className={styles.container}>
			{isContentVisible && (
				<>
					<LayoutPageHeader />
				</>
			)}
			{children}
		</div>
	);
};

export default LayoutPage;
