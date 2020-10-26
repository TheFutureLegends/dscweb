import React, { useContext } from "react";
import { mock_data } from "../../../constants/mockData.js";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import DefaultBlogContainer from "./default";
import SmallBlogContainer from "./small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";

function MostPopularBlogs() {
	const theme = useTheme();
	const { history } = useContext(UtilityContext);

	return (
		<section>
			<Grid container spacing={2}>
				<Grid item lg={8} md={12}>
					{useMediaQuery(theme.breakpoints.up("sm")) &&
						mock_data.map((post) => (
							<FlexBox>
								<DefaultBlogContainer
									author={post.author}
									category={post.category}
									title={post.title}
									body={post.body}
									date={post.date}
									avatar={post.avatar}
									to={post.to}
									style={{ ...CSS.main().post, margin: "10px 0px" }}
									onClick={() => history.push(post.to)}
								/>
								<div style={CSS.main().post.image(post.src)} />
							</FlexBox>
						))}
					{useMediaQuery(theme.breakpoints.down("sm")) &&
						mock_data.map((post) => (
							<FlexBox>
								<SmallBlogContainer
									author={post.author}
									category={post.category}
									title={post.title}
									body={post.body}
									date={post.date}
									avatar={post.avatar}
									src={post.src}
									to={post.to}
									onClick={() => history.push(post.to)}
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
