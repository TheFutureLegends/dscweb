import React from "react";
import * as Style from "./styles/Sidebar";

function Sidebar({ children, ...restProps }) {
	return <Style.Container {...restProps}>{children}</Style.Container>;
}

Sidebar.Inner = function SidebarInner({ children, ...restProps }) {
	return <Style.Inner {...restProps}>{children}</Style.Inner>;
};

Sidebar.Item = function SidebarItem({ children, ...restProps }) {
	return <Style.Item {...restProps}>{children}</Style.Item>;
};

Sidebar.Picture = function SidebarPicture({ src, ...restProps }) {
	return <Style.Picture {...restProps} src={src} />;
};

Sidebar.Header = function SidebarHeader({ children, ...restProps }) {
	return <Style.Header {...restProps}>{children}</Style.Header>;
};

Sidebar.Divider = function SidebarDivider({ ...restProps }) {
	return <Style.Divider {...restProps} />;
};

Sidebar.Title = function SidebarTitle({ children, ...restProps }) {
	return <Style.Title {...restProps}>{children}</Style.Title>;
};

export default Sidebar;
