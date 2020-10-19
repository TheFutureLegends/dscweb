import React from "react";
import * as CSS from "../../pages/Home/styles/home.style.js";
import { FlexBox } from "../index";
import { Typography } from "@material-ui/core";

function AuthorItemWithPosts({ src, name, role, posts, ...restProps }) {
	return (
		<FlexBox
			{...restProps}
			style={CSS.eventSection.item}
			justify="space-between"
		>
			<FlexBox>
				<img src={src} alt="Avatar" style={CSS.eventSection.item.picture} />
				<FlexBox direction="column">
					<Typography variant="h5" style={CSS.eventSection.item.header}>
						{name}
					</Typography>
					<span style={CSS.eventSection.item.role}>{role}</span>
				</FlexBox>
			</FlexBox>
			<div style={CSS.eventSection.item.stat}>
				<span>{posts}</span>
			</div>
		</FlexBox>
	);
}

export default AuthorItemWithPosts;
