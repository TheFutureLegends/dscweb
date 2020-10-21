import React from "react";
import * as Style from "./styles/Footer";

function Footer({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

export default Footer;
