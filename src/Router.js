import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import * as ROUTES from "./constants/route";
import * as PAGE from "./components/pages";
import { NavbarContainer } from "./components/containers";
import { HistoryContext } from "./contexts/HistoryContext";

function Router() {
	const location = useLocation();
	const history = useHistory();
	return (
		<HistoryContext.Provider value={{ history }}>
			<NavbarContainer />
			<Switch location={location} key={location.pathname}>
				<Route path={ROUTES.ABOUT} component={PAGE.AboutPage} />
				<Route path={ROUTES.EVENT} component={PAGE.EventPage} />
				<Route path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
				<Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} />
				<Route path={ROUTES.BLOG} component={PAGE.GuidePage} />
				<Route path={ROUTES.HOME} component={PAGE.HomePage} />
			</Switch>
		</HistoryContext.Provider>
	);
}

export default Router;
