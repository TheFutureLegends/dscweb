import React from "react";
import MainSection from "./mainSection";
import { connect } from "react-redux";

function MostPopularBlogs({ ...props }) {
	return <MainSection posts={props.posts} header="Most Popular Posts" />;
}

const mapStateToProps = (state) => ({
	posts: state.post.mostPopularPosts,
});

export default connect(mapStateToProps, null)(MostPopularBlogs);
