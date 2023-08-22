import LayoutPage from "@/components/ui/Layout/components/LayoutPage/LayoutPage";
import Head from "next/head";
import { FC } from "react";

const Voting: FC = () => {
	return (
		<>
			<Head>
				<title>Voting - PetsPaw</title>
			</Head>
			<LayoutPage>Voting page</LayoutPage>
		</>
	);
};

export default Voting;
