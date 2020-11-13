import React from "react";
import { Typography } from "@material-ui/core";
import { FlexBox } from "../../styled-elements";
import { theme } from "../../../global-theme.js";

const style = {
	header: {
		fontFamily: "Raleway, sans-serif",
		fontWeight: "bold",
		color: "white",
		margin: "15px",
	},
	paper: {},
};

function PostEditor() {
	return (
		<FlexBox>
			<FlexBox direction="column" style={style.paper}>
				<Typography variant="h5" style={style.header}>
					Create new post
				</Typography>
			</FlexBox>
		</FlexBox>
	);
}

export default PostEditor;
