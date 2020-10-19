import React, { Fragment } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import * as ROUTES from "./constants/route";
import * as PAGE from "./pages";
import { NavbarContainer } from "./containers";

function Router() {
	const location = useLocation();
	return (
		<>
			<NavbarContainer />
			<Switch location={location} key={location.pathname}>
				<Route path={ROUTES.ABOUT} component={PAGE.AboutPage} />
				<Route path={ROUTES.EVENT} component={PAGE.EventPage} />
				<Route path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
				<Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} />
				<Route path={ROUTES.GUIDE} component={PAGE.GuidePage} />
				<Route path={ROUTES.HOME} component={PAGE.HomePage} />
			</Switch>
		</>
	);
}

export default Router;
