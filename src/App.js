import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import Theme from "./Theme";

function App() {
	return (
		<Theme>
			<Router>
				<AppRouter />
			</Router>
		</Theme>
	);
}

export default App;
