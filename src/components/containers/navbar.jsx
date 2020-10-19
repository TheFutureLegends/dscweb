import React, { useState, Fragment } from "react";
import useBreakPoint from "../logics/useBreakPoint.js";
// Components
import { Navbar, FlexBox, IconLinkButton } from "../styled-elements";
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
import { useMediaQuery } from "@material-ui/core";
// Constants
import * as ASSETS from "../../constants/asset";
import * as ROUTES from "../../constants/route";
import * as BREAK from "../../constants/breakpoint";

function NavbarDesktop() {
	const [active, setActive] = useState(false);
	const breakPoint = useBreakPoint();

	return (
		<Navbar>
			<FlexBox>
				<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
				<Navbar.Header>
					{useMediaQuery("(max-width:1050px)")
						? "RMIT DSC"
						: "RMIT DEVELOPER STUDENT CLUB"}
				</Navbar.Header>
				<FlexBox.FlexBasis width="30px" />
				{useMediaQuery(`(min-width:${BREAK.tablet_xs}px)`) && (
					<Navbar.SearchBar>
						<Navbar.Input
							onFocus={() => setActive(true)}
							onBlur={() => setActive(false)}
							active={breakPoint > BREAK.desktop_sm ? active : false}
							placeholder="Search…"
						/>
						<Navbar.Icon icon={faSearch} className="__search" />
					</Navbar.SearchBar>
				)}
			</FlexBox>
			<FlexBox>
				{useMediaQuery(`(min-width: ${BREAK.tablet_xs}px)`) ? (
					<Fragment>
						{breakPoint <= BREAK.tablet_md ? (
							<Fragment>
								<IconLinkButton
									src={faHome}
									route={ROUTES.HOME}
									title={"Home"}
								/>
								<IconLinkButton
									src={faCalendarAlt}
									route={ROUTES.EVENT}
									title={"Event"}
								/>
								<IconLinkButton
									src={faBook}
									route={ROUTES.BLOG}
									title={"Blog"}
								/>
								<IconLinkButton
									src={faUsers}
									route={ROUTES.ABOUT}
									title={"About"}
								/>
							</Fragment>
						) : (
							<Fragment>
								<Navbar.Link to={ROUTES.HOME}>Home</Navbar.Link>
								<Navbar.Link to={ROUTES.EVENT}>Event</Navbar.Link>
								<Navbar.Link to={ROUTES.BLOG}>Blog</Navbar.Link>
								<Navbar.Link to={ROUTES.ABOUT}>About</Navbar.Link>
							</Fragment>
						)}

						<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
					</Fragment>
				) : (
					<Fragment>
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
					</Fragment>
				)}
			</FlexBox>
		</Navbar>
	);
}

export default NavbarDesktop;
