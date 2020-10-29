import React, { Fragment } from "react";
import { Banner } from "../../styled-elements";
import * as HOME from "../../containers/home";
import { Divider } from "@material-ui/core";
import { theme } from "../../../global-theme.js";

function Home() {
	const dividerStyle = {
		width: "100%",
		boxShadow: theme.colors.dark.__elevation_low,
	};
	return (
		<Fragment>
			<Banner />
			<HOME.TagContainer />
			<Divider style={dividerStyle} />
			<HOME.BlogSectionContainer />
			<Divider style={dividerStyle} />
			<HOME.EventSectionContainer />
			{/* <HOME.AboutContainer /> */}
		</Fragment>
	);
}

export default Home;
