import Form from "@/components/Form/Form";
import ModalNotification from "@/components/ui/ModalNotification/ModalNotification";
import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase-config";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setUser } from "@/store/slices/userSlice";
import { IUserCredentials } from "@/types/UserCredentials";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getIdToken, signInWithPopup } from "firebase/auth";
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
				router.push(ROUTES.home);
			}, 1000);
		}
	}, [showSuccessModal]);

	const handleRegister = (userData: IUserCredentials) => {
		createUserWithEmailAndPassword(auth, userData.email, userData.password)
			.then(async ({ user }) => {
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
				route={ROUTES.login}
				handleGoogleLogin={handleGoogleLogin}
				handleClick={handleRegister}
			/>
			{showErrorModal && <ModalNotification title="Error signing in with Google!" typeNotification="error" />}
			{showSuccessModal && <ModalNotification title="Registration Success!" typeNotification="success" />}
		</>
	);
};
