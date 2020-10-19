import { theme } from "../styles/global-theme";

const general = {
	paper: {
		boxShadow: "unset",
		marginTop: "10px",
		width: "100%",
	},
};

export const eventSection = {
	main: {
		height: "fit-content",
		backgroundColor: "white",
		padding: "20px 50px",
		maxWidth: "1800px",
		margin: "10px auto",
	},
	paper: {
		ranking: {
			...general.paper,
			height: "fit-content",
			padding: "30px 20px 10px 20px",
			overflow: "auto",
		},
		blog: {
			...general.paper,
			padding: "30px 10px 10px 10px",
		},
	},
	header: {
		fontSize: "25px",
		color: "#292929",
		fontWeight: "700",
		fontFamily: "Raleway, sans-serif",
	},
	item: {
		width: "100%",
		cursor: "pointer",
		marginBottom: "20px",
		stat: {
			color: "white",
			padding: "5px 6px",
			backgroundColor: theme.context.dark,
			fontWeight: "bold",
			fontSize: "14px",
			borderRadius: "50px",
		},
		header: {
			color: theme.colors.dark,
			fontSize: "16px",
			fontWeight: "bold",
			fontFamily: "Poppins, sans-serif",
		},
		role: {
			width: "100%",
			fontSize: "14px",
			color: theme.colors.dark,
		},
		picture: {
			width: "45px",
			marginRight: "10px",
			borderRadius: "50%",
		},
	},
};
