import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Likes: FC = () => {
	return (
		<>
			<Head>
				<title>Likes - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent> Likes page</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default Likes;
