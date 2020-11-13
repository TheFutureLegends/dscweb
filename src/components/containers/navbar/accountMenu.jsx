import React, { useContext } from "react";
import { MenuItem, Avatar, Typography, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "../../styled-elements";
import { MenuContext } from "../../../contexts/MenuContext";
import { style as SidebarStyle } from "../../styles/sidebar.style.js";
import MenuLayout from "./menuLayout";
import faker from "faker";

const style = {
	icon: {
		width: "20px",
		height: "20px",
		marginRight: "20px",
		marginLeft: "10px",
	},
};

function AccountMenu({ ...restProps }) {
	const { setAnchorEl, anchorEl } = useContext(MenuContext);

	const handleCloseMenu = () =>
		setAnchorEl({
			...anchorEl,
			AccountMenu: null,
		});

	return (
		<MenuLayout type="AccountMenu" {...restProps}>
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
		</MenuLayout>
	);
}

export default AccountMenu;
