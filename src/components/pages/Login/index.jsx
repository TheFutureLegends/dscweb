import React from "react";
import { LoginContainer } from "../../containers";
// -- Animations --
import { default as LoginAnimation } from "../../animations/login";
import { AnimatePresence } from "framer-motion";

function Login() {
	return (
		<AnimatePresence exitBeforeEnter>
			<LoginAnimation
				render={(ele) => <LoginContainer animatedElement={ele} />}
			/>
		</AnimatePresence>
	);
}

export default Login;
