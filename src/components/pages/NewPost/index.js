import React, { useState } from "react";
import { Button, InputBase } from "@material-ui/core";
import { style } from "./style/newPost.style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FlexBox } from "../../styled-elements";
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
							<Button
								variant="contained"
								color="primary"
								onClick={handleSubmit}
								style={style.button.submit}
							>
								Post &nbsp;
								<FontAwesomeIcon icon={faPaperPlane} />
							</Button>
						</FlexBox>

						<QuillEditor
							placeholder={"Start Posting Something..."}
							onEditorChange={(e) => setContent(e)}
							onFilesChange={handleFilesChange}
						/>
					</React.Fragment>
				)}
			</Formik>
		</div>
	);
}

export default NewPostPage;
