import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import styles from "@/styles/home.module.scss";

import homeScreenImage from "@/assets/images/homeScreen.png";

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Home - PetsPaw</title>
			</Head>
			<LayoutPage>
				<div className={styles.homeScreen}>
					<Image priority={true} className={styles.homeImage} src={homeScreenImage} alt="" />
				</div>
			</LayoutPage>
		</>
	);
};

export default Home;
