import { Login } from "@/components/User/Login";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import Head from "next/head";
import { FC } from "react";
import styles from "@/styles/Auth.module.scss";

const LoginPage: FC = () => {
	return (
		<>
			<Head>
				<title>Login - PetsPaw</title>
			</Head>
			<div className={styles.formContainer}>
				<Login />
			</div>
		</>
	);
};

export default withAuthorizedRoute(LoginPage);
