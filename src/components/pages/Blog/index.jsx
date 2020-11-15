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
import faker from "faker";

var offset = 1000;
var page = 1;
function BlogPage({ ...props }) {
	const theme = useTheme();
	const currentHour = new Date().getHours();
	let greeting = "";
	switch (true) {
		case currentHour < 4 && currentHour > 22:
			greeting = "🌙 It's late, you should sleep.";
			break;
		case currentHour >= 4 && currentHour < 12:
			greeting = "🌞 Good Morning.";
			break;
		case currentHour >= 12 && currentHour < 17:
			greeting = "🌞 Good Afternoon.";
			break;
		default:
			greeting = "🌛 Evening.";
			break;
	}

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
						{greeting} &nbsp;
						{props.user.authenticated
							? props.user.credential.username
							: faker.name.jobTitle()}
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

const mapStateToProps = (state) => ({
	user: state.user,
});

const mapDispatchToProps = {
	getMostPopularPosts,
	getLatestPost,
	getPostsWithPagination,
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
