import React, { useContext } from "react";
import { MenuItem, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox } from "../../styled-elements";
import { faBook, faDemocrat } from "@fortawesome/free-solid-svg-icons";
import { MenuContext, UtilityContext } from "../../../contexts/index.js";
// import { style as SidebarStyle } from "../../styles/sidebar.style.js";
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
	const { history } = useContext(UtilityContext);

	const handleRedirect = (route) => {
		setAnchorEl({
			...anchorEl,
			AddMenu: null,
		});

		history.push(route);
	};

	return (
		<MenuLayout type="AddMenu" {...restProps}>
			<CustomItem
				icon={faBook}
				header="Post"
				body="Create a new blog post"
				onClick={() => handleRedirect(ROUTES.NEW_POST)}
			/>
			{/* <CustomItem
				icon={faDemocrat}
				header="Event"
				body="Add more new events"
				onClick={() => handleRedirect("#")}
			/> */}
		</MenuLayout>
	);
}

export default AddMenuContainer;
