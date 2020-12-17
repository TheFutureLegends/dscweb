import React from "react";
import MaterialTableLayout from "../../containers/table/materialTableLayout";
import { connect } from "react-redux";
import { deletePost } from "../../../core/redux/actions/post.action";

function MainPostListSection({ ...props }) {
  return (
    <MaterialTableLayout
      title="List of your post"
      data={props.postList}
      tableHeader={["Title", "Description"]}
      module="post"
      {...props}
    />
  );
}

const mapDispatchToProps = { deletePost };

const mapStateToProps = (state) => ({
  postList: state.post.postList,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPostListSection);
