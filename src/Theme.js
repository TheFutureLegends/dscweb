import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./global-theme";

function Theme({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
