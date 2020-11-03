import React, { useContext } from "react";
import { UtilityContext } from "../../../contexts/UtilityContext";
import ReactHtmlParser from "react-html-parser";
import { useFetch } from "../../hooks/useFetch";
// Components
import { FlexBox } from "../../styled-elements";
import { Typography, useTheme, Divider, Avatar, Grid } from "@material-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";
import { MUIMediaQuery } from "../../styled-elements";
import CountUp from "react-countup";
import Lazyload from "react-lazyload";
import SmallBlogContainer from "../../containers/blog/small";
// Constants
import * as ROUTES from "../../../constants/route";
import * as __style__ from "./styles/post.style";

function SinglePostPage(...props) {
	const slug = props[0].match.params.slug;
	const res = useFetch(`/posts/${slug}`);
	const post = res.response && res.response.data.post;
	const theme = useTheme();
	const { history } = useContext(UtilityContext);

	return (
		<React.Fragment>
			{post && (
				<React.Fragment>
					<FlexBox direction="column">
						<FlexBox style={__style__.category_container} justify="flex-start">
							<FlexBox
								justify="flex-start"
								style={__style__.category_container.inner}
							>
								<div style={__style__.category_container.header}>
									{post.category.title}
								</div>
								<MUIMediaQuery option={theme.breakpoints.up("md")}>
									<FlexBox.FlexBasis width={"50px"} />
									<ReactRouterLink
										style={__style__.category_container.subHeader}
									>
										See All Posts
									</ReactRouterLink>
									<FlexBox.FlexBasis width={"25px"} />
									<Divider style={__style__.separator} />
									<FlexBox.FlexBasis width={"25px"} />
									<ReactRouterLink
										style={__style__.category_container.subHeader}
									>
										Study Guide
									</ReactRouterLink>
								</MUIMediaQuery>
							</FlexBox>
						</FlexBox>
						<FlexBox
							justify="flex-start"
							direction="column"
							style={__style__.content_container("800px")}
						>
							<Typography
								variant="h4"
								style={__style__.content_container().title}
							>
								{post.title}
							</Typography>
							<FlexBox
								justify="space-between"
								style={__style__.content_container().meta}
							>
								<FlexBox>
									<Avatar
										style={__style__.content_container().avatar}
										alt={post.author.username}
										src={post.author.avatar}
									/>
									<FlexBox direction="column" style={{ marginLeft: "15px" }}>
										<div style={__style__.content_container().author}>
											{post.author.username}
										</div>
										<div style={__style__.content_container().date}>
											{post.createdAt}
										</div>
									</FlexBox>
								</FlexBox>
								<div style={{ fontStyle: "italic" }}>
									<span> Views: &nbsp;</span>
									<CountUp end={post.visit} separator="," duration={3} />
								</div>
							</FlexBox>

							<Lazyload throttle={1000} height={500}>
								<img
									style={__style__.content_container().image}
									src={post.image}
									alt={post.image}
								/>
							</Lazyload>
							<div style={{ width: "100%" }}>
								{ReactHtmlParser(post.description)}
							</div>
							<Divider style={__style__.content_container().separator} />
							<div style={__style__.footer}>
								<h5 style={__style__.footer.header}>
									More About {post.category.title}
								</h5>
								<Grid container spacing={3} style={{ marginTop: "15px" }}>
									{Array(4)
										.fill(
											<Grid item xs={6}>
												<SmallBlogContainer
													key={post._id}
													author={post.author.username}
													category={post.category.title}
													title={post.title}
													date={post.createdAt}
													src={post.image}
													avatar={post.author.avatar}
													onClick={() =>
														history.push(`${ROUTES.POST}/${post.slug}`)
													}
												/>
											</Grid>
										)
										.map((post) => post)}
								</Grid>
							</div>
						</FlexBox>
					</FlexBox>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default SinglePostPage;
