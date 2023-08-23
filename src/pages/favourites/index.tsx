import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Favourites: FC = () => {
	return (
		<>
			<Head>
				<title>Favourites - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>Favourites page</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default Favourites;
