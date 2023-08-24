import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase-config";
import { IUserCredentials } from "@/types/UserCredentials";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSignOut } from "react-firebase-hooks/auth";

interface IFormProps {
	title: string;

	handleGoogleLogin(): void;

	handleClick(userData: IUserCredentials): void;
}

const Form = ({ title, handleClick, handleGoogleLogin }: IFormProps) => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [signOut] = useSignOut(auth);

	const router = useRouter();

	const handleLogOut = () => {
		signOut().then(() => router.push(ROUTES.home));
	};

	return (
		<div>
			<input type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />
			<input type="password" value={pass} placeholder="password" onChange={e => setPass(e.target.value)} />
			<button onClick={() => handleClick({ email, password: pass })}>{title}</button>
			<button onClick={handleGoogleLogin}>Auth with google</button>
			<button onClick={handleLogOut}>Logout</button>
		</div>
	);
};

export default Form;
