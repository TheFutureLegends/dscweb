import { theme } from "../../../../global-theme";

export const category_container = {
	width: "100%",
	height: "65px",
	boxShadow: theme.colors.dark.__elevation_medium,
	padding: "0px 10%",
	backgroundColor: theme.colors.secondary,
	header: {
		fontSize: "25px",
		fontFamily: "Poppins, sans-serif",
		fontWeight: "700",
		color: "white",
		cursor: "pointer",
		whiteSpace: "nowrap",
	},
	subHeader: {
		textDecoration: "none",
		color: "rgb(230, 243, 255)",
		textTransform: "uppercase",
		fontSize: "13px",
		fontFamily: "Raleway, sans-serif",
		fontWeight: "bold",
		whiteSpace: "nowrap",
	},
	inner: {
		maxWidth: "700px",
		width: "100%",
	},
};

export const content_container = (width) => {
	let avatarSize = "50px";
	return {
		minHeight: "100vh",
		maxWidth: width,
		padding: "40px 0px",
		title: {
			fontFamily: "Source Serif Pro, serif",
			lineHeight: "60px",
			fontWeight: "500",
			fontSize: "45px",
		},
		meta: {
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
			backgroundColor: theme.colors.dark.__interactive_normal,
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
		fontFamily: "Raleway, sans-serif",
	},
};
