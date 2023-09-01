import { Theme } from "@/common/constants/theme";
import InitialSelectActions from "@/components/InitialSelectActions/InitialSelectActions";
import { useAppSelector } from "@/hooks/useAppSelector";
import { FC, PropsWithChildren, useEffect } from "react";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useAppSelector(state => state.themeSliceReducer);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.dataset.theme = localStorage.getItem("theme") ?? Theme.LIGHT;
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className={styles.container}>
      <InitialSelectActions />
      {children}
    </div>
  );
};

export default Layout;
