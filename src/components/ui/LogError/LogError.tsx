import React, { FC } from "react";
import styles from "./LogError.module.scss";

const LogError: FC<{ title: string }> = ({ title }) => {
  return <div className={styles.notFoundItemContainer}>{title}</div>;
};

export default LogError;
