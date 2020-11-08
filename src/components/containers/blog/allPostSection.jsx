import React, { useContext } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import DefaultBlogContainer from "./default";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import * as ROUTES from "../../../constants/route";
import { DefaultPostSkeleton } from "../skeleton";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

function CustomPostSkeleton() {
	return (
		<Grid container spacing={2}>
			<Grid item={true} xs={12} lg={6}>
				<DefaultPostSkeleton />
			</Grid>
			<Grid item={true} xs={12} lg={6}>
				<DefaultPostSkeleton />
			</Grid>
		</Grid>
	);
}

//TODO fetch data completely then redirecting
function PaginationPostsSection({ ...props }) {
	const { history } = useContext(UtilityContext);

	return (
		<section>
			<Grid container spacing={2}>
				{props.posts.length !== 0 ? (
					props.posts.slice(4).map((post) => (
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
					<CustomPostSkeleton style={{ marginBottom: "20px" }} />
				)}
			</Grid>
			<CustomPostSkeleton />
		</section>
	);
}

const mapStateToProps = (state) => ({
	posts: state.post.posts,
});

export default connect(mapStateToProps, null)(PaginationPostsSection);
