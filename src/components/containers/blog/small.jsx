import React from "react";
import { Blog, FlexBox } from "../../styled-elements";
import { Grid } from "@material-ui/core";
import faker from "faker";

//FIXME  Each child in a list should have a unique "key" prop.
function SmallBlogContainer({
	src,
	title,
	body,
	date,
	author,
	category,
	to,
	avatar,
	...restProps
}) {
	return (
		<Blog {...restProps} container spacing={2} size="small">
			<Grid item={true} xs={8} key={faker.random.uuid()}>
				<Blog.Meta src={avatar} author={author} category={category} />
				<Blog.Header variant="h2">{title}</Blog.Header>
				<FlexBox justify="space-between" style={{ marginTop: "10px" }}>
					<Blog.Text>{date}</Blog.Text>
					<Blog.Link to={to}>Read More</Blog.Link>
				</FlexBox>
			</Grid>
			<Grid item={true} xs={4} key={faker.random.uuid()}>
				<Blog.Picture src={src} className="__small_blog_picture" />
			</Grid>
		</Blog>
	);
}

export default SmallBlogContainer;
