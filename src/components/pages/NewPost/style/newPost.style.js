import { theme } from "../../../../global-theme";

export const style = {
	input: {
		title: {
			width: "100%",
			color: `${theme.colors.dark.fb.__fb_primary_text}`,
			fontFamily: "Raleway, sans-serif",
			fontWeight: "600",
			fontSize: "30px",
		},
	},
	button: {
		submit: {
			position: "sticky",
			backgroundColor: theme.colors.secondary,
			fontFamily: "Raleway, sans-serif",
			margin: "30px 0px",
			padding: "5px 15px",
			fontSize: "15px",
			textTransform: "capitalize",
		},
	},
};
