import React, { useEffect } from "react";
import * as CSS from "./styles/blog.style.js";
import { Typography, Divider, useTheme } from "@material-ui/core";
import MostPopularSection from "../../containers/blog/mostPopularSection";
import LatestUpdateSection from "../../containers/blog/latestUpdateSection";
import AllPostSection from "../../containers/blog/allPostSection";
import { MUIMediaQuery } from "../../styled-elements";
import {
	getMostPopularPosts,
	getLatestPost,
	getPostsWithPagination,
} from "../../../core/redux/actions/post.action";
import { connect } from "react-redux";

var offset = 1000;
var page = 1;
function BlogPage({ ...props }) {
	const theme = useTheme();

	props.getMostPopularPosts(5, false);
	props.getLatestPost(5, true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > offset) {
				offset += 2000;
				page += 1;
				props.getPostsWithPagination(10 * page, 1);
			}
		};
		window.addEventListener("scroll", handleScroll);
	}, [props]);

	return (
		<div
			style={{
				...CSS.main(),
				padding: `30px 20px`,
			}}
		>
			<MUIMediaQuery option={theme.breakpoints.up("sm")}>
				<React.Fragment>
					<Typography variant="h5" style={CSS.main().header}>
						Good Evening, Tin Quan Chung
					</Typography>
					<Divider style={CSS.main().divider} />
				</React.Fragment>
			</MUIMediaQuery>
			<MostPopularSection />
			<Divider style={{ ...CSS.main().divider, marginTop: "30px" }} />
			<LatestUpdateSection />
			<Divider style={{ ...CSS.main().divider, margin: "30px 0px" }} />
			<AllPostSection />
		</div>
	);
}

const mapDispatchToProps = {
	getMostPopularPosts,
	getLatestPost,
	getPostsWithPagination,
};

export default connect(null, mapDispatchToProps)(BlogPage);
