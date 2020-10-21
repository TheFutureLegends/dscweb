import React, { useContext } from "react";
import * as CSS from "../../pages/Home/styles/home.style.js";
import * as BREAK from "../../../constants/breakpoint";
import * as ASSETS from "../../../constants/asset";
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
				<Grid container spacing={5} style={CSS.aboutSection()}>
					<Grid item={true} xs={5} style={CSS.aboutSection().jumbotron}>
						<FlexBox direction="column">
							<Typography variant="h2" style={CSS.aboutSection().subheader}>
								<FlexBox direction="column">
									A community of friendly
									<span style={CSS.aboutSection().bigText}>developers</span>
								</FlexBox>
							</Typography>
							<Typography variant="p" style={CSS.aboutSection().text}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Tenetur saepe, dolore, rerum ipsa temporibus in repellat rem ab
								inventore autem voluptatem accusantium esse, culpa obcaecati
								beatae. Optio suscipit modi possimus. Lorem ipsum dolor sit amet
								consectetur adipisicing elit.
							</Typography>
						</FlexBox>
					</Grid>
					<Grid item={true} xs={7}>
						<div style={CSS.aboutSection(ASSETS.BLOG_PICTURE_2).picture}></div>
					</Grid>
				</Grid>
			</FlexBox>
		</section>
	);
}

export default AboutPage;
