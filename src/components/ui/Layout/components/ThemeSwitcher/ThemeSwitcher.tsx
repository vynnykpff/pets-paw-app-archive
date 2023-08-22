import Switch from "@/components/ui/Layout/components/ThemeSwitcher/components/Switch/Switch";
import ThemeIndicator from "@/components/ui/Layout/components/ThemeSwitcher/components/ThemeIndicator/ThemeIndicator";
import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
	return (
		<div className={styles.themeSwitcherContainer}>
			<ThemeIndicator />
			<Switch />
		</div>
	);
};

export default ThemeSwitcher;
