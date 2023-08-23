import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Likes: FC = () => {
	return (
		<>
			<Head>
				<title>Likes - PetsPaw</title>
			</Head>
			<LayoutPage>Likes page</LayoutPage>
		</>
	);
};

export default Likes;
