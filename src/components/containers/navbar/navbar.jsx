import React, { useState, Fragment, useContext } from "react";
import { Avatar, Typography } from "@material-ui/core";
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
import MenuContainer from "./accountMenu";
import AddMenuContainer from "./addMenu";
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
  const [anchorEl, setAnchorEl] = useState({
    AddMenu: null,
    AccountMenu: null,
  });

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
              <MUIMediaQuery option="(max-width:1050px)">DEMO</MUIMediaQuery>
              <MUIMediaQuery option="(min-width:1050px)">
                DEMO WEBSITE
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
            {props.user.authenticated ? (
              <FlexBox>
                <Avatar
                  src={props.user.credential.avatar}
                  alt="profile-avatar"
                  style={{ marginRight: "10px" }}
                />
                <Typography variant="subtitle1">
                  {props.user.credential.username}
                </Typography>

                <IconLinkButton
                  title="Account"
                  id="Account"
                  icon={faCaretDown}
                  onClick={(e) =>
                    setAnchorEl({ ...anchorEl, AccountMenu: e.currentTarget })
                  }
                />

                <IconLinkButton
                  title="Add"
                  id="Add"
                  icon={faPlus}
                  onClick={(e) =>
                    setAnchorEl({ ...anchorEl, AddMenu: e.currentTarget })
                  }
                />
              </FlexBox>
            ) : null}

            <MenuContext.Provider value={{ anchorEl, setAnchorEl }}>
              <AddMenuContainer />
            </MenuContext.Provider>

            <MenuContext.Provider value={{ anchorEl, setAnchorEl }}>
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
