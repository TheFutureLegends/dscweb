import React from "react";
import * as Style from "./styles/Tooltip";

function Tooltip({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

export default Tooltip;
