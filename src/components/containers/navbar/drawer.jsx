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
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import * as ROUTES from "../../../constants/route.js";
import { theme } from "../../../global-theme";
import { DrawerContext } from "../../../contexts/DrawerContext.js";
import { UtilityContext } from "../../../contexts/UtilityContext";

const drawerStyle = {
	inner: {
		backgroundColor: `${theme.context.dark_gray}`,
		height: "100%",
		padding: "10px 0",
	},
	item: (selected) => ({
		color: "white",
		padding: "7px 45px",
		backgroundColor: `${selected ? theme.colors.primary : "unset"}`,
		icon: {
			color: `white`,
		},
		divider: {
			backgroundColor: `${theme.context.light_gray}`,
			boxShadow: `${theme.colors.dark.__elevation_high}`,
			margin: "10px auto",
		},
	}),
};

function DrawerContainer({ ...restProps }) {
	const { openMenu, setOpenMenu } = useContext(DrawerContext);
	const {
		location: { pathname },
		history,
	} = useContext(UtilityContext);

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
					{ROUTES.listOfRoutes.map((item) => (
						<ListItem
							button
							key={item.route}
							style={drawerStyle.item(item.route === pathname)}
							onClick={() => history.push(item.route)}
						>
							<ListItemIcon>
								<FontAwesomeIcon
									icon={item.icon}
									style={drawerStyle.item().icon}
								/>
							</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
					<Divider style={drawerStyle.item().divider} />
					<ListItem
						button
						key={ROUTES.LOG_IN}
						style={drawerStyle.item(ROUTES.LOG_IN === pathname)}
						onClick={() => history.push(ROUTES.LOG_IN)}
					>
						<ListItemIcon>
							<FontAwesomeIcon
								icon={faSignInAlt}
								style={drawerStyle.item().icon}
							/>
						</ListItemIcon>
						<ListItemText primary={"Log In"} />
					</ListItem>
				</List>
			</div>
		</Drawer>
	);
}

export default DrawerContainer;
