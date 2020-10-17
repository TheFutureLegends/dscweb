import React from "react";
import * as Style from "./styles/FlexBox";

function FlexBox({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

FlexBox.FlexBasis = function FlexBoxFlexBasis({ width, ...restProps }) {
	return <Style.Break {...restProps} width={width} />;
};

export default FlexBox;
