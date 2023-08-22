import { FC, PropsWithChildren } from "react";
import styles from "./BasicLayoutPage.module.scss";

const BasicLayoutPage: FC<PropsWithChildren> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default BasicLayoutPage;
