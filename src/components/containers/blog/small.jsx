import React from "react";
import { Blog, FlexBox } from "../../styled-elements";
import { Grid } from "@material-ui/core";

//FIXME  Each child in a list should have a unique "key" prop.
function SmallBlogContainer({
	src,
	title,
	body,
	date,
	author,
	category,
	avatar,
	...restProps
}) {
	return (
		<Blog
			{...restProps}
			style={{
				margin: "10px 0px",
			}}
			container
			spacing={2}
			size="small"
		>
			<Grid item={true} xs={8}>
				<Blog.Meta src={avatar} author={author} category={category} />
				<Blog.Header variant="h2">{title}</Blog.Header>
				<Blog.SubHeader
					variant="subtitle1"
					style={{ fontSize: "10px" }}
					limit={100}
					text={body}
				/>
				<FlexBox justify="space-between" style={{ marginTop: "10px" }}>
					<Blog.Text>{date}</Blog.Text>
				</FlexBox>
			</Grid>
			<Grid item={true} xs={4}>
				<Blog.Picture src={src} className="__small_blog_picture" />
			</Grid>
		</Blog>
	);
}

export default SmallBlogContainer;
