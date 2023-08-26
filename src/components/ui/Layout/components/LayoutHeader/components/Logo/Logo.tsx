import LogoIcon from "@/assets/logo/logo.svg";
import { ROUTES } from "@/common/constants/routes";
import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => {
	return (
		<Link href={ROUTES.home} className={styles.logoContainer}>
			<LogoIcon />
			<p className={styles.logoTitle}>PetsPaw</p>
		</Link>
	);
};

export default Logo;
