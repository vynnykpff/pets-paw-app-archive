import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Favourites: FC = () => {
	return (
		<>
			<Head>
				<title>Favourites - PetsPaw</title>
			</Head>
			<LayoutPage>Favourites page</LayoutPage>
		</>
	);
};

export default Favourites;
