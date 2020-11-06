import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import useBreakPoint from "./components/logics/useBreakPoint";
import * as ROUTES from "./constants/route";
import * as PAGE from "./components/pages";
import { NavbarContainer, FooterContainer } from "./components/containers";
import { UtilityContext } from "./contexts/UtilityContext";
import { apiDomain } from "./constants/api";
import { cookies, cookieName } from "./constants/cookie";
import { MUIMediaQuery } from "./components/styled-elements";
import { useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
// -- Redux --
import { SET_AUTHENTICATED } from "./core/redux/types/user.types";
import { logoutUser, getAuthUserData } from "./core/redux/actions/user.action";
import axios from "axios";
import store from "./core/redux/store";

const cookie = cookies.get(cookieName);

if (cookie) {
	store.dispatch({ type: SET_AUTHENTICATED });
	axios.defaults.headers.common["Authorization"] = cookie.token;
	//FIXME store.dispatch(getAuthUserData(cookie.token));
} else {
	store.dispatch(logoutUser());
}

function Router() {
	const location = useLocation();
	const history = useHistory();
	const breakPoint = useBreakPoint();
	const theme = useTheme();
	return (
		<UtilityContext.Provider
			value={{ history, breakPoint, location, apiDomain }}
		>
			<NavbarContainer />
			<Grid container spacing={1} style={{ margin: "0", width: "100%" }}>
				<MUIMediaQuery option={theme.breakpoints.up("md")}>
					<Grid item lg={2}>
						<div style={{ position: "fixed" }}>Admin</div>
					</Grid>
				</MUIMediaQuery>
				<Grid item lg={8}>
					<Switch location={location} key={location.pathname}>
						{/* <Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} /> */}
						<Route exact path={ROUTES.ABOUT} component={PAGE.AboutPage} />
						<Route exact path={ROUTES.EVENT} component={PAGE.EventPage} />
						<Route exact path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
						<Route exact path={ROUTES.BLOG} component={PAGE.BlogPage} />
						<Route exact path={ROUTES.HOME} component={PAGE.HomePage} />
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
				</Grid>
				<Grid item lg={2} style={{ paddingRight: "0" }}>
					<div style={{ position: "fixed" }}>Admin</div>
				</Grid>
			</Grid>
			<FooterContainer />
		</UtilityContext.Provider>
	);
}

export default Router;
