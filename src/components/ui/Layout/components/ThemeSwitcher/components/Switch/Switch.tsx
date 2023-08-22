import { THEME } from "@/constants/theme";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setTheme } from "@/store/slices/themeSlice";
import { useEffect, useState } from "react";
import styles from "./Switch.module.scss";

const Switch = () => {
	const theme = useAppSelector(state => state.themeSliceReducer);
	const dispatch = useAppDispatch();
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		if (theme.themeSliceReducer === THEME.LIGHT) {
			setIsChecked(false);
		} else {
			setIsChecked(true);
		}
	}, []);

	const onChangeTheme = () => {
		setIsChecked(prev => !prev);
		if (theme.themeSliceReducer === THEME.LIGHT) {
			return dispatch(setTheme(THEME.DARK));
		}
		return dispatch(setTheme(THEME.LIGHT));
	};

	return (
		<div className={styles.toggleSwitch}>
			<label className={styles.switchLabel}>
				<input checked={isChecked} onChange={onChangeTheme} type="checkbox" className={styles.checkbox} />
				<span className={styles.slider}></span>
			</label>
		</div>
	);
};

export default Switch;
