import { Oval } from "react-loader-spinner";

const Loader = () => {
	return (
		<Oval
			height={80}
			width={80}
			color="var(--background-static)"
			wrapperStyle={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			wrapperClass=""
			visible={true}
			ariaLabel="oval-loading"
			secondaryColor="var(--background-primary)"
			strokeWidth={3}
			strokeWidthSecondary={2}
		/>
	);
};

export default Loader;
