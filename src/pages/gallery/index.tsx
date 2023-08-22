import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Gallery: FC = () => {
	return (
		<>
			<Head>
				<title>Gallery - PetsPaw</title>
			</Head>
			<LayoutPage>Gallery page</LayoutPage>;
		</>
	);
};

export default Gallery;
