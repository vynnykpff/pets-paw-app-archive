import { auth } from "@/common/firebase-config";
import UserStatus from "@/components/User/components/UserStatus";
import { Login } from "@/components/User/Login";
import styles from "@/styles/Auth.module.scss";
import Head from "next/head";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage: FC = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return <UserStatus title={"Successful authorization"} typeNotification={"success"} />;
  }

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

export default LoginPage;
