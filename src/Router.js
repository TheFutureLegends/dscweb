import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import * as ROUTES from "./constants/route";
import * as PAGE from "./pages";

function Router() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Route path={ROUTES.ABOUT} component={PAGE.AboutPage} />
				<Route path={ROUTES.EVENT} component={PAGE.EventPage} />
				<Route path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
				<Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} />
				<Route path={ROUTES.GUIDE} component={PAGE.GuidePage} />
				<Route path={ROUTES.HOME} component={PAGE.HomePage} />
			</Switch>
		</AnimatePresence>
	);
}

export default Router;
