import DarkIndicator from "@/assets/icons/darkIndicator.svg";
import LightIndicator from "@/assets/icons/lightIndicator.svg";
import { Theme } from "@/common/constants/theme";
import { useAppSelector } from "@/hooks/useAppSelector";
import React from "react";
import styles from "./ThemeIndicator.module.scss";

const ThemeIndicator = () => {
	const theme = useAppSelector(state => state.themeSliceReducer);
	return <div className={styles.indicatorCircle}>{theme === Theme.LIGHT ? <LightIndicator /> : <DarkIndicator />}</div>;
};

export default ThemeIndicator;
