import React from "react";
import { Blog, FlexBox } from "../../components";

function DefaultBlogContainer({
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
		<Blog {...restProps}>
			<Blog.Picture src={src} />
			<Blog.Meta src={avatar} author={author} category={category} />
			<Blog.Header variant="h2">{title}</Blog.Header>
			<Blog.SubHeader variant="p" text={body} />
			<FlexBox justify="space-between" style={{ marginTop: "50px" }}>
				<Blog.Text>Lastest Update: {date}</Blog.Text>
				<Blog.Link to={to}>Read More</Blog.Link>
			</FlexBox>
		</Blog>
	);
}

export default DefaultBlogContainer;
