import { store } from "@/store/store";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}
