import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Search: FC = () => {
	return (
		<>
			<Head>
				<title>Search - PetsPaw</title>
			</Head>
			<LayoutPage>Search page</LayoutPage>
		</>
	);
};

export default Search;
