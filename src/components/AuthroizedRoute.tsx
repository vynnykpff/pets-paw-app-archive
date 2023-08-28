import {Routes} from "@/common/constants/routes";
import {auth} from "@/common/firebase-config";
import {useRouter} from "next/router";
import {FC, PropsWithChildren} from "react";
import {useAuthState} from "react-firebase-hooks/auth";

export const AuthorizedRoute: FC<PropsWithChildren> = ({ children }) => {
	const [user, loading] = useAuthState(auth);
	const router = useRouter();

	if (loading) return null;
	if (!loading && !user) {
		router.push(Routes.LOGIN);
		return null;
	}

	return <>{!loading && children}</>;
};
