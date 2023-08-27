import { Routes } from "@/common/constants/routes";
import { auth } from "@/common/firebase-config";
import { IUserCredentials } from "@/common/types/UserCredentials";
import Form from "@/components/Form/Form";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUserId } from "@/store/slices/userSlice";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
				router.push(Routes.HOME);
			}, 1000);
		}
	}, [showSuccessModal]);

	const handleLogin = async (userData: IUserCredentials) => {
		try {
			const { user } = await signInWithEmailAndPassword(auth, userData.email, userData.password);
			dispatch(
				setUserId({
					userId: user.uid,
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
				dispatch(
					setUserId({
						userId: user.uid,
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
				route={Routes.REGISTRATION}
				handleGoogleLogin={handleGoogleLogin}
				handleClick={handleLogin}
			/>
			{showErrorModal && <ModalNotification title="Error authorization" typeNotification="error" />}
			{showSuccessModal && <ModalNotification title="Success Login!" typeNotification="success" />}
		</>
	);
};
