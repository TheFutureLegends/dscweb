import React from "react";
import { Blog, FlexBox } from "../../../styled-elements";
import { Skeleton } from "@material-ui/lab";

function DefaultPostSkeleton({ hasImage = true, ...restProps }) {
	return (
		<Blog {...restProps}>
			{hasImage === true && (
				<Blog.PictureWrapper>
					<Skeleton
						animation="wave"
						variant="rect"
						width={"100%"}
						height={"100%"}
					/>
				</Blog.PictureWrapper>
			)}

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
				<Skeleton animation="wave" variant="text" width={"100%"} height={20} />
			</Blog.MetaSkeleton>
			<Blog.Header variant="h2">
				<Skeleton animation="wave" variant="text" width={"100%"} height={30} />
			</Blog.Header>
			<Blog.SubHeader
				variant="subtitle1"
				limit={100}
				text={Array(3)
					.fill(
						<Skeleton
							animation="wave"
							variant="text"
							width={"100%"}
							height={20}
						/>
					)
					.map((skeleton) => skeleton)}
			/>
			<FlexBox justify="space-between" style={{ marginTop: "50px" }}>
				<Blog.Text>
					<Skeleton animation="wave" variant="text" width={150} height={20} />
				</Blog.Text>
				<Blog.Link to="#">
					<Skeleton animation="wave" variant="text" height={20} width={50} />
				</Blog.Link>
			</FlexBox>
		</Blog>
	);
}

export default DefaultPostSkeleton;
