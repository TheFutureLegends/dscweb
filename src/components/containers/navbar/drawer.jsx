import React, { useContext } from "react";
import { Drawer, List } from "@material-ui/core";
import { theme } from "../../../global-theme";
import { DrawerContext } from "../../../contexts/DrawerContext.js";
import Dashboard from "../dashboard";

const drawerStyle = {
	inner: {
		backgroundColor: `${theme.context.dark_gray}`,
		height: "100%",
		padding: "10px 0",
	},
};

function DrawerContainer({ ...restProps }) {
	const { openMenu, setOpenMenu } = useContext(DrawerContext);

	return (
		<Drawer
			anchor="left"
			open={openMenu}
			onClose={() => {
				setOpenMenu(false);
			}}
		>
			<div style={drawerStyle.inner} {...restProps}>
				<List>
					<Dashboard />
				</List>
			</div>
		</Drawer>
	);
}

export default DrawerContainer;
