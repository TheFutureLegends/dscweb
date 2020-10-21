import React, { useContext } from "react";
import * as CSS from "../../pages/Home/styles/home.style.js";
import * as BREAK from "../../../constants/breakpoint";
import { FlexBox } from "../../styled-elements";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { Typography, Grid } from "@material-ui/core";

function AboutPage() {
	const { breakPoint } = useContext(UtilityContext);
	return (
		<section
			style={
				CSS.blogSection(breakPoint >= BREAK.desktop_md ? "100px" : "30px").main
			}
		>
			<FlexBox direction="column">
				<Typography variant="h2" style={CSS.blogSection().header}>
					About Us
				</Typography>
				<Grid container spacing={3} style={CSS.aboutSection()}>
					<Grid item={true} xs={4} style={CSS.aboutSection().jumbotron}>
						Hello
					</Grid>
					<Grid item={true} xs={8} style={CSS.aboutSection().form}>
						Hey
					</Grid>
				</Grid>
			</FlexBox>
		</section>
	);
}

export default AboutPage;
