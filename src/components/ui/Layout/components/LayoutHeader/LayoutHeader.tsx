import Logo from "@/components/ui/Layout/components/LayoutHeader/components/Logo/Logo";
import ThemeSwitcher from "@/components/ui/Layout/components/ThemeSwitcher/ThemeSwitcher";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase-config";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import styles from "./LayoutHeader.module.scss";

const LayoutHeader = () => {
	const [user] = useAuthState(auth);
	const [signOut] = useSignOut(auth);
	const router = useRouter();

	const handleLogOut = () => {
		signOut().then(() => router.push(ROUTES.home));
	};

	return (
		<header className={styles.layoutHeader}>
			<Logo />
			<div className={styles.actionsContainer}>
				<ThemeSwitcher />
				{user ? (
					<a className={styles.authLink} onClick={handleLogOut}>
						Logout
					</a>
				) : (
					<Link className={styles.authLink} href={ROUTES.login}>
						Login
					</Link>
				)}
			</div>
		</header>
	);
};

export default LayoutHeader;
