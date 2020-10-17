import React, { useState } from "react";
import useBreakPoint from "../hooks/useBreakPoint.js";
// Constants
import * as BREAK from "../constants/breakpoint";
import { NavbarDesktop, NavbarMobile, NavbarTablet } from "./ResponsiveNavbar";
const breakPointRange = (ele, start, end) => {
	return ele > start && ele < end;
};

function NavbarContainer() {
	const breakPoint = useBreakPoint();

	return (
		<>
			{breakPointRange(breakPoint, 0, BREAK.smartphone_lg) && <NavbarMobile />}
			{breakPointRange(
				breakPoint,
				BREAK.smartphone_lg - 1,
				BREAK.desktop_sm
			) && <NavbarTablet />}
			{breakPoint > BREAK.desktop_sm && <NavbarDesktop />}
		</>
	);
}

export default NavbarContainer;
