import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	context: {
		light: "white",
		dark: "#2F3136",
	},
	colors: {
		primary: "#F79444",
		secondary: "#4E81C2",
		accent: "#9A459A",
		light: {
			__light_gray: "rgb(211, 211, 211)",
			__dark_gray: "rgb(163, 163, 163)",
		},
		dark: {
			__background_interactive_gray: "#202225",
			__text_muted: "#72767d",
		},
	},
};

function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
