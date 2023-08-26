import { Register } from "@/components/User/Register";
import { withAuthorizedRoute } from "@/HOCs/withAuthorizedRoute";
import Head from "next/head";
import { FC } from "react";
import styles from "@/common/styles/Auth.module.scss";

const RegistrationPage: FC = () => {
	return (
		<>
			<Head>
				<title>Registration - PetsPaw</title>
			</Head>
			<div className={styles.formContainer}>
				<Register />
			</div>
		</>
	);
};

export default withAuthorizedRoute(RegistrationPage);
