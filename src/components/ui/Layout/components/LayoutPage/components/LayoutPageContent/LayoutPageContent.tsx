import ArrowIcon from "@/assets/icons/arrow.svg";
import Button from "@/components/ui/Button/Button";
import CurrentPath from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/components/CurrentPath/CurrentPath";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./LayoutPageContent.module.scss";

const LayoutPageContent: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const [path, setPath] = useState("");

	const getCurrentPagePath = () => {
		const pagePath = router.pathname.split("/")[1].toUpperCase();
		setPath(pagePath);
	};

	useEffect(() => {
		getCurrentPagePath();
	}, [router.pathname]);

	return (
		<div className={styles.container}>
			<div className={styles.pageNavigate}>
				<Button onClick={() => router.back()}>
					<ArrowIcon />
				</Button>
				<CurrentPath path={path} />
			</div>
			<div className={styles.scrollContainer}>{children}</div>
		</div>
	);
};

export default LayoutPageContent;
