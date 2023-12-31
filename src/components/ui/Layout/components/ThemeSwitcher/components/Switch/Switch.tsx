import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";

import { setTheme } from "@/store/slices/themeSlice";
import { Theme } from "@/common/constants/theme";

import styles from "./Switch.module.scss";

const Switch = () => {
  const theme = useAppSelector(state => state.themeSliceReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") ?? Theme.LIGHT;
    dispatch(setTheme(currentTheme));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const onChangeTheme = () => {
    dispatch(setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <div className={styles.toggleSwitch}>
      <label className={styles.switchLabel}>
        <input checked={theme !== Theme.LIGHT} onChange={onChangeTheme} type="checkbox" className={styles.checkbox} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default Switch;
