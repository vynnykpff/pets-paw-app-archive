import InitialSelectActions from "@/components/InitialSelectActions/InitialSelectActions";
import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.container}>
			<InitialSelectActions />
			{children}
		</div>
	);
};

export default Layout;
