import React, { useState, Fragment, useContext, useEffect } from "react";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { DrawerContext } from "../../../contexts/DrawerContext.js";
// Components
import { Navbar, FlexBox, IconLinkButton } from "../../styled-elements";
// MUI components
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "@material-ui/core";
import DrawerContainer from "./drawer";
// Constants
import * as ASSETS from "../../../constants/asset";
import * as ROUTES from "../../../constants/route";
import * as BREAK from "../../../constants/breakpoint";

function NavbarDesktop({ animatedElement, ...restProps }) {
	const [active, setActive] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const [navStatus, setNavStatus] = useState({
		show: true,
		scrollPos: 0,
	});
	const { breakPoint } = useContext(UtilityContext);

	useEffect(() => {
		const handleScroll = () => {
			setNavStatus({
				scrollPos: document.body.getBoundingClientRect().top,
				show: document.body.getBoundingClientRect().top > navStatus.scrollPos,
			});
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<Fragment>
			<Navbar
				{...restProps}
				variants={animatedElement.Navbar}
				animate={navStatus.show ? "hidden" : "show"}
			>
				<FlexBox>
					<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
					<Navbar.Header>
						{useMediaQuery("(max-width:1050px)")
							? "RMIT DSC"
							: "RMIT DEVELOPER STUDENT CLUB"}
					</Navbar.Header>
					<FlexBox.FlexBasis width="30px" />
					{useMediaQuery(`(min-width:${BREAK.smartphone_xs}px)`) && (
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
							{breakPoint <= BREAK.tablet_md
								? ROUTES.listOfRoutes.map((item) => (
										<IconLinkButton
											src={item.icon}
											route={item.route}
											title={item.text}
										/>
								  ))
								: ROUTES.listOfRoutes.map((item) => (
										<Navbar.Link to={item.route}>{item.text}</Navbar.Link>
								  ))}

							<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
						</Fragment>
					) : (
						<Fragment>
							<IconLinkButton
								src={faBars}
								onClick={() => setOpenMenu(true)}
								style={{ margin: "0px 10px 0px 5px" }}
								route="#"
								title={"Menu"}
							/>
						</Fragment>
					)}
				</FlexBox>
			</Navbar>
			<DrawerContext.Provider value={{ openMenu, setOpenMenu }}>
				{breakPoint < BREAK.tablet_xs && <DrawerContainer />}
			</DrawerContext.Provider>
		</Fragment>
	);
}

export default NavbarDesktop;
