import React, { useContext } from "react";
import { MenuItem, Typography, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox } from "../../styled-elements";
import { faBook, faDemocrat } from "@fortawesome/free-solid-svg-icons";
import { MenuContext } from "../../../contexts/MenuContext";
import { style as SidebarStyle } from "../../styles/sidebar.style.js";
import * as ROUTES from "../../../constants/route";
import MenuLayout from "./menuLayout";

const style = {
	icon: {
		width: "20px",
		height: "20px",
		marginRight: "40px",
		marginLeft: "10px",
	},
	header: { width: "100%" },
	body: { color: "gray" },
};

function CustomItem({ icon, header, body, ...restProps }) {
	return (
		<MenuItem {...restProps}>
			<FlexBox>
				<FontAwesomeIcon icon={icon} style={style.icon} />
				<FlexBox direction="column" justify="flex-start">
					<Typography variant="subtitle1" style={style.header}>
						{header}
					</Typography>
					<Typography variant="body2" style={style.body}>
						{body}
					</Typography>
				</FlexBox>
			</FlexBox>
		</MenuItem>
	);
}

function AddMenuContainer({ ...restProps }) {
	const { setAnchorEl, anchorEl } = useContext(MenuContext);

	const handleCloseMenu = () =>
		setAnchorEl({
			...anchorEl,
			AddMenu: null,
		});

	return (
		<MenuLayout type="AddMenu" {...restProps}>
			<CustomItem
				icon={faBook}
				header="Post"
				body="Create a new blog post"
				onClick={handleCloseMenu}
			/>
			<CustomItem
				icon={faDemocrat}
				header="Event"
				body="Add more new events"
				onClick={handleCloseMenu}
			/>
			<Divider style={SidebarStyle.divider} />
		</MenuLayout>
	);
}

export default AddMenuContainer;
