import { AuthorizedRoute } from "@/components/AuthroizedRoute";
import { FC } from "react";

export function withAuthorizedRoute<T extends object>(Component: FC<T>) {
	// eslint-disable-next-line react/display-name
	return (props: T) => {
		return (
			<AuthorizedRoute>
				<Component {...props} />
			</AuthorizedRoute>
		);
	};
}
