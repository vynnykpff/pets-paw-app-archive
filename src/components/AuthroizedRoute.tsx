import { Routes } from "@/common/constants/routes";
import { auth } from "@/common/firebase-config";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthorizedRoute: FC<PropsWithChildren> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();
	const isAuthPath = [Routes.LOGIN, Routes.REGISTRATION].includes(router.pathname as Routes);

	const onMount = () => {
		if (loading) return;

		if (!user && !isAuthPath) {
			router.push(Routes.LOGIN);
		} else if (user && isAuthPath) {
			router.push(Routes.HOME);
		}
	};

	useEffect(() => {
		onMount();
	}, [loading]);

	return <>{!loading && children}</>;
};
