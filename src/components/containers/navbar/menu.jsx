import React, { useContext } from "react";
import {
	MenuItem,
	Menu,
	withStyles,
	Avatar,
	Typography,
	Divider,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "../../styled-elements";
import { MenuContext } from "../../../contexts/MenuContext";
import { theme } from "../../../global-theme";
import { style as SidebarStyle } from "../../styles/sidebar.style.js";
import faker from "faker";

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

const style = {
	icon: {
		width: "20px",
		height: "20px",
		marginRight: "20px",
		marginLeft: "10px",
	},
};

function NavbarMenuContainer({ ...restProps }) {
	const { handleCloseMenu, anchorEl } = useContext(MenuContext);
	return (
		<StyledMenu
			id="navbar-menu"
			anchorEl={anchorEl}
			keepMounted
			open={Boolean(anchorEl)}
			onClose={handleCloseMenu}
			{...restProps}
		>
			<MenuItem onClick={handleCloseMenu}>
				<FlexBox>
					<Avatar
						src={faker.image.avatar()}
						alt="profile-avatar"
						style={{ marginRight: "10px" }}
					/>
					<Typography variant="subtitle1">Tin Quan Chung</Typography>
				</FlexBox>
			</MenuItem>
			<Divider style={SidebarStyle.divider} />
			<MenuItem onClick={handleCloseMenu}>
				<FlexBox>
					<FontAwesomeIcon icon={faSignOutAlt} style={style.icon} />
					<Typography variant="subtitle1">Log Out</Typography>
				</FlexBox>
			</MenuItem>
		</StyledMenu>
	);
}

export default NavbarMenuContainer;
