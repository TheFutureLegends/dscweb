import React from "react";
import { useMediaQuery } from "@material-ui/core";

function MUIMediaQuery({ option, children, external = true, ...restProps }) {
	const match = useMediaQuery(option);
	return (
		match &&
		external && <React.Fragment {...restProps}>{children}</React.Fragment>
	);
}

export default MUIMediaQuery;
