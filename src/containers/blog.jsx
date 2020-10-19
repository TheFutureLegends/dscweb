import React from "react";
import { Blog, FlexBox } from "../components";
import { Grid } from "@material-ui/core";
import * as ASSETS from "../constants/asset";
import DefaultBlogContainer from "./blog/default";

function BlogContainer() {
	return (
		<Grid container spacing={4}>
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
			<Grid item={true} xs={4}>
				<FlexBox direction="column">
					<Blog size="small">Hi</Blog>
				</FlexBox>
			</Grid>
		</Grid>
	);
}

export default BlogContainer;
