import React from "react";

export default class MainAnimation extends React.Component {
	state = {};
	render() {
		return this.props.render(this.state);
	}
}
