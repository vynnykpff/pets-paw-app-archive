import { Routes } from "@/common/constants/routes";
import { auth } from "@/common/firebase-config";
import { IUserCredentials } from "@/common/types/UserCredentials";
import Form from "@/components/Form/Form";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUserId } from "@/store/slices/userSlice";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Register = () => {
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

	const handleRegister = async (userData: IUserCredentials) => {
		try {
			const { user } = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
			dispatch(
				setUserId({
					userId: user.uid,
				}),
			);
			setShowErrorModal(false);
			setShowSuccessModal(true);
		} catch (e) {
			setShowSuccessModal(false);
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
				title="Registration"
				description="You already have an account?"
				authText="Sign In"
				route={Routes.LOGIN}
				handleGoogleLogin={handleGoogleLogin}
				handleClick={handleRegister}
			/>
			{showErrorModal && <ModalNotification title="Error signing!" typeNotification="error" />}
			{showSuccessModal && <ModalNotification title="Registration Success!" typeNotification="success" />}
		</>
	);
};
