import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Breeds: FC = () => {
	return (
		<>
			<Head>
				<title>Breeds - PetsPaw</title>
			</Head>

			<LayoutPage>Breeds Page</LayoutPage>
		</>
	);
};

export default Breeds;
