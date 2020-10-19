import React from "react";
import { Navbar, Tooltip } from "../index";

function IconLinkButton({ src, route, title, ...restProps }) {
	return (
		<>
			<Navbar.Link to={route} {...restProps}>
				<Navbar.IconButton icon={src} data-for={`${route}${src}`} data-tip />
			</Navbar.Link>
			<Tooltip id={`${route}${src}`} effect="solid">
				{title}
			</Tooltip>
		</>
	);
}

export default IconLinkButton;
