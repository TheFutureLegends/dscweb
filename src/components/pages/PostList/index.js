import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import { getListOfPost } from "../../../core/redux/actions/post.action";
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
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
