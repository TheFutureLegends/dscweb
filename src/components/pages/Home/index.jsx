import React, { Fragment, useContext } from "react";
import { Banner } from "../../styled-elements";
import { Divider } from "@material-ui/core";
import { theme } from "../../../global-theme.js";
import LatestUpdateSection from "../../containers/blog/latestUpdateSection";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import * as HOME from "../../containers/home";
import * as BREAK from "../../../constants/breakpoint";
import * as CSS from "./styles/home.style";

function Home() {
	const { breakPoint } = useContext(UtilityContext);

	const dividerStyle = {
		width: "100%",
		boxShadow: theme.colors.dark.__elevation_low,
	};
	const resolution = CSS.blogSection(
		breakPoint >= BREAK.desktop_sm ? "150px" : "30px"
	).main;

	return (
		<Fragment>
			<Banner />
			<HOME.TagContainer />
			<Divider style={dividerStyle} />
			<div style={resolution}>
				<h2
					style={{
						...CSS.blogSection().header,
						marginBottom: "30px",
						textAlign: "center",
					}}
				>
					Latest Blog Post
				</h2>
				<LatestUpdateSection />
			</div>
			<Divider style={dividerStyle} />
			<HOME.EventSectionContainer />
			{/* <HOME.AboutContainer /> */}
		</Fragment>
	);
}

export default Home;
