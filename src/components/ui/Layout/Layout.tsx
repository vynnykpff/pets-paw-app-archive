import { Theme } from "@/common/constants/theme";
import { auth } from "@/common/firebase-config";
import InitialSelectActions from "@/components/InitialSelectActions/InitialSelectActions";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { setUserId } from "@/store/slices/userSlice";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const theme = useAppSelector(state => state.themeSliceReducer);
	const [user] = useAuthState(auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (user) {
			dispatch(setUserId(user.uid));
		}
	}, [user]);

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
