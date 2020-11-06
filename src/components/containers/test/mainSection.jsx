import React, { useContext } from "react";
import * as CSS from "../../pages/Blog/styles/blog.style.js";
import { Grid, Typography } from "@material-ui/core";
import DefaultBlogContainer from "../blog/default";
import SmallBlogContainer from "../blog/small";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import { FlexBox } from "../../styled-elements";
import { DefaultPostSkeleton, SmallPostSkeleton } from "../skeleton";
import * as ROUTES from "../../../constants/route";

function MainBlogSection__({ header, posts, ...props }) {
	const { history, location } = useContext(UtilityContext);

	return (
		<section {...props}>
			{location.pathname !== "/" && (
				<Typography variant="h6" style={CSS.main().title}>
					{header}
				</Typography>
			)}
			<Grid container spacing={2}>
				<Grid
					item={true}
					xs={12}
					sm={6}
					md={6}
					lg={6}
					key="default_container_1"
				>
					{posts[0] ? (
						<DefaultBlogContainer
							key={posts[0]._id}
							author={posts[0].author.username}
							category={posts[0].category.title}
							title={posts[0].title}
							body={posts[0].description}
							date={posts[0].createdAt}
							src={posts[0].image}
							avatar={posts[0].author.avatar}
							style={CSS.main().post}
							onClick={() => history.push(`${ROUTES.POST}/${posts[0].slug}`)}
						/>
					) : (
						<DefaultPostSkeleton />
					)}
				</Grid>
				<Grid item={true} xs={12} md={6} sm={6} lg={6}>
					<FlexBox
						direction="column"
						justify="space-between"
						style={{ height: "100%", width: "100%" }}
					>
						{posts[0]
							? posts
									.slice(1)
									.map((post) => (
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
									))
							: Array(4)
									.fill({})
									.map(() => <SmallPostSkeleton />)}
					</FlexBox>
				</Grid>
			</Grid>
		</section>
	);
}

export default MainBlogSection__;
