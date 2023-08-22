import LogoIcon from "@/assets/logo/logo.svg";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";
import styles from "./Logo.module.scss";

const Logo = () => {
	const router = useRouter();

	return (
		<div
			onClick={() => {
				router.push(ROUTES.home);
			}}
			className={styles.logoWrapper}
		>
			<LogoIcon />
			<p className={styles.logoTitle}>PetsPaw</p>
		</div>
	);
};

export default Logo;
