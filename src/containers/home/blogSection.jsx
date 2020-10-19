import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { FlexBox, Blog } from "../../components";
import { AuthorItemWithPosts } from "../../components";
import DefaultBlogContainer from "../blog/default";
import * as CSS from "../../styles/home.style.js";
import * as BREAK from "../../constants/breakpoint";
import * as ASSETS from "../../constants/asset";

function EventContainer() {
	return (
		<section style={CSS.eventSection.main}>
			<Grid container spacing={2}>
				<Grid item={true} lg={9} xs={12} md={8} sm={12}>
					<FlexBox direction="column">
						<Typography variant="h2" style={CSS.eventSection.header}>
							Lastest Blog Post
						</Typography>
						<Paper style={CSS.eventSection.paper.blog}>
							<Grid container spacing={4}>
								<Grid item={true} xs={12} sm={8} md={8} lg={4}>
									<DefaultBlogContainer
										author="Tin Quan Chung"
										category="Web Development"
										title="21 React UI Component Libraries You Should Start Using from Today"
										body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
						aliquam vero nulla quibusdam obcaecati, voluptatum qui alias
						blanditiis veritatis praesentium aspernatur, amet sed cumque sit,
						provident quidem consectetur! Dolorum, cumque?"
										date="2001-11-01"
										src={ASSETS.BLOG_PICTURE}
										avatar={ASSETS.AVATAR}
										to="#"
									/>
								</Grid>
								{useMediaQuery(`(min-width:${BREAK.desktop_sm + 100}px)`) && (
									<Grid item={true} xs={4}>
										<DefaultBlogContainer
											author="Tin Quan Chung"
											category="Web Development"
											title="21 React UI Component Libraries You Should Start Using from Today"
											body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
						aliquam vero nulla quibusdam obcaecati, voluptatum qui alias
						blanditiis veritatis praesentium aspernatur, amet sed cumque sit,
						provident quidem consectetur! Dolorum, cumque?"
											date="2001-11-01"
											src={ASSETS.BLOG_PICTURE}
											avatar={ASSETS.AVATAR}
											to="#"
										/>
									</Grid>
								)}

								<Grid item={true} xs={4}>
									<FlexBox direction="column" style={{ height: "100%" }}>
										<Blog size="small">Hi</Blog>
									</FlexBox>
								</Grid>
							</Grid>
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
