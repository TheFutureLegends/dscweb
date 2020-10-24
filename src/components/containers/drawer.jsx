import React from "react";
import { Drawer } from "@material-ui/core";

function DrawerContainer({ anchor, ...restProps }) {
	return (
		<Drawer
			anchor={anchor}
			{...restProps}
			open={state[anchor]}
			onClose={toggleDrawer(anchor, false)}
		>
			Drawer
		</Drawer>
	);
}

export default DrawerContainer;
