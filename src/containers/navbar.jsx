import React, { useState } from "react";
import useBreakPoint from "../hooks/useBreakPoint.js";
// Components
import { Navbar, FlexBox, IconLinkButton } from "../components/index";
import MediaQuery from "react-responsive";
// MUI components
import {
	faSearch,
	faHome,
	faBook,
	faCalendarAlt,
	faUsers,
	faBars,
	faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
// Constants
import * as ASSETS from "../constants/asset";
import * as ROUTES from "../constants/route";
import * as BREAK from "../constants/breakpoint";

function NavbarDesktop() {
	const [active, setActive] = useState(false);
	const breakPoint = useBreakPoint();

	return (
		<Navbar>
			<FlexBox style={{}}>
				<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
				<Navbar.Header>
					<MediaQuery maxDeviceWidth={1050}>RMIT DSC</MediaQuery>
					<MediaQuery minDeviceWidth={1050}>
						RMIT DEVELOPER STUDENT CLUB
					</MediaQuery>
				</Navbar.Header>
				<FlexBox.FlexBasis width="30px" />
				<MediaQuery minDeviceWidth={BREAK.tablet_xs}>
					<Navbar.SearchBar>
						<Navbar.Input
							onFocus={() => setActive(true)}
							onBlur={() => setActive(false)}
							active={breakPoint > BREAK.desktop_sm ? active : false}
							placeholder="Search…"
						/>
						<Navbar.Icon icon={faSearch} className="__search" />
					</Navbar.SearchBar>
				</MediaQuery>
			</FlexBox>
			<FlexBox>
				<MediaQuery minDeviceWidth={BREAK.tablet_xs}>
					<MediaQuery maxDeviceWidth={BREAK.tablet_md}>
						<IconLinkButton src={faHome} route={ROUTES.HOME} title={"Home"} />
						<IconLinkButton
							src={faCalendarAlt}
							route={ROUTES.EVENT}
							title={"Event"}
						/>
						<IconLinkButton src={faBook} route={ROUTES.GUIDE} title={"Guide"} />
						<IconLinkButton
							src={faUsers}
							route={ROUTES.ABOUT}
							title={"About"}
						/>
					</MediaQuery>
					<MediaQuery minDeviceWidth={BREAK.tablet_md}>
						<Navbar.Link to={ROUTES.HOME}>Home</Navbar.Link>
						<Navbar.Link to={ROUTES.EVENT}>Event</Navbar.Link>
						<Navbar.Link to={ROUTES.GUIDE}>Guide</Navbar.Link>
						<Navbar.Link to={ROUTES.ABOUT}>About</Navbar.Link>
					</MediaQuery>
					<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
				</MediaQuery>
				<MediaQuery maxDeviceWidth={BREAK.tablet_xs}>
					<IconLinkButton
						src={faSignInAlt}
						style={{ margin: "0px 15px 0px 10px" }}
						route={ROUTES.LOG_IN}
						title={"Log In"}
					/>
					<IconLinkButton
						src={faBars}
						style={{ margin: "0px 10px 0px 5px" }}
						route="#"
						title={"Menu"}
					/>
				</MediaQuery>
			</FlexBox>
		</Navbar>
	);
}

export default NavbarDesktop;
