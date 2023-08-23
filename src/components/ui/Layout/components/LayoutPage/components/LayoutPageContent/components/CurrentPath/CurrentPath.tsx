import { FC } from "react";
import styles from "./CurrentPath.module.scss";

const CurrentPath: FC<{ path: string }> = ({ path }) => {
	return <div className={styles.pathBlock}>{path}</div>;
};

export default CurrentPath;
