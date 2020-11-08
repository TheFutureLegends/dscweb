import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import useBreakPoint from "./components/logics/useBreakPoint";
import * as ROUTES from "./constants/route";
import * as PAGE from "./components/pages";
import * as BREAK from "./constants/breakpoint";
import { NavbarContainer } from "./components/containers";
import { UtilityContext } from "./contexts/UtilityContext";
import { apiDomain } from "./constants/api";
import { cookies, cookieName } from "./constants/cookie";
import { MUIMediaQuery } from "./components/styled-elements";
import { useTheme } from "@material-ui/core";
import Dashboard from "./components/containers/dashboard";
import BlogDashboard from "./components/containers/blogDashboard";
// import RequiredRoute from "./components/helpers/RequiredRoute.jsx";
import { theme as StyledTheme } from "./global-theme";
// -- Redux --
import { logoutUser, getAuthUserData } from "./core/redux/actions/user.action";
import axios from "axios";
import store from "./core/redux/store";

const cookie = cookies.get(cookieName);

if (cookie) {
	axios.defaults.headers["x-access-token"] = cookie.token;
	store.dispatch(getAuthUserData(cookie.token));
} else {
	store.dispatch(logoutUser());
}

function Router() {
	const location = useLocation();
	const history = useHistory();
	const breakPoint = useBreakPoint();
	const theme = useTheme();
	const style = {
		centerDiv: {
			marginLeft: breakPoint >= BREAK.desktop_sm ? "360px" : "20px",
			marginRight: breakPoint >= BREAK.tablet_sm ? "360px" : "20px",
		},
		divider: `3px solid ${StyledTheme.colors.dark.fb.__fb_light_gray}`,
		leftSidebar: { maxWidth: "330px", width: "100%", position: "fixed" },
		rightSidebar: {
			overflowY: "auto",
			height: "calc(100% - 80px)",
			maxWidth: "330px",
			width: "100%",
			right: "0px",
			position: "fixed",
		},
	};
	return (
		<UtilityContext.Provider
			value={{ history, breakPoint, location, apiDomain }}
		>
			<NavbarContainer />
			<MUIMediaQuery option={theme.breakpoints.up("lg")}>
				<div style={style.leftSidebar}>
					<Dashboard />
				</div>
			</MUIMediaQuery>
			<MUIMediaQuery option={theme.breakpoints.up("md")}>
				<div style={style.rightSidebar}>
					<BlogDashboard />
				</div>
			</MUIMediaQuery>
			<div style={style.centerDiv}>
				<Switch location={location} key={location.pathname}>
					{/* <Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} /> */}
					<Route exact path={ROUTES.ABOUT} component={PAGE.AboutPage} />
					<Route exact path={ROUTES.EVENT} component={PAGE.EventPage} />
					<Route exact path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
					{/* <Route exact path={ROUTES.BLOG} component={PAGE.BlogPage} /> */}
					<Route exact path={ROUTES.HOME} component={PAGE.BlogPage} />
					<Route
						exact
						path={ROUTES.SINGLE_POST}
						component={PAGE.SinglePostPage}
					/>
					<Route
						exact
						path={ROUTES.PLAYGROUND}
						component={PAGE.PlaygroundPage}
					/>
					<Route
						exact
						path={ROUTES.DEVELOPMENT}
						component={PAGE.DevelopmentPage}
					/>
				</Switch>
			</div>
		</UtilityContext.Provider>
	);
}

export default Router;
