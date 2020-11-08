import { theme } from "../../../../global-theme.js";

export const general = {};

export const main = () => ({
	minHeight: "100vh",
	maxWidth: "1600px",
	margin: "0px auto",
	height: "100%",
	header: {
		fontWeight: "700",
		color: "white",
		fontFamily: "Raleway, sans-serif",
	},
	title: {
		marginBottom: "15px",
		fontSize: "18px",
		textTransform: "uppercase",
		fontWeight: "600",
		color: `${theme.colors.dark.fb.__fb_primary_text}`,
		fontFamily: "Poppins, sans-serif",
	},
	divider: {
		margin: "16px 0px",
		backgroundColor: `${theme.context.light_gray}`,
	},
	post: {
		margin: "0px auto",
		image: (src) => ({
			width: "200px",
			height: "200px",
			marginLeft: "20px",
			backgroundImage: `url(${src})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		}),
	},
});
