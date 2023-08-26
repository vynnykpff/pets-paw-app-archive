import LayoutPageContent from "@/components/ui/Layout/components/LayoutPage/components/LayoutPageContent/LayoutPageContent";
import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import Head from "next/head";
import { FC } from "react";

const Gallery: FC = () => {
	return (
		<>
			<Head>
				<title>Gallery - PetsPaw</title>
			</Head>
			<LayoutPage>
				<LayoutPageContent>Gallery page</LayoutPageContent>
			</LayoutPage>
		</>
	);
};

export default withAuthorizedRoute(Gallery);
