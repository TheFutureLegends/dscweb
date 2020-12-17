import React, { useContext } from "react";
import { Paper } from "@material-ui/core";
import { FlexBox, IconLinkButton } from "../../components/styled-elements";
import DefaultBlogContainer from "./blog/default";
import { ModalContext, UtilityContext } from "../../contexts/index";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactHTMLParser from "react-html-parser";
import { theme } from "../../global-theme";
import moment from "moment";
import { connect } from "react-redux";
import { postNewPost } from "../../core/redux/actions/post.action";

function PreviewPanel({ ...props }) {
  const { content, handleClose } = useContext(ModalContext);
  /**
   * const { history } = useContext(UtilityContext);
   */

  const { history } = useContext(UtilityContext);

  const handleSubmit = async () => {
    props.postNewPost(content, history);
  };

  return (
    <FlexBox direction="column" style={{ height: "100%" }}>
      <Paper
        style={{
          backgroundColor: theme.context.dark,
          padding: "20px",
        }}
      >
        <FlexBox direction="column" style={{ maxWidth: "360px" }}>
          <Paper style={{ backgroundColor: "unset", padding: "10px" }}>
            <FlexBox.FlexBasis width="20px" />
            <FlexBox
              style={{ height: "100%" }}
              direction="row"
              justify="flex-start"
            >
              <FlexBox direction="row">
                <FlexBox.FlexBasis width="10px" />
                <IconLinkButton
                  icon={faTimes}
                  onClick={handleClose}
                  id="close"
                  bgColor={theme.colors.airbnb.__primary}
                  title="Close"
                />
                <FlexBox.FlexBasis width="10px" />
                <IconLinkButton
                  icon={faPaperPlane}
                  onClick={handleSubmit}
                  bgColor={theme.colors.secondary}
                  id="post"
                  title="Create new post"
                />
                <FlexBox.FlexBasis width="10px" />
              </FlexBox>
            </FlexBox>
          </Paper>
          <DefaultBlogContainer
            style={{ boxShadow: theme.colors.dark.__elevation_high }}
            src={content.imageFile}
            // src={content.imageFile[0].preview}
            body={ReactHTMLParser(content.description)}
            title={content.title}
            author={props.user.credential.username}
            avatar={props.user.credential.avatar}
            category=""
            date={moment(new Date().toISOString()).format("MMM-DD YYYY")}
          />
        </FlexBox>
      </Paper>
    </FlexBox>
  );
}

const mapDispatchToProps = { postNewPost };

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPanel);
