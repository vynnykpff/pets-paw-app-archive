import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase-config";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthorizedRoute: FC<PropsWithChildren> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();
	const isAuthPath = [ROUTES.login, ROUTES.registration].includes(router.pathname as ROUTES);

	const onMount = () => {
		if (loading) return;
		if (!user && !isAuthPath) {
			router.push(ROUTES.login);
		} else if (user && isAuthPath) {
			router.push(ROUTES.home);
		}
	};

	useEffect(() => {
		void onMount();
	}, [loading]);

	return <>{loading ? <div>Loading...</div> : children}</>;
};
