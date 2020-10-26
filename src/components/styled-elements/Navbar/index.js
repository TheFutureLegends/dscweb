import React from "react";
import * as Style from "./styles/Navbar";

function Navbar({ children, height, direction, ...restProps }) {
	console.log(height);
	return (
		<Style.Container height={height} {...restProps}>
			<Style.Inner direction={direction} justify="space-between">
				{children}
			</Style.Inner>
		</Style.Container>
	);
}

Navbar.Header = function NavbarHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

Navbar.SearchBar = function NavbarSearchBar({ children, ...restProps }) {
	return <Style.SearchBar {...restProps}>{children}</Style.SearchBar>;
};

Navbar.Input = function NavbarInput({ active, children, ...restProps }) {
	return (
		<Style.Input active={active.toString()} {...restProps}>
			{children}
		</Style.Input>
	);
};

Navbar.Logo = function NavbarLogo({ src, children, ...restProps }) {
	return <Style.Logo {...restProps} src={src} />;
};

Navbar.Icon = function NavbarIcon({ icon, children, ...restProps }) {
	return <Style.Icon {...restProps} icon={icon} />;
};

Navbar.Link = function NavbarLink({ to, children, ...restProps }) {
	return (
		<Style.Link {...restProps} to={to}>
			{children}
		</Style.Link>
	);
};

Navbar.IconButton = function NavbarIconButton({ icon, ...restProps }) {
	return <Style.IconButton {...restProps} icon={icon} />;
};

export default Navbar;
