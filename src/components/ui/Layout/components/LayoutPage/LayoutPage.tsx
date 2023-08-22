import { FC, PropsWithChildren } from "react";
import styles from "./LayoutPage.module.scss";

const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default LayoutPage;
