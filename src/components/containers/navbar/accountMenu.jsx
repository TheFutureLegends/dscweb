import React, { useContext } from "react";
import { MenuItem, Avatar, Typography, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faRegistered,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { IconLinkButton, FlexBox } from "../../styled-elements";
import { MenuContext } from "../../../contexts/MenuContext";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { style as SidebarStyle } from "../../styles/sidebar.style.js";
import MenuLayout from "./menuLayout";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../../constants/route";
import { logoutUser } from "../../../core/redux/actions/user.action";
import { connect } from "react-redux";

const style = {
  icon: {
    width: "20px",
    height: "20px",
    marginRight: "20px",
    marginLeft: "10px",
    color: "white",
  },
  header: { width: "100%" },
  body: { color: "gray" },
};

function CustomItem({ icon, header, body, ...restProps }) {
  return (
    <MenuItem {...restProps}>
      <FlexBox>
        <FontAwesomeIcon icon={icon} style={style.icon} />
        <FlexBox direction="column" justify="flex-start">
          <Typography variant="subtitle1" style={style.header}>
            {header}
          </Typography>
          <Typography variant="body2" style={style.body}>
            {body}
          </Typography>
        </FlexBox>
      </FlexBox>
    </MenuItem>
  );
}

function AccountMenu({ ...props }) {
  const { setAnchorEl, anchorEl } = useContext(MenuContext);

  const { history } = useContext(UtilityContext);

  const handleRedirect = (route) => {
    setAnchorEl({
      ...anchorEl,
      AddMenu: null,
    });

    history.push(route);
  };

  const handleCloseMenu = () =>
    setAnchorEl({
      ...anchorEl,
      AccountMenu: null,
    });

  const handleLogOut = () => props.logoutUser();

  return (
    <React.Fragment>
      {props.user.authenticated ? (
        <MenuLayout type="AccountMenu" {...props}>
          {/* <MenuItem onClick={handleCloseMenu}>
            <FlexBox>
              <Avatar
                src={props.user.credential.avatar}
                alt="profile-avatar"
                style={{ marginRight: "10px" }}
              />
              <Typography variant="subtitle1">
                {props.user.credential.username}
              </Typography>
            </FlexBox>
          </MenuItem>
          <Divider style={SidebarStyle.divider} /> */}
          <CustomItem
              icon={faBook}
              header="Post List"
              body="See which post belong to you"
              onClick={() => handleRedirect(ROUTES.NEW_POST)}
            />
          <Divider style={SidebarStyle.divider} />
          <MenuItem
            onClick={() => {
              handleLogOut.call(this, arguments);
              handleCloseMenu.call(this, arguments);
            }}
          >
            <FlexBox>
              <FontAwesomeIcon icon={faSignOutAlt} style={style.icon} />
              <Typography variant="subtitle1">Log Out</Typography>
            </FlexBox>
          </MenuItem>
        </MenuLayout>
      ) : (
        <FlexBox>
          <ReactRouterLink to={ROUTES.LOG_IN} onClick={handleCloseMenu}>
            <FlexBox>
              <FontAwesomeIcon icon={faSignInAlt} style={style.icon} />
              <Typography style={{ color: "white" }} variant="subtitle1">
                Log In
              </Typography>
            </FlexBox>
          </ReactRouterLink>
          &nbsp;&nbsp;&nbsp;
          <ReactRouterLink to={ROUTES.SIGN_UP} onClick={handleCloseMenu}>
            <FlexBox>
              <FontAwesomeIcon icon={faRegistered} style={style.icon} />
              <Typography style={{ color: "white" }} variant="subtitle1">
                Register
              </Typography>
            </FlexBox>
          </ReactRouterLink>
        </FlexBox>
        // <MenuLayout type="AccountMenu">
        // 	<MenuItem
        // 		component={ReactRouterLink}
        // 		to={ROUTES.LOG_IN}
        // 		onClick={handleCloseMenu}
        // 	>
        // 		<FlexBox>
        // 			<FontAwesomeIcon icon={faSignInAlt} style={style.icon} />
        // 			<Typography variant="subtitle1">Log In</Typography>
        // 		</FlexBox>
        // 	</MenuItem>
        // </MenuLayout>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu);
