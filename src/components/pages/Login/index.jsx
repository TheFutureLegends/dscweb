import React, { Fragment } from "react";
import { LoginContainer } from "../../containers";
// -- Animations --
import { default as LoginAnimation } from "../../animations/login";

function Login() {
	return (
		<Fragment>
			<LoginAnimation
				render={(ele) => <LoginContainer animatedElement={ele} />}
			/>
		</Fragment>
	);
}

export default Login;
