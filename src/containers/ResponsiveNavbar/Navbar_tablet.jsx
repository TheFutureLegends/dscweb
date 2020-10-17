import React from "react";
// Components
import { Navbar, FlexBox, IconLinkButton } from "../../components/index";
// MUI components
import {
	faSearch,
	faHome,
	faBook,
	faCalendarAlt,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
// Constants
import * as ASSETS from "../../constants/asset";
import * as ROUTES from "../../constants/route";

function NavbarTablet() {
	return (
		<Navbar>
			<FlexBox style={{}}>
				<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
				<Navbar.Header>RMIT DEVELOPER STUDENT CLUB</Navbar.Header>
				<FlexBox.FlexBasis width="30px" />
				<Navbar.SearchBar>
					<Navbar.Input active={false} placeholder="Search…" />
					<Navbar.Icon icon={faSearch} className="__search" />
				</Navbar.SearchBar>
			</FlexBox>
			<FlexBox>
				<IconLinkButton src={faHome} to={ROUTES.HOME} title={"Home"} />
				<IconLinkButton src={faCalendarAlt} to={ROUTES.EVENT} title={"Event"} />
				<IconLinkButton src={faBook} to={ROUTES.GUIDE} title={"Guide"} />
				<IconLinkButton src={faUsers} to={ROUTES.ABOUT} title={"About"} />
				<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
			</FlexBox>
		</Navbar>
	);
}

export default NavbarTablet;
