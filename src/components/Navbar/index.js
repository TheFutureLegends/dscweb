import React from "react";
import * as Style from "./styles/Navbar";

function Navbar({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

export default Navbar;
