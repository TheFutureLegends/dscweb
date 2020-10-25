import React, { useContext } from "react";
import { mock_data } from "../../../constants/mockData.js";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import { useMediaQuery, useTheme, Grid, Typography } from "@material-ui/core";
import DefaultBlogContainer from "./default";
import SmallBlogContainer from "./small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";

function MostPopularBlogs() {
	const theme = useTheme();
	const { history } = useContext(UtilityContext);

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
					<Grid item={true} xs={12} sm={6} md={4} lg={4}>
						<DefaultBlogContainer
							author={mock_data[0].author}
							category={mock_data[0].category}
							title={mock_data[0].title}
							body={mock_data[0].body}
							date={mock_data[0].date}
							src={mock_data[0].src}
							avatar={mock_data[0].avatar}
							to={mock_data[0].to}
							style={CSS.main().post}
							onClick={() => history.push(mock_data[0].to)}
						/>
					</Grid>
					{useMediaQuery(theme.breakpoints.up("md")) && (
						<Grid item={true} md={4}>
							<DefaultBlogContainer
								author={mock_data[1].author}
								category={mock_data[1].category}
								title={mock_data[1].title}
								body={mock_data[1].body}
								date={mock_data[1].date}
								src={mock_data[1].src}
								avatar={mock_data[1].avatar}
								to={mock_data[1].to}
								style={CSS.main().post}
								onClick={() => history.push(mock_data[0].to)}
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
										style={CSS.main().post}
										onClick={() => history.push(post.to)}
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
