import { ROUTES } from "@/constants/routes";
import { auth } from "@/firebase-config";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthorizedRoute: FC<PropsWithChildren> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	const onMount = () => {
		if (!user && !loading) {
			router.push(ROUTES.login);
		}
	};

	useEffect(() => {
		void onMount();
	}, [loading]);

	return <>{loading ? <div>Loading...</div> : children}</>;
};
