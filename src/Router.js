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
				<Route exact path={ROUTES.ABOUT} component={PAGE.AboutPage} />
				<Route exact path={ROUTES.EVENT} component={PAGE.EventPage} />
				<Route exact path={ROUTES.LOG_IN} component={PAGE.LoginPage} />
				{/* <Route path={ROUTES.SIGN_UP} component={PAGE.SignupPage} /> */}
				<Route exact path={ROUTES.BLOG} component={PAGE.BlogPage} />
				<Route exact path={ROUTES.HOME} component={PAGE.HomePage} />
				<Route
					exact
					path={ROUTES.SINGLE_POST}
					component={PAGE.SinglePostPage}
				/>
			</Switch>
			<FooterContainer />
		</UtilityContext.Provider>
	);
}

export default Router;
