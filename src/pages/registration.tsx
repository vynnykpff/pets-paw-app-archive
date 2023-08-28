import {Routes} from "@/common/constants/routes";
import {auth} from "@/common/firebase-config";
import {Register} from "@/components/User/Register";
import styles from "@/styles/Auth.module.scss";
import Head from "next/head";
import {useRouter} from "next/router";
import {FC} from "react";
import {useAuthState} from "react-firebase-hooks/auth";

const RegistrationPage: FC = () => {
	const [user] = useAuthState(auth);
	const router = useRouter();

	if (user) {
		router.push(Routes.HOME);
		return null;
	}

	return (
		<>
			<Head>
				<title>Registration - PetsPaw</title>
			</Head>
			<div className={styles.formContainer}>
				<Register/>
			</div>
		</>
	);
};

export default RegistrationPage;
