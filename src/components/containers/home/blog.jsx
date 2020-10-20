import React, { useContext, useState } from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { FlexBox } from "../../styled-elements";
import { AuthorItemWithPosts } from "../../styled-elements";
import DefaultBlogContainer from "../blog/default";
import SmallBlogContainer from "../blog/small";
import * as CSS from "../../pages/Home/styles/home.style.js";
import * as BREAK from "../../../constants/breakpoint";
import * as ASSETS from "../../../constants/asset";
import { mock_data } from "../../../constants/mockData";
import { HistoryContext } from "../../../contexts/HistoryContext";

function BlogContainer() {
	const { history } = useContext(HistoryContext);
	//TODO Open ranking section (Considered)
	const [openRanking, setOpenRanking] = useState(false);
	const handlePostClick = (src) => {
		history.push(src);
	};

	return (
		<section style={CSS.blogSection.main}>
			<Grid container spacing={3}>
				<Grid item={true} lg={!openRanking ? 12 : 9} xs={12} md={12} sm={12}>
					<FlexBox direction="column">
						<Typography variant="h2" style={CSS.blogSection.header}>
							Lastest Blog Post
						</Typography>
						<Paper style={CSS.blogSection.paper.blog}>
							<Grid container spacing={4}>
								<Grid item={true} xs={12} sm={6} md={7} lg={4}>
									<DefaultBlogContainer
										author={mock_data[0].author}
										category={mock_data[0].category}
										title={mock_data[0].title}
										body={mock_data[0].body}
										date={mock_data[0].date}
										src={mock_data[0].src}
										avatar={mock_data[0].avatar}
										to={mock_data[0].to}
										onClick={() => handlePostClick(mock_data[0].to)}
									/>
								</Grid>
								{useMediaQuery(`(min-width:${BREAK.desktop_sm + 100}px)`) && (
									<Grid item={true} xs={4}>
										<DefaultBlogContainer
											author={mock_data[1].author}
											category={mock_data[1].category}
											title={mock_data[1].title}
											body={mock_data[1].body}
											date={mock_data[1].date}
											src={mock_data[1].src}
											avatar={mock_data[1].avatar}
											to={mock_data[1].to}
											onClick={() => handlePostClick(mock_data[1].to)}
										/>
									</Grid>
								)}

								<Grid item={true} xs={12} md={5} sm={6} lg={4}>
									<FlexBox
										direction="column"
										justify="space-between"
										style={{ height: "100%" }}
									>
										{mock_data.slice(2).map((post) => (
											<SmallBlogContainer
												author={post.author}
												category={post.category}
												title={post.title}
												body={post.body}
												date={post.date}
												src={post.src}
												avatar={post.avatar}
												to={post.to}
												onClick={() => handlePostClick(post.to)}
											/>
										))}
									</FlexBox>
								</Grid>
							</Grid>
						</Paper>
					</FlexBox>
				</Grid>
				{/*
				<Grid
					item={true}
					lg={3}
					xs={12}
					md={6}
					sm={12}
					style={{ margin: "0px auto" }}
				>
					<FlexBox direction="column">
						<Typography variant="h2" style={CSS.blogSection.header}>
							Top Authors
						</Typography>
						<Paper style={CSS.blogSection.paper.ranking}>
							<FlexBox direction="column">
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
								<AuthorItemWithPosts
									src={ASSETS.AVATAR}
									name={"Tin Quan Chung"}
									role={"Content Writer"}
									posts={12}
								/>
							</FlexBox>
						</Paper>
					</FlexBox>
				</Grid>
				*/}
			</Grid>
		</section>
	);
}

export default BlogContainer;
