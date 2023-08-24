import { Login } from "@/components/User/Login";
import Head from "next/head";
import { FC } from "react";

const LoginPage: FC = () => {
	return (
		<>
			<Head>
				<title>Login - PetsPaw</title>
			</Head>
			<Login />
		</>
	);
};

export default LoginPage;
