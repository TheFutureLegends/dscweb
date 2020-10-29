import React, { useContext, useState, useEffect } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import * as BREAK from "../../../constants/breakpoint";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import DefaultBlogContainer from "./default";
import SmallBlogContainer from "./small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";
import { useFetch } from "../../hooks/useFetch.js";
import * as ROUTES from "../../../constants/route";
import { SmallPostSkeleton, DefaultPostSkeleton } from "../skeleton";
import { Skeleton } from "@material-ui/lab";

var offset = 1000;

function MostPopularBlogs() {
	const theme = useTheme();
	const { history, breakPoint } = useContext(UtilityContext);

	const [page, setPage] = useState(1);
	const [posts, setPosts] = useState([]);
	const res = useFetch(`/posts?limit=${page}0`);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > offset) {
				offset += 2000;
				setPage((page) => (page += 1));
			}
		};
		window.addEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (res.response != null) {
			setPosts(res.response.data.posts);
		}
	}, [res]);

	return (
		<section>
			<Grid container spacing={2}>
				<Grid item lg={8} xs={12} md={12}>
					{posts.length !== 0
						? breakPoint >= BREAK.smartphone_md
							? posts.slice(6).map((post) => (
									<FlexBox justify="flex-start">
										<DefaultBlogContainer
											key={post._id}
											author={post.author.username}
											category={post.category.title}
											title={post.title}
											body={post.description}
											date={post.createdAt}
											avatar={post.author.avatar}
											to="#"
											style={{
												...CSS.main().post,
												margin: "15px 0px",
												maxWidth: "500px",
											}}
											onClick={() =>
												history.push(`${ROUTES.POST}/${post.slug}`)
											}
										/>
										<div style={CSS.main().post.image(post.image)} />
									</FlexBox>
							  ))
							: posts.map((post) => (
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
											onClick={() =>
												history.push(`${ROUTES.POST}/${post.slug}`)
											}
										/>
									</FlexBox>
							  ))
						: breakPoint >= BREAK.smartphone_md
						? Array(10)
								.fill(<SmallPostSkeleton />)
								.map((post) => post)
						: Array(10)
								.fill(
									<FlexBox justify="flex-start">
										<DefaultPostSkeleton />
										<Skeleton height="100%" width="100%" effect="wave" />
									</FlexBox>
								)
								.map((post) => post)}
				</Grid>
				{useMediaQuery(theme.breakpoints.up("lg")) && (
					<Grid item={true} lg={4}>
						Hello
					</Grid>
				)}
			</Grid>
		</section>
	);
}

export default MostPopularBlogs;
