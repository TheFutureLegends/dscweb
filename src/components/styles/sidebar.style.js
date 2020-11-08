import { theme } from "../../global-theme";

export const style = {
	main: {
		paddingTop: "20px",
	},
	accordion: {
		margin: "0px 15px 15px",
		borderRadius: "7px",
		width: "300px",
	},
	card: {
		marginBottom: "15px",
		width: "300px",
		padding: "8px 10px",
		backgroundColor: theme.colors.dark.fb.__fb_light_gray,
	},
	header: {
		color: theme.colors.dark.fb.__fb_primary_text,
		fontWeight: "bold",
		marginBottom: "10px",
		marginLeft: "6px",
	},
	info: {
		marginLeft: "10px",
		name: {
			color: theme.colors.dark.fb.__fb_primary_text,
			width: "100%",
			fontSize: "18px",
			fontWeight: "bold",
			fontFamily: "Raleway, sans-serif",
		},
		meta: {
			width: "100%",
			color: theme.colors.dark.fb.__fb_secondary_text,
		},
	},
	divider: {
		backgroundColor: theme.colors.dark.fb.__fb_light_gray,
		margin: "10px 0px",
	},
	author_extend: {
		width: "250px",
		margin: "15px auto 10px",
		author: {},
	},
};
