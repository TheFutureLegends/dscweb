import React from "react";
import { Route, Redirect } from "react-router-dom";
//Redirect the user to a specific route if logged in
export default function IsUserRedirect({
	user,
	loggedInPath,
	children,
	...restProps
}) {
	return (
		<Route
			{...restProps}
			render={() => {
				if (!user.authenticated) {
					return children;
				}

				if (user.authenticated) {
					return (
						<Redirect
							to={{
								pathname: loggedInPath,
							}}
						/>
					);
				}

				return null;
			}}
		></Route>
	);
}
