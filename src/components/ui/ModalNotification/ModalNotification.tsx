import { Theme } from "@/common/constants/theme";
import { useAppSelector } from "@/hooks/useAppSelector";
import { FC } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type NotificationType = "success" | "error" | "info" | "warning";

const ModalNotification: FC<{ title: string; typeNotification: NotificationType }> = ({ title, typeNotification }) => {
	const notify = () => toast[typeNotification](title);
	const theme = useAppSelector(state => state.themeSliceReducer);

	return (
		<div>
			<span style={{ display: "none" }}>{notify()}</span>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				style={{ color: "green" }}
				theme={theme === "light" ? Theme.LIGHT : Theme.DARK}
			/>
		</div>
	);
};

export default ModalNotification;
