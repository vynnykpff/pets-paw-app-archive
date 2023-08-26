import { AuthorizedRoute } from "@/components/AuthroizedRoute";
import { FC } from "react";

export function withAuthorizedRoute<T extends object>(Component: FC<T>) {
	return (props: T) => {
		return (
			<AuthorizedRoute>
				<Component {...props} />
			</AuthorizedRoute>
		);
	};
}
