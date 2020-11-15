import React from "react";
import { Route, Redirect } from "react-router-dom";

//To protect the authenticated route from non-logged in user
export default function ProtectedRoute({ user, children, ...restProps }) {
	return (
		<Route
			{...restProps}
			render={({ location }) => {
				if (user.authenticated) {
					return children;
				}

				if (!user.authenticated) {
					return (
						<Redirect to={{ pathname: "login", state: { from: location } }} />
					);
				}

				return null;
			}}
		/>
	);
}
