import { useAppSelector } from "@/hooks/useAppSelector";

export const useAuth = () => {
	const { email, token, id } = useAppSelector(state => state.userSliceReducer);

	return {
		isAuth: email,
		email,
		token,
		id,
	};
};
