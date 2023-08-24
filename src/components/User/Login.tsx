import Form from "@/components/Form/Form";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase-config";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useCookies } from "@/hooks/useCookies";
import { setUser } from "@/store/slices/userSlice";
import { IUserCredentials } from "@/types/UserCredentials";
import { GoogleAuthProvider, getIdToken, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

export const Login = () => {
	const dispatch = useAppDispatch();
	const [showErrorModal, setShowErrorModal] = useState(false);
	const router = useRouter();
	const { setCookie } = useCookies();

	const handleLogin = (userData: IUserCredentials) => {
		signInWithEmailAndPassword(auth, userData.email, userData.password)
			.then(async ({ user }) => {
				const idToken = await getIdToken(user);
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: idToken,
					}),
				);
				router.push(ROUTES.home);
				const userId = auth.currentUser?.uid;
				if (userId) {
					setCookie("userId", userId);
				}
				setCookie("isAuth", String(!!auth.currentUser?.email));
			})
			.catch(() => <ModalNotification title={"Error signing in with Email and Password!"} typeNotification={"error"} />);
	};

	const handleGoogleLogin = async () => {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(auth, provider);
			const user = result.user;
			if (user) {
				const idToken = await getIdToken(user);
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: idToken,
					}),
				);
				router.push(ROUTES.home);
				const userId = auth.currentUser?.uid;
				if (userId) {
					setCookie("userId", userId);
				}
				setCookie("isAuth", String(!!auth.currentUser?.email));
			}
		} catch (error) {
			setShowErrorModal(true);
		}
	};

	return (
		<>
			<Form title="Sign In" handleGoogleLogin={handleGoogleLogin} handleClick={handleLogin} />;
			{showErrorModal && <ModalNotification title="Error signing in with Google!" typeNotification="error" />}
		</>
	);
};
