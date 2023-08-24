import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import Head from "next/head";
import { FC } from "react";

const Dislikes: FC = () => {
	return (
		<>
			<Head>
				<title>Dislikes - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>Dislikes page</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default withAuthorizedRoute(Dislikes);
