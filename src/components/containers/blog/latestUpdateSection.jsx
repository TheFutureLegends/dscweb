import React, { useContext, useEffect, useState } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import { useMediaQuery, useTheme, Grid, Typography } from "@material-ui/core";
import DefaultBlogContainer from "./default";
import SmallBlogContainer from "./small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";
import { useFetch } from "../../hooks/useFetch.js";

function MostPopularBlogs() {
	const theme = useTheme();
	const [posts, setPosts] = useState([]);
	const { history } = useContext(UtilityContext);
	const res = useFetch("/posts/latest?sortBy=createdAt&limit=6&asc=true");

	useEffect(() => {
		if (res.response != null) {
			setPosts(res.response.data.posts);
		}
	}, [res]);

	return (
		<section>
			<section>
				<Typography
					variant="h6"
					style={{
						...CSS.main().title,
					}}
				>
					Latest Update Posts
				</Typography>
				<Grid container spacing={3}>
					{posts[0] && (
						<Grid item={true} xs={12} sm={6} md={4} lg={4}>
							<DefaultBlogContainer
								key={posts[0]._id}
								author={posts[0].author.username}
								category={posts[0].category.title}
								title={posts[0].title}
								body={posts[0].description}
								date={posts[0].createdAt}
								src={posts[0].image}
								avatar={posts[0].author.avatar}
								to="#"
								style={CSS.main().post}
								onClick={() => history.push("#")}
							/>
						</Grid>
					)}

					{useMediaQuery(theme.breakpoints.up("md")) && posts[1] && (
						<Grid item={true} md={4}>
							<DefaultBlogContainer
								key={posts[1]._id}
								author={posts[1].author.username}
								category={posts[1].category.title}
								title={posts[1].title}
								body={posts[1].description}
								date={posts[1].createdAt}
								src={posts[1].image}
								avatar={posts[1].author.avatar}
								to="#"
								style={CSS.main().post}
								onClick={() => history.push("#")}
							/>
						</Grid>
					)}
					{useMediaQuery(theme.breakpoints.up("xs")) && (
						<Grid item={true} md={4} sm={6} lg={4}>
							<FlexBox
								direction="column"
								justify="space-between"
								style={{ height: "100%" }}
							>
								{posts &&
									posts
										.slice(2)
										.map((post) => (
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
										))}
							</FlexBox>
						</Grid>
					)}
				</Grid>
			</section>
		</section>
	);
}

export default MostPopularBlogs;
