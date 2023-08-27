import ArrowIcon from "@/assets/icons/arrow.svg";
import { ROUTES } from "@/common/constants/routes";
import Button from "@/components/ui/Button/Button";
import CurrentPath from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/components/CurrentPath/CurrentPath";
import Select from "@/components/ui/Select/Select";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import styles from "./LayoutPageContent.module.scss";
import AscIcon from "@/assets/icons/asc.svg";
import DescIcon from "@/assets/icons/desc.svg";

const LayoutPageContent: FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const [path, setPath] = useState("");
	const [currentBreedsState, setCurrentBreedsState] = useState("All breeds");
	const [currentLimitState, setCurrentLimitState] = useState("Limit: 10");

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
				{router.pathname === ROUTES.BREEDS && (
					<>
						<Select
							maxWidth="85%"
							minWidth="120px"
							currentState={currentBreedsState}
							setCurrentState={setCurrentBreedsState}
							variants={["All breeds", "American Shorthair", "Abyssinian", "Aegean"]}
						/>
						<Select
							maxWidth="15%"
							minWidth="110px"
							currentState={currentLimitState}
							setCurrentState={setCurrentLimitState}
							variants={["Limit: 10", "Limit: 5", "Limit: 15", "Limit: 20"]}
						/>
						<Button className={styles.sortIcon}>
							<DescIcon />
						</Button>
						<Button className={styles.sortIcon}>
							<AscIcon />
						</Button>
					</>
				)}
			</div>
			<div className={styles.scrollContainer}>{children}</div>
		</div>
	);
};

export default LayoutPageContent;
