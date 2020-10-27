import React from "react";
import { Blog, FlexBox } from "../../../styled-elements";
import { Skeleton } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

function SmallPostSkeleton({ ...restProps }) {
	return (
		<Blog {...restProps} container spacing={2} size="small">
			<Grid item={true} xs={8}>
				<Blog.MetaSkeleton
					src={
						<Skeleton
							animation="wave"
							variant="rect"
							width={"100%"}
							height={30}
						/>
					}
				>
					<Skeleton
						animation="wave"
						variant="text"
						width={"100%"}
						height={20}
					/>
				</Blog.MetaSkeleton>
				<Blog.Header variant="h2">
					<Skeleton
						animation="wave"
						variant="text"
						width={"100%"}
						height={20}
					/>
				</Blog.Header>
				<Blog.SubHeader
					variant="subtitle1"
					style={{ fontSize: "10px" }}
					limit={100}
					text={
						<Skeleton
							animation="wave"
							variant="text"
							width={"100%"}
							height={15}
						/>
					}
				/>
				<FlexBox justify="space-between" style={{ marginTop: "10px" }}>
					<Blog.Text>
						<Skeleton animation="wave" variant="text" width={100} height={13} />
					</Blog.Text>
					<Blog.Link to={""}>
						<Skeleton animation="wave" variant="text" width={30} height={13} />
					</Blog.Link>
				</FlexBox>
			</Grid>
			<Grid item={true} xs={4}>
				<Blog.PictureWrapper className="__small_blog_picture">
					<Skeleton
						animation="wave"
						variant="rect"
						width={"100%"}
						height={"100%"}
					/>
				</Blog.PictureWrapper>
			</Grid>
		</Blog>
	);
}

export default SmallPostSkeleton;
