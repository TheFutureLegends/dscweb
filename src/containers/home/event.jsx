import React from "react";
import * as CSS from "../../styles/home.style.js";
import { Grid, Paper, Typography } from "@material-ui/core";
import { FlexBox } from "../../components";
import * as ASSETS from "../../constants/asset";
import { AuthorItemWithPosts } from "../../components";
import { BlogContainer } from "../index";

function EventContainer() {
	return (
		<section style={CSS.eventSection.main}>
			<Grid container spacing={4}>
				<Grid item={true} lg={9} xs={12} md={8} sm={12}>
					<FlexBox direction="column">
						<Typography variant="h2" style={CSS.eventSection.header}>
							Lastest Blog Post
						</Typography>
						<Paper style={CSS.eventSection.paper.blog}>
							<BlogContainer />
						</Paper>
					</FlexBox>
				</Grid>
				<Grid item={true} lg={3} xs={12} md={4} sm={12}>
					<FlexBox direction="column">
						<Typography variant="h2" style={CSS.eventSection.header}>
							Top Authors
						</Typography>
						<Paper style={CSS.eventSection.paper.ranking}>
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
			</Grid>
		</section>
	);
}

export default EventContainer;
