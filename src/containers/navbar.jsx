import React, { useState } from "react";
// Components
import { Navbar, FlexBox } from "../components/index";
// MUI components
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Constants
import * as ASSETS from "../constants/asset";
import * as ROUTES from "../constants/route";

function NavbarContainer() {
	const [active, setActive] = useState(false);
	return (
		<Navbar>
			<FlexBox style={{}}>
				<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
				<Navbar.Header>RMIT DEVELOPER STUDENT CLUB</Navbar.Header>
				<FlexBox.FlexBasis width="30px" />
				<Navbar.SearchBar>
					<Navbar.Input
						onFocus={() => setActive(true)}
						onBlur={() => setActive(false)}
						active={active}
						placeholder="Search…"
					/>
					<Navbar.Icon icon={faSearch} className="__search" />
				</Navbar.SearchBar>
			</FlexBox>
			<FlexBox>
				<Navbar.Link to={ROUTES.HOME}>Home</Navbar.Link>
				<Navbar.Link to={ROUTES.EVENT}>Event</Navbar.Link>
				<Navbar.Link to={ROUTES.GUIDE}>Guide</Navbar.Link>
				<Navbar.Link to={ROUTES.ABOUT}>About</Navbar.Link>
				<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
			</FlexBox>
		</Navbar>
	);
}

export default NavbarContainer;
