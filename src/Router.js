import React, { Fragment } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import * as ROUTES from "./constants/route";
import * as PAGE from "./pages";
import { NavbarContainer } from "./containers";

function Router() {
	const location = useLocation();
	return (
		<Fragment>
			<NavbarContainer />
			<Switch location={location} key={location.pathname}>
				<Route exact path={ROUTES.ABOUT} component={PAGE.AboutPage} />
				<Route exact path={ROUTES.EVENT} component={PAGE.EventPage} />
				<Route exact path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
				<Route exact path={ROUTES.SIGN_UP} component={PAGE.SignupPage} />
				<Route exact path={ROUTES.GUIDE} component={PAGE.GuidePage} />
				<Route exact path={ROUTES.HOME} component={PAGE.HomePage} />
			</Switch>
		</Fragment>
	);
}

export default Router;
