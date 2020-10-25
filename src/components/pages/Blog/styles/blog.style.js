import { theme } from "../../../../global-theme.js";

export const general = {};

export const main = (pad) => ({
	minHeight: "100vh",
	maxWidth: "1600px",
	margin: "0px auto",
	height: "100%",
	padding: pad,
	paddingBottom: "100px",
	header: {
		fontWeight: "700",
		color: `${theme.context.light_gray}`,
		fontFamily: "Raleway, sans-serif",
	},
	title: {
		marginBottom: "15px",
		fontSize: "18px",
		textTransform: "uppercase",
		fontWeight: "600",
		fontColor: "rgb(41,41,41)",
		fontFamily: "Poppins, sans-serif",
	},
	divider: {
		margin: "16px 0px",
	},
	post: {
		margin: "0px auto",
		image: {
			width: "300px",
			marginRight: "30px",
		},
	},
});
