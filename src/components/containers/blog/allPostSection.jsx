import React, { useContext, useState, useEffect } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import DefaultBlogContainer from "./default";
import SmallBlogContainer from "./small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";
import axios from "axios";

function MostPopularBlogs() {
	const theme = useTheme();
	const { history, apiDomain } = useContext(UtilityContext);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchingData = async () => {
			let res = await axios.get(`${apiDomain}/posts?page=1`);
			setPosts(res.data.posts);
		};

		fetchingData();
	}, [apiDomain]);

	console.log(posts);

	return (
		<section>
			<Grid container spacing={2}>
				<Grid item lg={8} md={12}>
					{useMediaQuery(theme.breakpoints.up("sm")) &&
						posts &&
						posts.map((post) => (
							<FlexBox>
								<DefaultBlogContainer
									key={post._id}
									author={post.author.username}
									category={post.category.title}
									title={post.title}
									body={post.description}
									date={post.createdAt}
									avatar={post.author.avatar}
									to="#"
									style={{ ...CSS.main().post, margin: "10px 0px" }}
									onClick={() => history.push(post.to)}
								/>
								<div style={CSS.main().post.image(post.image)} />
							</FlexBox>
						))}
					{useMediaQuery(theme.breakpoints.down("sm")) &&
						posts &&
						posts.map((post) => (
							<FlexBox>
								<SmallBlogContainer
									key={post._id}
									author={post.author.username}
									category={post.category.title}
									title={post.title}
									date={post.createdAt}
									src={post.image}
									avatar={post.author.avatar}
									to="#"
									style={CSS.main().post}
									onClick={() => history.push("#")}
								/>
							</FlexBox>
						))}
				</Grid>
				{useMediaQuery(theme.breakpoints.up("lg")) && (
					<Grid item lg={4}>
						Hello
					</Grid>
				)}
			</Grid>
		</section>
	);
}

export default MostPopularBlogs;
