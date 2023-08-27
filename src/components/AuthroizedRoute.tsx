import { ROUTES } from "@/common/constants/routes";
import { auth } from "@/common/firebase-config";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthorizedRoute: FC<PropsWithChildren> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();
	const isAuthPath = [ROUTES.LOGIN, ROUTES.REGISTRATION].includes(router.pathname as ROUTES);

	const onMount = () => {
		if (loading) return;

		if (!user && !isAuthPath) {
			router.push(ROUTES.LOGIN);
		} else if (user && isAuthPath) {
			router.push(ROUTES.HOME);
		}
	};

	useEffect(() => {
		onMount();
	}, [loading]);

	return <>{!loading && children}</>;
};
