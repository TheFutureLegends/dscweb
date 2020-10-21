import React, { Fragment } from "react";
import { Banner } from "../../styled-elements";
import * as HOME from "../../containers/home";

function Home() {
	return (
		<Fragment>
			<Banner />
			<HOME.TagContainer />
			<HOME.BlogSectionContainer />
			<HOME.EventSectionContainer />
			<HOME.AboutContainer />
		</Fragment>
	);
}

export default Home;
