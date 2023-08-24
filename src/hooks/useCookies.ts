import { parse } from "cookie";

export function useCookies() {
	const getCookie = (name: string) => {
		const cookies = parse(document.cookie);
		return cookies[name];
	};

	const setCookie = (name: string, value: string) => {
		document.cookie = `${name}=${value}`;
	};

	const deleteCookie = (name: string) => {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	};

	return { getCookie, setCookie, deleteCookie };
}
