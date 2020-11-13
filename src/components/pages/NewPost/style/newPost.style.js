import { theme } from "../../../../global-theme";

export const style = {
	header: {
		color: `${theme.colors.dark.fb.__fb_primary_text}`,
		fontFamily: "Raleway, sans-serif",
		fontWeight: "600",
	},
	button: {
		submit: {
			backgroundColor: theme.colors.secondary,
			fontFamily: "Raleway, sans-serif",
			padding: "5px 15px",
			fontSize: "16px",
			textTransform: "capitalize",
		},
	},
};
