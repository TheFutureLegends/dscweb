import React, { Fragment } from "react";
import { Banner } from "../components";
import * as HOME from "../containers/home";

function Home() {
	return (
		<Fragment>
			<Banner />
			<HOME.TagContainer />
			<HOME.EventContainer />
		</Fragment>
	);
}

export default Home;
