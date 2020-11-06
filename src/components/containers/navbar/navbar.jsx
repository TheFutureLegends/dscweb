import React, { useState, Fragment, useContext } from "react";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { DrawerContext } from "../../../contexts/DrawerContext.js";
import { logoutUser } from "../../../core/redux/actions/user.action";
import { connect } from "react-redux";
// Components
import {
	Navbar,
	FlexBox,
	IconLinkButton,
	MUIMediaQuery,
} from "../../styled-elements";
import DrawerContainer from "./drawer";
// MUI components
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
// Constants
import * as ASSETS from "../../../constants/asset";
import * as ROUTES from "../../../constants/route";
import * as BREAK from "../../../constants/breakpoint";

function NavbarContainer({ ...props }) {
	const [active, setActive] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const { breakPoint } = useContext(UtilityContext);

	return (
		<Fragment>
			<Navbar
				{...props}
				height={"75px"}
				direction={"column"}
				style={{ position: "sticky" }}
			>
				<FlexBox justify="space-between" style={{ width: "100%" }}>
					<FlexBox>
						<Navbar.Logo src={ASSETS.LOGO_BUBBLE} />
						<Navbar.Header>
							<MUIMediaQuery option="(max-width:1050px)">
								RMIT DSC
							</MUIMediaQuery>
							<MUIMediaQuery option="(min-width:1050px)">
								RMIT DEVELOPER STUDENT CLUB
							</MUIMediaQuery>
						</Navbar.Header>
						<FlexBox.FlexBasis width="30px" />
						<Navbar.SearchBar>
							<Navbar.Input
								onFocus={() => setActive(true)}
								onBlur={() => setActive(false)}
								active={breakPoint > BREAK.smartphone_md ? active : false}
								placeholder="Search…"
							/>
							<Navbar.Icon icon={faSearch} className="__search" />
						</Navbar.SearchBar>
					</FlexBox>
					<FlexBox>
						<MUIMediaQuery option={`(min-width: ${BREAK.tablet_xs + 80}px)`}>
							<Fragment>
								{breakPoint <= BREAK.desktop_sm
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
								{props.user.authenticated === true ? (
									props.user.username
								) : (
									<Navbar.Link to={ROUTES.LOG_IN}>Log In</Navbar.Link>
								)}
							</Fragment>
						</MUIMediaQuery>
						<MUIMediaQuery option={`(max-width: ${BREAK.tablet_xs + 80}px)`}>
							<Fragment>
								<IconLinkButton
									src={faBars}
									onClick={() => setOpenMenu(true)}
									style={{ margin: "0px 10px 0px 5px" }}
									route="#"
									title={"Menu"}
								/>
							</Fragment>
						</MUIMediaQuery>
					</FlexBox>
				</FlexBox>
			</Navbar>
			<DrawerContext.Provider value={{ openMenu, setOpenMenu }}>
				{breakPoint < BREAK.desktop_sm && <DrawerContainer />}
			</DrawerContext.Provider>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = {
	logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
