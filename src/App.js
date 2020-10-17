import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import Theme from "./Theme";
import { NavbarContainer } from "./containers";

function App() {
	return (
		<Theme>
			<Router>
				<NavbarContainer />
				<AppRouter />
			</Router>
		</Theme>
	);
}

export default App;
