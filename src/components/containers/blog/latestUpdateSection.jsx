import React from "react";
import MainSection from "../test/mainSection"; //TODO routing to the main comp
import { connect } from "react-redux";

function LatestUpdateSection({ ...props }) {
	return <MainSection posts={props.posts} header="Latest Update Posts" />;
}

const mapStateToProps = (state) => ({
	posts: state.post.latestPosts,
});

export default connect(mapStateToProps, null)(LatestUpdateSection);
