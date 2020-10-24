import React from "react";

export default class LoginAnimation extends React.Component {
	state = {
		Inner: {
			open: {
				opacity: 1,
				marginTop: "0px",
				scale: 1,
			},
			exit: {
				opacity: 0,
				marginTop: "-30px",
				scale: 1.05,
			},
			initial: {
				opacity: 0,
				marginTop: "-50px",
				scale: 1.05,
			},
			transition: {
				duration: 0,
				type: "spring",
				stiffness: 500,
			},
		},
	};
	render() {
		return this.props.render(this.state);
	}
}
