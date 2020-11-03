import React, { useContext } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import * as BREAK from "../../../constants/breakpoint";
import { useMediaQuery, useTheme, Grid } from "@material-ui/core";
import DefaultBlogContainer from "./default";
import SmallBlogContainer from "./small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";
import * as ROUTES from "../../../constants/route";
import { SmallPostSkeleton, DefaultPostSkeleton } from "../skeleton";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";

function CustomPostSkeleton() {
	return (
		<FlexBox justify="flex-start">
			<DefaultPostSkeleton style={{ width: "58%" }} hasImage={false} />
			<Skeleton
				height="280px"
				width="200px"
				effect="wave"
				style={{ marginLeft: "20px" }}
			/>
		</FlexBox>
	);
}
function PaginationPostsSection({ page, ...props }) {
	const theme = useTheme();
	const { history, breakPoint } = useContext(UtilityContext);

	return (
		<section>
			<Grid container spacing={2}>
				<Grid item lg={8} xs={12} md={12}>
					{props.posts.length !== 0
						? breakPoint >= BREAK.smartphone_md
							? props.posts.slice(page === 1 ? 6 : 0).map((post) => (
									<FlexBox justify="flex-start">
										<DefaultBlogContainer
											key={post._id}
											author={post.author.username}
											category={post.category.title}
											title={post.title}
											body={post.description}
											date={post.createdAt}
											avatar={post.author.avatar}
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
							: props.posts.map((post) => (
									<FlexBox>
										<SmallBlogContainer
											key={post._id}
											author={post.author.username}
											category={post.category.title}
											title={post.title}
											date={post.createdAt}
											src={post.image}
											avatar={post.author.avatar}
											style={CSS.main().post}
											onClick={() =>
												history.push(`${ROUTES.POST}/${post.slug}`)
											}
										/>
									</FlexBox>
							  ))
						: breakPoint >= BREAK.smartphone_md
						? Array(10)
								.fill(<CustomPostSkeleton />)
								.map((post) => post)
						: Array(10)
								.fill(<SmallPostSkeleton />)
								.map((post) => post)}
					{breakPoint >= BREAK.smartphone_md ? (
						<CustomPostSkeleton />
					) : (
						<SmallPostSkeleton />
					)}
				</Grid>
				{useMediaQuery(theme.breakpoints.up("lg")) && (
					<Grid item={true} lg={4}>
						Admin Dashboard
					</Grid>
				)}
			</Grid>
		</section>
	);
}

const mapStateToProps = (state) => ({
	posts: state.post.posts,
});

export default connect(mapStateToProps, null)(PaginationPostsSection);
