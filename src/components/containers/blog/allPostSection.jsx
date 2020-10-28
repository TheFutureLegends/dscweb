import React, { useContext, useState, useEffect } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import DefaultBlogContainer from "./default";
import SmallBlogContainer from "./small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";
import { useFetch } from "../../hooks/useFetch.js";
var offset = 1000;

function MostPopularBlogs() {
	const theme = useTheme();
	const { history } = useContext(UtilityContext);

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
				<Grid item lg={8} md={12}>
					{useMediaQuery(theme.breakpoints.up("sm")) && posts
						? posts.map((post) => (
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
										style={{
											...CSS.main().post,
											margin: "15px 0px",
											maxWidth: "500px",
										}}
										onClick={() => history.push(post.to)}
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
										onClick={() => history.push("#")}
									/>
								</FlexBox>
						  ))}
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
