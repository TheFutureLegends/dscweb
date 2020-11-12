import React, { useContext } from "react";
import { Menu, withStyles } from "@material-ui/core";
import { MenuContext } from "../../../contexts/MenuContext";
import { theme } from "../../../global-theme";

const StyledMenu = withStyles(() => ({
	paper: {
		backgroundColor: theme.colors.dark.fb.__fb_dark_theme,
		boxShadow: theme.colors.dark.__elevation_high,
		color: theme.colors.dark.fb.__fb_primary_text,
		width: "300px",
	},
}))((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

function MenuLayout({ type, children, ...restProps }) {
	const { setAnchorEl, anchorEl } = useContext(MenuContext);

	const handleCloseMenu = () =>
		setAnchorEl({
			...anchorEl,
			[type]: null,
		});

	return (
		<StyledMenu
			id="navbar-menu"
			anchorEl={anchorEl[type]}
			keepMounted
			open={Boolean(anchorEl[type])}
			onClose={handleCloseMenu}
			{...restProps}
		>
			{children}
		</StyledMenu>
	);
}

export default MenuLayout;
