import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Dislikes: FC = () => {
	return (
		<>
			<Head>
				<title>Dislikes - PetsPaw</title>
			</Head>
			<LayoutPage>Dislikes page</LayoutPage>
		</>
	);
};

export default Dislikes;
