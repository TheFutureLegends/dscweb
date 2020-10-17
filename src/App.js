import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";

function App() {
	return (
		<Router>
			<AppRouter />
		</Router>
	);
}

export default App;
