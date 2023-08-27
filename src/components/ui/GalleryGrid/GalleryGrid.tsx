import cn from "classnames";
import React, { FC, PropsWithChildren } from "react";
import styles from "./GalleryGrid.module.scss";

const GalleryGrid: FC<PropsWithChildren> = ({ children }) => {
	return <div className={cn(styles.grid)}>{children}</div>;
};

export default GalleryGrid;
