import React, { useContext } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import DefaultBlogContainer from "./default";
import { UtilityContext } from "../../../contexts/index";
import * as ROUTES from "../../../constants/route";
import * as BREAK from "../../../constants/breakpoint";
import { DefaultPostSkeleton } from "../skeleton";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

function CustomPostSkeleton({ itemStyle, ...restProps }) {
	return (
		<Grid container spacing={2} {...restProps}>
			<Grid item={true} xs={12} lg={6} style={itemStyle}>
				<DefaultPostSkeleton />
			</Grid>
			<Grid item={true} xs={12} lg={6} style={itemStyle}>
				<DefaultPostSkeleton />
			</Grid>
		</Grid>
	);
}

//TODO fetch data completely then redirecting
function PaginationPostsSection({ ...props }) {
	const { history, breakPoint } = useContext(UtilityContext);

	const cond = breakPoint <= BREAK.smartphone_md - 100;

	return (
		<section>
			<Grid container spacing={2}>
				{props.posts.length !== 0 ? (
					props.posts.slice(3).map((post) => (
						<Grid item={true} xs={12} lg={6}>
							<DefaultBlogContainer
								key={post._id}
								author={post.author.username}
								category={post.category.title}
								title={
									post.title.length > 28
										? `${post.title.substring(0, 28)}...`
										: post.title
								}
								src={post.image}
								body={post.description}
								date={post.createdAt}
								avatar={post.author.avatar}
								style={{
									...CSS.main().post,
									margin: "5px 0px",
									maxWidth: "500px",
								}}
								onClick={() => history.push(`${ROUTES.POST}/${post.slug}`)}
							/>
						</Grid>
					))
				) : (
					<CustomPostSkeleton
						style={{
							marginBottom: cond && "20px",
						}}
					/>
				)}
			</Grid>
			<CustomPostSkeleton
				itemStyle={{
					padding: cond && 0,
					marginBottom: cond && "20px",
				}}
			/>
		</section>
	);
}

const mapStateToProps = (state) => ({
	posts: state.post.posts,
});

export default connect(mapStateToProps, null)(PaginationPostsSection);
