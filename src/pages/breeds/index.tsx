import BasicLayoutPage from "@/components/ui/BasicLayoutPage/BasicLayoutPage";
import Head from "next/head";
import { FC } from "react";

const Breeds: FC = () => {
	return (
		<>
			<Head>
				<title>Breeds - PetsPaw</title>
			</Head>

			<BasicLayoutPage>Breeds Page</BasicLayoutPage>
		</>
	);
};

export default Breeds;
