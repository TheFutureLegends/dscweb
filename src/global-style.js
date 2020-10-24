import { createGlobalStyle } from "styled-components";
import { theme } from "./global-theme";

export const GlobalStyles = createGlobalStyle`
* {
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
margin: 0;
box-sizing: border-box;
padding: 0;
}

html,
body {
	margin: 0;
	padding: 0;
}
.__custom_a {
	text-decoration: none;
	font-weight: bold;
	color: ${theme.colors.secondary}
}

`;
