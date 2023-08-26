import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";
import styles from "@/common/styles/NotFound.module.scss";

const NotFound: FC = () => {
	return (
		<>
			<Head>
				<title>Not Found - PetsPaw</title>
			</Head>
			<LayoutPage>
				<h1 className={styles.notFoundTitle}>404 - Page Not Found</h1>
			</LayoutPage>
		</>
	);
};

export default NotFound;
