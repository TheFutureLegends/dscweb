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
import { mock_data } from "../../../constants/mockData";

function BlogPage() {
	const { breakPoint, history } = useContext(UtilityContext);
	const theme = useTheme();
	const handlePostClick = (to) => {
		history.push(to);
	};

	return (
		<div
			style={CSS.main(
				breakPoint >= BREAK.tablet_md ? "30px 150px" : "30px 40px"
			)}
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
				<Grid container spacing={0}>
					<Grid container xs={12} spacing={3}>
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
								onClick={() => handlePostClick(mock_data[0].to)}
							/>
						</Grid>
						{useMediaQuery(theme.breakpoints.up("xs")) && (
							<Grid item={true} sm={6} md={4} lg={4}>
								<DefaultBlogContainer
									author={mock_data[1].author}
									category={mock_data[1].category}
									title={mock_data[1].title}
									body={mock_data[1].body}
									date={mock_data[1].date}
									src={mock_data[1].src}
									avatar={mock_data[1].avatar}
									to={mock_data[1].to}
									onClick={() => handlePostClick(mock_data[0].to)}
								/>
							</Grid>
						)}
						{useMediaQuery(theme.breakpoints.up("md")) && (
							<Grid item={true} md={4}>
								<DefaultBlogContainer
									author={mock_data[2].author}
									category={mock_data[2].category}
									title={mock_data[2].title}
									body={mock_data[2].body}
									date={mock_data[2].date}
									src={mock_data[2].src}
									avatar={mock_data[2].avatar}
									to={mock_data[2].to}
									onClick={() => handlePostClick(mock_data[0].to)}
								/>
							</Grid>
						)}
					</Grid>
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
				<Grid container spacing={0}>
					<Grid container xs={12} spacing={3}>
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
								onClick={() => handlePostClick(mock_data[0].to)}
							/>
						</Grid>
						{useMediaQuery(theme.breakpoints.up("xs")) && (
							<Grid item={true} sm={6} md={4} lg={4}>
								<DefaultBlogContainer
									author={mock_data[1].author}
									category={mock_data[1].category}
									title={mock_data[1].title}
									body={mock_data[1].body}
									date={mock_data[1].date}
									src={mock_data[1].src}
									avatar={mock_data[1].avatar}
									to={mock_data[1].to}
									onClick={() => handlePostClick(mock_data[0].to)}
								/>
							</Grid>
						)}
						{useMediaQuery(theme.breakpoints.up("md")) && (
							<Grid item={true} md={4}>
								<DefaultBlogContainer
									author={mock_data[2].author}
									category={mock_data[2].category}
									title={mock_data[2].title}
									body={mock_data[2].body}
									date={mock_data[2].date}
									src={mock_data[2].src}
									avatar={mock_data[2].avatar}
									to={mock_data[2].to}
									onClick={() => handlePostClick(mock_data[0].to)}
								/>
							</Grid>
						)}
					</Grid>
				</Grid>
			</section>
		</div>
	);
}

export default BlogPage;
