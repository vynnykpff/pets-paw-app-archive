import BasicLayoutPage from "@/components/ui/BasicLayoutPage/BasicLayoutPage";
import Head from "next/head";
import { FC } from "react";

const Gallery: FC = () => {
	return (
		<>
			<Head>
				<title>Gallery - PetsPaw</title>
			</Head>
			<BasicLayoutPage>Gallery page</BasicLayoutPage>;
		</>
	);
};

export default Gallery;
