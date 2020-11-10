import React, { useState, Fragment, useContext } from "react";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { DrawerContext } from "../../../contexts/DrawerContext.js";
import { MenuContext } from "../../../contexts/MenuContext.js";
import { connect } from "react-redux";
// Components
import {
	Navbar,
	FlexBox,
	MUIMediaQuery,
	IconLinkButton,
} from "../../styled-elements";
import MenuContainer from "./menu";
import DrawerContainer from "./drawer";
import {
	faSearch,
	faBars,
	faCaretDown,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
// Constants
import * as ASSETS from "../../../constants/asset";
import * as BREAK from "../../../constants/breakpoint";

function NavbarContainer({ ...props }) {
	const [active, setActive] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const { breakPoint } = useContext(UtilityContext);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleOpenMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleCloseMenu = () => {
		setAnchorEl(null);
	};

	const handlePostBlog = () => {};

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
						<MUIMediaQuery option={`(min-width: ${BREAK.smartphone_md}px  )`}>
							<Navbar.SearchBar>
								<Navbar.Input
									onFocus={() => setActive(true)}
									onBlur={() => setActive(false)}
									active={breakPoint > BREAK.smartphone_md ? active : false}
									placeholder="Search…"
								/>
								<Navbar.Icon icon={faSearch} className="__search" />
							</Navbar.SearchBar>
						</MUIMediaQuery>
					</FlexBox>
					<FlexBox>
						<IconLinkButton
							title="Add New Post"
							id="Add"
							icon={faPlus}
							onClick={handlePostBlog}
						/>
						<IconLinkButton
							title="Account"
							id="Account"
							icon={faCaretDown}
							onClick={handleOpenMenu}
						/>
						<MenuContext.Provider value={{ anchorEl, handleCloseMenu }}>
							<MenuContainer />
						</MenuContext.Provider>
						<MUIMediaQuery option={`(max-width: ${BREAK.desktop_sm}px)`}>
							<IconLinkButton
								title="Dashboard"
								id="Dashboard"
								icon={faBars}
								onClick={() => setOpenMenu(true)}
							/>
						</MUIMediaQuery>
					</FlexBox>
				</FlexBox>
			</Navbar>
			<MUIMediaQuery option={`(max-width: ${BREAK.desktop_sm}px)`}>
				<DrawerContext.Provider value={{ openMenu, setOpenMenu }}>
					<DrawerContainer />
				</DrawerContext.Provider>
			</MUIMediaQuery>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, null)(NavbarContainer);
