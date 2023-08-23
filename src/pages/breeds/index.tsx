import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Breeds: FC = () => {
	return (
		<>
			<Head>
				<title>Breeds - PetsPaw</title>
			</Head>

			<LayoutPage>
				<LayoutPageContent>Breeds Page</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default Breeds;
