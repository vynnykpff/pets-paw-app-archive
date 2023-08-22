import BasicLayoutPage from "@/components/ui/BasicLayoutPage/BasicLayoutPage";
import Head from "next/head";
import { FC } from "react";

const Voting: FC = () => {
	return (
		<>
			<Head>
				<title>Voting - PetsPaw</title>
			</Head>
			<BasicLayoutPage>Voting page</BasicLayoutPage>
		</>
	);
};

export default Voting;
