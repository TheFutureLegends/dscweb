import React from "react";
import { Paper, Avatar } from "@material-ui/core";
import { FlexBox } from "../styled-elements";
import faker from "faker";

const style = {
	main: {
		paddingTop: "20px",
	},
	card: {
		width: "300px",
		padding: "8px 10px",
	},
};

function BlogDashboard() {
	return (
		<FlexBox direction="row" style={style.main}>
			<Paper style={style.card}>
				<Avatar alt="Remy Sharp" src={faker.image.avatar()} />
			</Paper>
		</FlexBox>
	);
}

export default BlogDashboard;
