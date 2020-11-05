import React, { useContext, useEffect, useState } from "react";
import * as CSS from "./styles/blog.style.js";
import {
	Typography,
	Divider,
	useTheme,
	useMediaQuery,
	Grid,
} from "@material-ui/core";
import { UtilityContext } from "../../../contexts/UtilityContext.js";
import * as BREAK from "../../../constants/breakpoint";
import MostPopularSection from "../../containers/blog/mostPopularSection";
import LatestUpdateSection from "../../containers/blog/latestUpdateSection";
import AllPostSection from "../../containers/blog/allPostSection";
import {
	getMostPopularPosts,
	getLatestPost,
	getPostsWithPagination,
} from "../../../core/redux/actions/post.action";
import { connect } from "react-redux";

var offset = 1000;
function BlogPage({ ...props }) {
	const { breakPoint } = useContext(UtilityContext);
	const theme = useTheme();
	const [page, setPage] = useState(1);

	props.getMostPopularPosts(5, false);
	props.getLatestPost(5, true);

	useEffect(() => {
		props.getPostsWithPagination(10 * page, 1);
	}, [props, page]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > offset) {
				offset += 2000;
				setPage((page) => (page += 1));
			}
		};
		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<Grid container spacing={3}>
			<Grid item={true} xs={2}>
				Hello World
			</Grid>
			<Grid item={true} xs={8} key="feeds-section">
				<div
					style={{
						...CSS.main(),
						padding: `30px ${breakPoint >= BREAK.tablet_md ? "150px" : "20px"}`,
					}}
				>
					{useMediaQuery(theme.breakpoints.up("sm")) && (
						<React.Fragment>
							<Typography variant="h5" style={CSS.main().header}>
								Good Evening, Tin Quan Chung
							</Typography>
							<Divider style={CSS.main().divider} />
						</React.Fragment>
					)}
					<MostPopularSection />
					<Divider style={{ ...CSS.main().divider, marginTop: "30px" }} />
					<LatestUpdateSection />
					<Divider style={{ ...CSS.main().divider, margin: "30px 0px" }} />
					<AllPostSection page={page} />
				</div>
			</Grid>
			<Grid item={true} xs={2}>
				Hello World
			</Grid>
		</Grid>
	);
}

const mapDispatchToProps = {
	getMostPopularPosts,
	getLatestPost,
	getPostsWithPagination,
};

export default connect(null, mapDispatchToProps)(BlogPage);
