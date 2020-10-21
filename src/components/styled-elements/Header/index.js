import React from "react";
import * as Style from "./styles/Header.js";

function Header({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

Header.Background = function HeaderBackground({ src, ...restProps }) {
	return <Style.Background src={src} {...restProps} />;
};

export default Header;
