import React, { useContext } from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { FlexBox } from "../../styled-elements";
import DefaultBlogContainer from "../blog/default";
import SmallBlogContainer from "../blog/small";
import * as CSS from "../../pages/Home/styles/home.style.js";
import * as BREAK from "../../../constants/breakpoint";
import { mock_data } from "../../../constants/mockData";
import { UtilityContext } from "../../../contexts/UtilityContext";

//TODO Open ranking section (Considered)
//FIXME Each child in a list should have a unique "key" prop.
function BlogContainer({ ...restProps }) {
	const { history, breakPoint } = useContext(UtilityContext);
	const handlePostClick = (src) => {
		history.push(src);
	};
	return (
		<section
			style={
				CSS.blogSection(breakPoint >= BREAK.desktop_md ? "150px" : "30px").main
			}
			{...restProps}
		>
			<Grid container spacing={3}>
				<Grid item={true} lg={12} xs={12} md={12} sm={12} key="blog_big">
					<FlexBox direction="column">
						<Typography variant="h2" style={CSS.blogSection().header}>
							Lastest Blog Post
						</Typography>
						<Paper style={CSS.blogSection().paper.blog}>
							<Grid container spacing={4}>
								<Grid
									item={true}
									xs={12}
									sm={6}
									md={7}
									lg={4}
									key="blog_section_1"
								>
									<DefaultBlogContainer
										key={mock_data[0].title}
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
									<Grid item={true} xs={4} key="blog_section_2">
										<DefaultBlogContainer
											key={mock_data[1].title}
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

								<Grid item={true} xs={12} md={5} sm={6} lg={4} key="blog_small">
									<FlexBox
										direction="column"
										justify="space-between"
										style={{ height: "100%" }}
									>
										{mock_data.slice(2).map((post, index) => (
											<SmallBlogContainer
												key={index}
												author={post.author}
												category={post.category}
												title={post.title}
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
			</Grid>
		</section>
	);
}

export default BlogContainer;
