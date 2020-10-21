import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import useBreakPoint from "./components/logics/useBreakPoint";
import * as ROUTES from "./constants/route";
import * as PAGE from "./components/pages";
import { NavbarContainer } from "./components/containers";
import { UtilityContext } from "./contexts/UtilityContext";

function Router() {
	const location = useLocation();
	const history = useHistory();
	const breakPoint = useBreakPoint();
	// console.log(location.pathname === "/login");
	return (
		<UtilityContext.Provider value={{ history, breakPoint }}>
			<NavbarContainer
				style={
					location.pathname === "/login"
						? { position: "relative" }
						: { position: "fixed" }
				}
			/>
			<Switch location={location} key={location.pathname}>
				<Route path={ROUTES.ABOUT} component={PAGE.AboutPage} />
				<Route path={ROUTES.EVENT} component={PAGE.EventPage} />
				<Route path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
				<Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} />
				<Route path={ROUTES.BLOG} component={PAGE.GuidePage} />
				<Route path={ROUTES.HOME} component={PAGE.HomePage} />
			</Switch>
		</UtilityContext.Provider>
	);
}

export default Router;
