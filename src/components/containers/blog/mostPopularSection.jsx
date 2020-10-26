import React, { useContext, useState, useEffect } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import { useMediaQuery, useTheme, Grid, Typography } from "@material-ui/core";
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
			let res = await axios.get(
				`${apiDomain}/posts/latest?sortBy=visit&limit=6&asc=true`
			);
			setPosts(res.data.posts);
		};

		fetchingData();
	}, [apiDomain]);

	return (
		<section>
			<Typography variant="h6" style={CSS.main().title}>
				Most popular posts
			</Typography>
			<Grid container spacing={3}>
				<Grid item={true} xs={12} sm={6} md={4} lg={4}>
					{posts[0] && (
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
					)}
				</Grid>
				{useMediaQuery(theme.breakpoints.up("md")) && (
					<Grid item={true} md={4}>
						{posts[0] && (
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
						)}
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
	);
}

export default MostPopularBlogs;
