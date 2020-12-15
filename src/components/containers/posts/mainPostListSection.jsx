import React from "react";
import MainTableSection from "../../containers/table/mainTableSection";
import { connect } from "react-redux";

function MainPostListSection({ ...props }) {
  return (
    <MainTableSection
      title="List of your post"
      data={props.postList}
      tableHeader={["Title", "Description", "Action"]}
      {...props}
    />
  );
}

const mapStateToProps = (state) => ({
  postList: state.post.postList,
});

export default connect(mapStateToProps, null)(MainPostListSection);
