import Logo from "@/components/ui/Layout/components/LayoutHeader/components/Logo/Logo";
import ThemeSwitcher from "@/components/ui/Layout/components/ThemeSwitcher/ThemeSwitcher";
import styles from "./LayoutHeader.module.scss";

const LayoutHeader = () => {
	return (
		<header className={styles.layoutHeader}>
			<Logo />
			<ThemeSwitcher />
		</header>
	);
};

export default LayoutHeader;
