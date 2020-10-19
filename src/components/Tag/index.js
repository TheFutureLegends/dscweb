import React from "react";
import * as Style from "./styles/Tag.js";

function Tag({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

Tag.Item = function TagItem({ children, ...restProps }) {
	return <Style.Item {...restProps}>{children}</Style.Item>;
};

export default Tag;
