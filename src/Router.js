import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import useBreakPoint from "./components/logics/useBreakPoint";
import * as ROUTES from "./constants/route";
import * as PAGE from "./components/pages";
import { NavbarContainer, FooterContainer } from "./components/containers";
import { UtilityContext } from "./contexts/UtilityContext";
import NavbarAnimation from "./components/animations/navbar";

function Router() {
	const apiDomain = "https://rmit-dsc-api.herokuapp.com/api";
	const location = useLocation();
	const history = useHistory();
	const breakPoint = useBreakPoint();

	return (
		<UtilityContext.Provider
			value={{ history, breakPoint, location, apiDomain }}
		>
			<NavbarAnimation
				render={(ele) => <NavbarContainer animatedElement={ele} />}
			/>
			<Switch location={location} key={location.pathname}>
				<Route path={ROUTES.ABOUT} component={PAGE.AboutPage} />
				<Route path={ROUTES.EVENT} component={PAGE.EventPage} />
				<Route path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
				{/* <Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} /> */}
				<Route path={ROUTES.BLOG} component={PAGE.BlogPage} />
				<Route path={ROUTES.HOME} component={PAGE.HomePage} />
			</Switch>
			<FooterContainer />
		</UtilityContext.Provider>
	);
}

export default Router;
