import { Register } from "@/components/User/Register";
import Head from "next/head";
import { FC } from "react";

const RegistrationPage: FC = () => {
	return (
		<>
			<Head>
				<title>Registration - PetsPaw</title>
			</Head>
			<Register />
		</>
	);
};

export default RegistrationPage;
