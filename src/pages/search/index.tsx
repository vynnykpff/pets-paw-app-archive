import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Search: FC = () => {
	return (
		<>
			<Head>
				<title>Search - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>Search page</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default Search;
