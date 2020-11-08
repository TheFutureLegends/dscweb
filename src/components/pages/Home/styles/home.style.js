import { theme } from "../../../../global-theme";

const general = {
	paper: {
		boxShadow: "unset",
		marginTop: "10px",
		width: "100%",
		borderRadius: "0",
	},
};

export const blogSection = (pad) => ({
	main: {
		height: "fit-content",
		backgroundColor: "white",
		padding: `20px ${pad}`,
		width: "100%",
		maxWidth: "1800px",
		margin: "10px auto",
	},
	paper: {
		ranking: {
			...general.paper,
			height: "fit-content",
			padding: "30px 20px 10px 20px",
			overflow: "auto",
			border: `0.5px solid rgb(206, 206, 206)`,
		},
		blog: {
			...general.paper,
			padding: "20px 10px 10px 10px",
		},
	},
	header: {
		fontSize: "25px",
		color: "#292929",
		fontWeight: "700",
		fontFamily: "Raleway, sans-serif",
		margin: "0px auto",
		width: "fit-content",
	},
});

export const eventSection = (src) => ({
	header: {
		...blogSection().header,
	},
	card: {
		cursor: "pointer",
		boxShadow: ` 2px 2px 10px ${theme.colors.dark.__elevation_high}`,
		backgroundColor: theme.context.dark,
		"&:hover": {
			display: "none",
			transform: "scale(1.1)",
		},
		header: {
			fontSize: "21px",
			fontWeight: "700",
			color: "white",
			fontFamily: "Raleway, sans-serif",
		},
		meta: {
			fontSize: "15px",
			fontWeight: "600",
			color: theme.colors.primary,
			marginTop: "2px",
		},
		picture: {
			backgroundImage: `url(${src})`,
			backgroundSize: "cover",
			width: "100%",
			height: "250px",
		},
	},
});

export const aboutSection = (src) => ({
	marginTop: "10px",
	jumbotron: {
		height: "600px",
		width: "100%",
	},
	subheader: {
		...blogSection().header,
		fontSize: "30px",
	},
	bigText: {
		color: theme.colors.accent,
		textTransform: "uppercase",
		fontSize: "49px",
	},
	text: {
		marginTop: "30px",
		textAlign: "center",
	},
	picture: {
		backgroundImage: `url(${src})`,
		height: "100%",
		width: "100%",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
});

export const lastSection = (pad) => ({
	...blogSection(pad).main,
	marginBottom: "0px",
	borderBottom: "1px solid",
});
