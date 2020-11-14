import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { style } from "./style/newPost.style.js";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FlexBox, IconLinkButton } from "../../styled-elements";
import Dropzone from "react-dropzone";
import QuillEditor from "../../containers/editor/quillEditor";

function NewPostPage() {
	const [content, setContent] = useState({
		title: "",
		description: "",
		categories: "",
		image: "",
	});

	const handleFilesChange = () => {};

	const handleSubmit = (e) => {
		console.log(content);
		e.preventDefault();
	};

	return (
		<div style={{ padding: "0px 10px" }}>
			<React.Fragment>
				<FlexBox
					justify="space-between"
					style={{ marginTop: "30px", padding: "0px 15px" }}
				>
					<InputBase
						multiline
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
						title="Post"
						place="bottom"
						onClick={handleSubmit}
						disabled={content.description.length < 10 ? true : false}
					/>
				</FlexBox>
				<QuillEditor
					placeholder={"Start Posting Something..."}
					onEditorChange={(e) => setContent({ ...content, description: e })}
					onFilesChange={handleFilesChange}
				/>
			</React.Fragment>
		</div>
	);
}

export default NewPostPage;
