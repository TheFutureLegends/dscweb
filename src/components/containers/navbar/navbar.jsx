import React, { useState, Fragment, useContext } from "react";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { DrawerContext } from "../../../contexts/DrawerContext.js";
import { MenuContext } from "../../../contexts/MenuContext.js";
import { connect } from "react-redux";
// Components
import { Navbar, FlexBox, MUIMediaQuery } from "../../styled-elements";
import MenuContainer from "./menu";
import DrawerContainer from "./drawer";
import { theme } from "../../../global-theme";
import {
	faSearch,
	faBars,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
// Constants
import * as ASSETS from "../../../constants/asset";
import * as BREAK from "../../../constants/breakpoint";

function CustomIconButton({ icon, ...restProps }) {
	return (
		<IconButton
			style={{
				fontSize: "20px",
				width: "40px",
				height: "40px",
				margin: "0px 5px",
				color: theme.colors.dark.fb.__fb_primary_text,
				backgroundColor: theme.colors.dark.fb.__fb_light_gray,
			}}
			{...restProps}
		>
			<FontAwesomeIcon icon={icon} />
		</IconButton>
	);
}

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
						<CustomIconButton icon={faCaretDown} onClick={handleOpenMenu} />
						<MenuContext.Provider value={{ anchorEl, handleCloseMenu }}>
							<MenuContainer />
						</MenuContext.Provider>
						<MUIMediaQuery option={`(max-width: ${BREAK.desktop_sm}px)`}>
							<CustomIconButton
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
