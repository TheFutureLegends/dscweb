import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import useBreakPoint from "./components/logics/useBreakPoint";
import * as ROUTES from "./constants/route";
import * as PAGE from "./components/pages";
import { NavbarContainer, FooterContainer } from "./components/containers";
import { UtilityContext } from "./contexts/UtilityContext";
import NavbarAnimation from "./components/animations/navbar";
import { apiDomain } from "./constants/api";
import { cookies, cookieName } from "./constants/cookie";
// -- Redux --
import { SET_AUTHENTICATED } from "./core/redux/types/user.types";
import { logoutUser, getUserData } from "./core/redux/actions/user.action";
import axios from "axios";
import store from "./core/redux/store";

const cookie = cookies.get(cookieName);

if (cookie) {
	store.dispatch({ type: SET_AUTHENTICATED });
	axios.defaults.headers.common["Authorization"] = cookie.token;
	store.dispatch(getUserData(cookie.token));
} else {
	store.dispatch(logoutUser());
}

function Router() {
	const location = useLocation();
	const history = useHistory();
	const breakPoint = useBreakPoint();

	let isDeveloped = location.pathname === ROUTES.DEVELOPMENT;
	return (
		<UtilityContext.Provider
			value={{ history, breakPoint, location, apiDomain }}
		>
			{!isDeveloped && (
				<NavbarAnimation
					render={(ele) => <NavbarContainer animatedElement={ele} />}
				/>
			)}
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
				<Route exact path={ROUTES.PLAYGROUND} component={PAGE.PlaygroundPage} />
				<Route
					exact
					path={ROUTES.DEVELOPMENT}
					component={PAGE.DevelopmentPage}
				/>
			</Switch>
			{!isDeveloped && <FooterContainer />}
		</UtilityContext.Provider>
	);
}

export default Router;
