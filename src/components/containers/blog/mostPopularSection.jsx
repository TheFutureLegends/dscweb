import React from "react";
import MainBlogSection from "./mainSection";
import { connect } from "react-redux";

function MostPopularBlogs({ ...props }) {
	return (
		<MainBlogSection
			posts={props.posts}
			header="Most Popular Posts"
			{...props}
		/>
	);
}

const mapStateToProps = (state) => ({
	posts: state.post.mostPopularPosts,
});

export default connect(mapStateToProps, null)(MostPopularBlogs);
