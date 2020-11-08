import React from "react";
import { useHistory } from "react-router-dom";

function RequiredRoute({ route, children }) {
	const history = useHistory();
	return (
		<React.Fragment>
			{history.location.pathname === route && children}
		</React.Fragment>
	);
}

export default RequiredRoute;
