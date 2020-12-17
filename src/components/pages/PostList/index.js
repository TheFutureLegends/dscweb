import React from "react";
import { connect } from "react-redux";
import { getListOfPost, deletePost } from "../../../core/redux/actions/post.action";
import MainPostListSection from "../../containers/posts/mainPostListSection";

function PostList({ ...props }) {
  props.getListOfPost();

  return <MainPostListSection />;
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  getListOfPost,
  deletePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
