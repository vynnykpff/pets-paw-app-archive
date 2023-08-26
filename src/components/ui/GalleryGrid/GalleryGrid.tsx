import cn from "classnames";
import React, { FC, ReactNode } from "react";
import styles from "./GalleryGrid.module.scss";

const GalleryGrid: FC<{ reversed: boolean; children: ReactNode }> = ({ reversed, children }) => {
	return <div className={cn(styles.grid, reversed && styles.reversed)}>{children}</div>;
};

export default GalleryGrid;
