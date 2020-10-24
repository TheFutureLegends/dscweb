import React, { useContext } from "react";
import {
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faBook,
	faCalendarAlt,
	faUsers,
	faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import * as ROUTES from "../../../constants/route.js";
import { theme } from "../../../global-theme";
import { DrawerContext } from "../../../contexts/DrawerContext.js";

const drawerStyle = {
	inner: {
		backgroundColor: `${theme.context.dark_gray}`,
		height: "100%",
		padding: "10px 0",
	},
	item: {
		color: "white",
		padding: "7px 45px",
		icon: {
			color: `white`,
		},
		divider: {
			backgroundColor: `${theme.context.light_gray}`,
			boxShadow: `${theme.colors.dark.__elevation_high}`,
			margin: "10px auto",
		},
		selected: {
			backgroundColor: `${theme.colors.primary}`,
		},
	},
};

const listOfRoutes = [
	{ route: ROUTES.HOME, icon: faHome, text: "Home" },
	{ route: ROUTES.EVENT, icon: faCalendarAlt, text: "Event" },
	{ route: ROUTES.BLOG, icon: faBook, text: "Blog" },
	{ route: ROUTES.ABOUT, icon: faUsers, text: "About" },
];

function DrawerContainer({ ...restProps }) {
	const { openMenu, setOpenMenu } = useContext(DrawerContext);
	return (
		<Drawer
			anchor="right"
			open={openMenu}
			onClose={() => {
				setOpenMenu(false);
			}}
		>
			<div style={drawerStyle.inner} {...restProps}>
				<List>
					{listOfRoutes.map((item) => (
						<ListItem button key={item.route} style={drawerStyle.item}>
							<ListItemIcon>
								<FontAwesomeIcon
									icon={item.icon}
									style={drawerStyle.item.icon}
								/>
							</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
					<Divider style={drawerStyle.item.divider} />
					<ListItem button key={ROUTES.LOG_IN} style={drawerStyle.item}>
						<ListItemIcon>
							<FontAwesomeIcon
								icon={faSignInAlt}
								style={drawerStyle.item.icon}
							/>
						</ListItemIcon>
						<ListItemText primary={"Sign In"} />
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
}

export default DrawerContainer;
