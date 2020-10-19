import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Router";
import Theme from "./Theme";
import { AnimatePresence } from "framer-motion";

function App() {
	return (
		<Theme>
			<AnimatePresence exitBeforeEnter>
				<Router>
					<AppRouter />
				</Router>
			</AnimatePresence>
		</Theme>
	);
}

export default App;
