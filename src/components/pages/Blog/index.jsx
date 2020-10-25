import React, { useContext } from "react";
import * as CSS from "./styles/blog.style.js";
import {
	Typography,
	Grid,
	Divider,
	useTheme,
	useMediaQuery,
} from "@material-ui/core";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import * as BREAK from "../../../constants/breakpoint";
import DefaultBlogContainer from "../../containers/blog/default";
import SmallBlogContainer from "../../containers/blog/small";
import { mock_data } from "../../../constants/mockData";
import { FlexBox } from "../../styled-elements";

function BlogPage() {
	const { breakPoint, history } = useContext(UtilityContext);
	const theme = useTheme();
	const handlePostClick = (to) => {
		history.push(to);
	};

	return (
		<div
			style={{
				...CSS.main(),
				padding: `30px ${breakPoint >= BREAK.tablet_md ? "150px" : "30px"}`,
			}}
		>
			<section>
				{useMediaQuery(theme.breakpoints.up("sm")) && (
					<React.Fragment>
						<Typography variant="h5" style={CSS.main().header}>
							Good Evening, Tin Quan Chung
						</Typography>
						<Divider style={CSS.main().divider} />
					</React.Fragment>
				)}

				<Typography variant="h6" style={CSS.main().title}>
					Most popular posts
				</Typography>
				<Grid container spacing={3}>
					<Grid item={true} xs={12} sm={6} md={4} lg={4}>
						<DefaultBlogContainer
							author={mock_data[0].author}
							category={mock_data[0].category}
							title={mock_data[0].title}
							body={mock_data[0].body}
							date={mock_data[0].date}
							src={mock_data[0].src}
							avatar={mock_data[0].avatar}
							to={mock_data[0].to}
							style={CSS.main().post}
							onClick={() => handlePostClick(mock_data[0].to)}
						/>
					</Grid>
					{useMediaQuery(theme.breakpoints.up("md")) && (
						<Grid item={true} md={4}>
							<DefaultBlogContainer
								author={mock_data[1].author}
								category={mock_data[1].category}
								title={mock_data[1].title}
								body={mock_data[1].body}
								date={mock_data[1].date}
								src={mock_data[1].src}
								avatar={mock_data[1].avatar}
								to={mock_data[1].to}
								style={CSS.main().post}
								onClick={() => handlePostClick(mock_data[0].to)}
							/>
						</Grid>
					)}
					{useMediaQuery(theme.breakpoints.up("xs")) && (
						<Grid item={true} md={4} sm={6} lg={4}>
							<FlexBox
								direction="column"
								justify="space-between"
								style={{ height: "100%" }}
							>
								{mock_data.slice(2).map((post, index) => (
									<SmallBlogContainer
										key={index}
										author={post.author}
										category={post.category}
										title={post.title}
										date={post.date}
										src={post.src}
										avatar={post.avatar}
										to={post.to}
										style={CSS.main().post}
										onClick={() => handlePostClick(post.to)}
									/>
								))}
							</FlexBox>
						</Grid>
					)}
				</Grid>
				<Divider style={{ ...CSS.main().divider, marginTop: "30px" }} />
				<Typography
					variant="h6"
					style={{
						...CSS.main().title,
					}}
				>
					Latest Update Posts
				</Typography>
				<Grid container spacing={3}>
					<Grid item={true} xs={12} sm={6} md={4} lg={4}>
						<DefaultBlogContainer
							author={mock_data[0].author}
							category={mock_data[0].category}
							title={mock_data[0].title}
							body={mock_data[0].body}
							date={mock_data[0].date}
							src={mock_data[0].src}
							avatar={mock_data[0].avatar}
							to={mock_data[0].to}
							style={CSS.main().post}
							onClick={() => handlePostClick(mock_data[0].to)}
						/>
					</Grid>
					{useMediaQuery(theme.breakpoints.up("md")) && (
						<Grid item={true} md={4}>
							<DefaultBlogContainer
								author={mock_data[1].author}
								category={mock_data[1].category}
								title={mock_data[1].title}
								body={mock_data[1].body}
								date={mock_data[1].date}
								src={mock_data[1].src}
								avatar={mock_data[1].avatar}
								to={mock_data[1].to}
								style={CSS.main().post}
								onClick={() => handlePostClick(mock_data[0].to)}
							/>
						</Grid>
					)}
					{useMediaQuery(theme.breakpoints.up("xs")) && (
						<Grid item={true} md={4} sm={6} lg={4}>
							<FlexBox
								direction="column"
								justify="space-between"
								style={{ height: "100%" }}
							>
								{mock_data.slice(2).map((post, index) => (
									<SmallBlogContainer
										key={index}
										author={post.author}
										category={post.category}
										title={post.title}
										date={post.date}
										src={post.src}
										avatar={post.avatar}
										to={post.to}
										style={CSS.main().post}
										onClick={() => handlePostClick(post.to)}
									/>
								))}
							</FlexBox>
						</Grid>
					)}
				</Grid>
				<Divider style={{ ...CSS.main().divider, marginTop: "30px" }} />
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
										onClick={() => handlePostClick(post.to)}
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
										onClick={() => handlePostClick(post.to)}
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
		</div>
	);
}

export default BlogPage;
