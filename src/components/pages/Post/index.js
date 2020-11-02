import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { FlexBox } from "../../styled-elements";
import { Typography } from "@material-ui/core";
import * as __style__ from "./styles/post.style";

function SinglePostPage(...props) {
	const slug = props[0].match.params.slug;
	const res = useFetch(`/posts/${slug}`);
	const post = res.response && res.response.data.post;
	console.log(res.response && res.response.data);
	return (
		<React.Fragment>
			{!res.response && (
				<FlexBox direction="column">
					<FlexBox style={__style__.category_container}>
						<div>Web Programming</div>
					</FlexBox>
					<FlexBox
						justify="flex-start"
						direction="column"
						style={__style__.content_container}
					>
						<Typography variant="h4">
							Top 10 essential tools/library for React Developer
						</Typography>
					</FlexBox>
				</FlexBox>
			)}
		</React.Fragment>
	);
}

export default SinglePostPage;
