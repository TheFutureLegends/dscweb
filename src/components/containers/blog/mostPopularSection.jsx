import React from "react";
import MainBlogSection from "../test/mainSection"; //TODO routing to the main comp
import { connect } from "react-redux";

function MostPopularBlogs({ ...props }) {
	return <MainBlogSection posts={props.posts} header="Most Popular Posts" />;
}

const mapStateToProps = (state) => ({
	posts: state.post.mostPopularPosts,
});

export default connect(mapStateToProps, null)(MostPopularBlogs);
