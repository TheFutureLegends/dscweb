import React from "react";

export default class NavbarAnimation extends React.Component {
	state = {
		Navbar: {
			hidden: {
				top: "-5px",
			},
			show: {
				top: "-75px",
			},
			transition: {
				type: "spring",
				bounce: 0.1,
			},
		},
	};
	render() {
		return this.props.render(this.state);
	}
}
