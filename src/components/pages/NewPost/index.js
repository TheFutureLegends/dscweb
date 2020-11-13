import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { style } from "./style/newPost.style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FlexBox, IconLinkButton } from "../../styled-elements";
import { Formik } from "formik";
import QuillEditor from "../../containers/editor/quillEditor";

function NewPostPage() {
	const [content, setContent] = useState({
		title: "",
		description: "",
		categories: "",
		image: "",
	});

	const handleFilesChange = () => {};

	return (
		<div style={{ padding: "0px 10px" }}>
			<Formik
				initialValues={{ content: "" }}
				onSubmit={(values) => {
					//TODO dispatch post
					console.log("Check");
				}}
				validateOnBlur={false}
				validateOnChange={false}
			>
				{({ values, errors, handleSubmit }) => (
					<React.Fragment>
						<FlexBox
							justify="space-between"
							style={{ marginTop: "30px", padding: "0px 18px" }}
						>
							<InputBase
								multiline
								style={style.input.title}
								placeholder="Title"
								inputProps={{ "aria-label": "title" }}
							/>
							<FlexBox.FlexBasis width="20px" />
							<IconLinkButton
								icon={faPaperPlane}
								id="post_button"
								title="Post"
								place="bottom"
								disabled={content.description.length < 10 ? true : false}
							/>
						</FlexBox>

						<QuillEditor
							placeholder={"Start Posting Something..."}
							onEditorChange={(e) => setContent({ ...content, description: e })}
							onFilesChange={handleFilesChange}
						/>
					</React.Fragment>
				)}
			</Formik>
		</div>
	);
}

export default NewPostPage;
