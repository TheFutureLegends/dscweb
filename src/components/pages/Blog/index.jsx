import React, { useContext } from "react";
import * as CSS from "./styles/blog.style.js";
import { Typography, Grid } from "@material-ui/core";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import * as BREAK from "../../../constants/breakpoint";

function BlogPage() {
	const { breakPoint } = useContext(UtilityContext);
	return (
		<div
			style={CSS.main(
				breakPoint >= BREAK.tablet_md ? "30px 100px" : "30px 40px"
			)}
		>
			<section>
				{breakPoint >= BREAK.tablet_md && (
					<Typography variant="h6" style={CSS.main().header}>
						Good Evening, Tin Quan Chung
					</Typography>
				)}
				<Grid container spacing={2}>
					<Grid item xs={9}>
						Hello
					</Grid>
					<Grid item xs={3}>
						World
					</Grid>
				</Grid>
			</section>
		</div>
	);
}

export default BlogPage;
