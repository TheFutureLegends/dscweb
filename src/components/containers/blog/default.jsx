import React from "react";
import { Blog, FlexBox } from "../../styled-elements";
import moment from "moment";

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
			{src && <Blog.Picture src={src} />}
			<Blog.Meta src={avatar} author={author} category={category} />
			<Blog.Header variant="h2">{title}</Blog.Header>
			<Blog.SubHeader variant="subtitle1" limit={100} text={body} />
			<FlexBox justify="space-between" style={{ marginTop: "50px" }}>
				<Blog.Text>
					Publish Date: {moment(date).format("MM ddd YYYY")}
				</Blog.Text>
				<Blog.Link to={to}>Read More</Blog.Link>
			</FlexBox>
		</Blog>
	);
}

export default DefaultBlogContainer;
