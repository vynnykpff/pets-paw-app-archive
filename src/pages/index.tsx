import BasicLayoutPage from "@/components/ui/BasicLayoutPage/BasicLayoutPage";
import Head from "next/head";
import { FC } from "react";

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Home - PetsPaw</title>
			</Head>
			<BasicLayoutPage>Home page</BasicLayoutPage>
		</>
	);
};

export default Home;
