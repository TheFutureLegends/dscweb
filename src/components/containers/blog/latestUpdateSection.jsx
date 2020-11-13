import React from "react";
import MainSection from "./mainSection";
import { connect } from "react-redux";

function LatestUpdateSection({ ...props }) {
	return (
		<MainSection posts={props.posts} header="Latest Update Posts" {...props} />
	);
}

const mapStateToProps = (state) => ({
	posts: state.post.latestPosts,
});

export default connect(mapStateToProps, null)(LatestUpdateSection);
