import Form from "@/components/Form/Form";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { ROUTES } from "@/common/constants/routes";
import { auth } from "@/common/firebase-config";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUser } from "@/store/slices/userSlice";
import { IUserCredentials } from "@/common/types/UserCredentials";
import { GoogleAuthProvider, getIdToken, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Login = () => {
	const dispatch = useAppDispatch();
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const router = useRouter();

	useEffect(() => {
		if (showSuccessModal) {
			setTimeout(() => {
				router.push(ROUTES.home);
			}, 1000);
		}
	}, [showSuccessModal]);

	const handleLogin = async (userData: IUserCredentials) => {
		try {
			const { user } = await signInWithEmailAndPassword(auth, userData.email, userData.password);
			const idToken = await getIdToken(user);
			dispatch(
				setUser({
					email: user.email,
					id: user.uid,
					token: idToken,
				}),
			);
			setShowErrorModal(false);
			setShowSuccessModal(true);
		} catch (e) {
			setShowErrorModal(true);
		}
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
				setShowErrorModal(false);
				setShowSuccessModal(true);
			}
		} catch (error) {
			setShowSuccessModal(false);
			setShowErrorModal(true);
		}
	};

	return (
		<>
			<Form
				title="Sign In"
				description="Don't have an account?"
				authText="Registration"
				route={ROUTES.registration}
				handleGoogleLogin={handleGoogleLogin}
				handleClick={handleLogin}
			/>
			{showErrorModal && <ModalNotification title="Error authorization" typeNotification="error" />}
			{showSuccessModal && <ModalNotification title="Success Login!" typeNotification="success" />}
		</>
	);
};
