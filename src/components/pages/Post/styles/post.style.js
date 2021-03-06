import { theme } from "../../../../global-theme";

export const content_container = (width) => {
	let avatarSize = "50px";
	return {
		minHeight: "100vh",
		maxWidth: width,
		title: {
			fontFamily: "Source Serif Pro, serif",
			color: "white",
			lineHeight: "60px",
			fontWeight: "500",
			fontSize: "45px",
		},
		meta: {
			color: theme.colors.dark.fb.__fb_primary_text,
			width: "100%",
			marginTop: "25px",
		},
		avatar: {
			width: avatarSize,
			height: avatarSize,
		},
		author: {
			fontFamily: "Raleway, sans-serif",
			fontWeight: "500",
			fontSize: "15px",
			width: "100%",
		},
		date: {
			width: "100%",
			color: "#757575",
			fontSize: "14px",
			marginTop: "3px",
		},
		image_wrapper: {
			width: "800px",
			backgroundColor: "red",
			height: "500px",
		},
		image: {
			width: "100%",
			margin: "20px 0px",
		},
		separator: {
			height: "2px",
			width: "100%",
			backgroundColor: theme.colors.dark.fb.__fb_light_gray,
			margin: "20px 0px",
		},
	};
};

export const separator = {
	backgroundColor: "rgb(230, 243, 255)",
	height: "30px",
	width: "2px",
};

export const footer = {
	width: "100%",
	header: {
		fontSize: "25px",
		color: theme.colors.dark.fb.__fb_primary_text,
		fontFamily: "Raleway, sans-serif",
	},
};
