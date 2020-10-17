import React, { useState } from "react";
import useBreakPoint from "../hooks/useBreakPoint.js";
// Components
import { Navbar, FlexBox, Tooltip } from "../components/index";
// MUI components
import {
	faSearch,
	faHome,
	faCalendarAlt,
	faBook,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
// Constants
import * as ASSETS from "../constants/asset";
import * as ROUTES from "../constants/route";
import * as BREAK from "../constants/breakpoint";

const IconLinkButton = ({ src, route, title }) => {
	return (
		<>
			<Navbar.Link to={route}>
				<Navbar.IconButton icon={src} data-for={`${route}${src}`} data-tip />
			</Navbar.Link>
			<Tooltip id={`${route}${src}`} effect="solid">
				{title}
			</Tooltip>
		</>
	);
};

function NavbarContainer() {
	const [active, setActive] = useState(false);
	const breakPoint = useBreakPoint();
	return (
		<Navbar>
			<FlexBox style={{}}>
				<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
				<Navbar.Header>
					{breakPoint > BREAK.desktop_sm
						? "RMIT DEVELOPER STUDENT CLUB"
						: "RMIT DSC"}
				</Navbar.Header>
				<FlexBox.FlexBasis width="30px" />
				<Navbar.SearchBar>
					<Navbar.Input
						onFocus={() => setActive(true)}
						onBlur={() => setActive(false)}
						active={breakPoint > BREAK.tablet_horizontal ? active : false}
						placeholder="Search…"
					/>
					<Navbar.Icon icon={faSearch} className="__search" />
				</Navbar.SearchBar>
			</FlexBox>
			<FlexBox>
				{breakPoint > BREAK.smartphone_lg ? (
					<>
						<Navbar.Link to={ROUTES.HOME}>Home</Navbar.Link>
						<Navbar.Link to={ROUTES.EVENT}>Event</Navbar.Link>
						<Navbar.Link to={ROUTES.GUIDE}>Guide</Navbar.Link>
						<Navbar.Link to={ROUTES.ABOUT}>About</Navbar.Link>
					</>
				) : (
					<>
						<IconLinkButton route={ROUTES.HOME} src={faHome} title="Home" />
						<IconLinkButton
							route={ROUTES.EVENT}
							src={faCalendarAlt}
							title="Event"
						/>
						<IconLinkButton
							route={ROUTES.GUIDE}
							src={faBook}
							title="Study Guide"
						/>
						<IconLinkButton
							route={ROUTES.ABOUT}
							src={faUsers}
							title="About Us"
						/>
					</>
				)}
				<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
			</FlexBox>
		</Navbar>
	);
}

export default NavbarContainer;
