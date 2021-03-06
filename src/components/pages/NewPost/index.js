import React, { useState } from "react";
import { InputBase, Modal, Backdrop, Fade } from "@material-ui/core";
import { style } from "./style/newPost.style.js";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FlexBox, IconLinkButton } from "../../styled-elements";
import { PreviewPanel } from "../../containers";
// import { FileUpload } from "../../containers";
import { ModalContext } from "../../../contexts/index";
// import { FileContext } from "../../../contexts/index";
import QuillEditor from "../../containers/editor/quillEditor";

function NewPostPage() {
  const [content, setContent] = useState({
    title: "",
    description: "",
    category: "",
    // imageFile: [],
    imageFile: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const handleFilesChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(content);
    if (content.description.length >= 20 && content.imageFile.length > 0) {
      setIsSubmit(true);
    }
  };

  const handleClose = () => {
    setIsSubmit(false);
  };

  return (
    <div style={{ padding: "30px 10px" }}>
      <FlexBox justify="space-between" style={{ padding: "0px 15px" }}>
        <InputBase
          autoFocus
          style={
            content.title.length !== 0
              ? style.input.titleChange
              : style.input.title
          }
          placeholder="Title"
          inputProps={{ "aria-label": "title" }}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
        />
        <FlexBox.FlexBasis width="20px" />
        <IconLinkButton
          icon={faPaperPlane}
          id="post_button"
          title={
            content.description.length < 20
              ? "You must write something"
              : content.imageFile.length <= 0
              ? "You must enter an image link"
              : "Preview"
          }
          place="bottom"
          onClick={(e) => handleSubmit(e)}
        />
      </FlexBox>
      {/* <FileContext.Provider value={{ content, setContent }}>
        <FileUpload />
      </FileContext.Provider> */}
      <FlexBox.FlexBasis height="20px" />
      <FlexBox
        justify="space-between"
        style={{ marginTop: "20px", padding: "0px 15px" }}
      >
        <InputBase
          autoFocus
          style={
            content.title.length !== 0
              ? style.input.titleChange
              : style.input.title
          }
          placeholder="Image Link"
          inputProps={{ "aria-label": "imageFile" }}
          onChange={(e) =>
            setContent({ ...content, imageFile: e.target.value })
          }
        />
      </FlexBox>
      <QuillEditor
        style={{ color: "white" }}
        placeholder={"Start Posting Something..."}
        onEditorChange={(e) => setContent({ ...content, description: e })}
        onFilesChange={handleFilesChange}
      />
      <ModalContext.Provider value={{ content, setContent, handleClose }}>
        <Modal
          open={isSubmit}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 300,
          }}
        >
          <Fade in={isSubmit}>
            <PreviewPanel />
          </Fade>
        </Modal>
      </ModalContext.Provider>
    </div>
  );
}

export default NewPostPage;
