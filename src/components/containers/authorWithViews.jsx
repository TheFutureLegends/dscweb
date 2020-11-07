import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { FlexBox } from "../styled-elements";
import CountUp from "react-countup";
import { style } from "../styles/sidebar.style.js";

function AuthorWithViews({ name, views, alt, src, ...restProps }) {
	return (
		<React.Fragment>
			<Avatar alt={alt} src={src} />
			<FlexBox direction="column" style={style.info} {...restProps}>
				<Typography
					variant="h5"
					style={{ ...style.info.name, fontWeight: "600", fontSize: "16px" }}
				>
					{name}
				</Typography>
				<Typography
					variant="p"
					style={{ ...style.info.meta, fontSize: "14px" }}
				>
					Number of views: &nbsp;
					<CountUp end={views} separator="," duration={3} />
				</Typography>
			</FlexBox>
		</React.Fragment>
	);
}

export default AuthorWithViews;
