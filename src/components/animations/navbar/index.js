import React from "react";

export default class NavbarAnimation extends React.Component {
	state = {
		Navbar: {
			open: {
				marginTop: "0px",
			},
			exit: {
				marginTop: "-75px",
			},
			initial: {
				marginTop: "-75px",
			},
			transition: {},
		},
	};
	render() {
		return this.props.render(this.state);
	}
}
