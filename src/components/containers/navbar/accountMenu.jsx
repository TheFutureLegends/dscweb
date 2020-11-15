import React, { useContext } from "react";
import { MenuItem, Avatar, Typography, Divider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "../../styled-elements";
import { MenuContext } from "../../../contexts/MenuContext";
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
	},
};

function AccountMenu({ ...props }) {
	const { setAnchorEl, anchorEl } = useContext(MenuContext);

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
					<MenuItem onClick={handleCloseMenu}>
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
				<MenuLayout type="AccountMenu" {...props}>
					<MenuItem
						component={ReactRouterLink}
						to={ROUTES.LOG_IN}
						onClick={handleCloseMenu}
					>
						<FlexBox>
							<FontAwesomeIcon icon={faSignInAlt} style={style.icon} />
							<Typography variant="subtitle1">Log In</Typography>
						</FlexBox>
					</MenuItem>
				</MenuLayout>
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
