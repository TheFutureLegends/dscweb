import React, { useContext } from "react";
import Dropzone from "react-dropzone";
import { Button } from "@material-ui/core";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileContext } from "../../contexts/FileContext";

function FileUpload({ ...restProps }) {
	const { content, setContent } = useContext(FileContext);

	return (
		<Dropzone
			className="ignore"
			onDrop={(acceptedFiles) => {
				setContent({
					...content,
					imageFile: acceptedFiles.map((file) =>
						Object.assign(file, {
							preview: URL.createObjectURL(file),
						})
					),
				});
			}}
			accept="image/*"
			multiple={false}
			{...restProps}
		>
			{({ getRootProps, getInputProps }) => {
				return (
					<section>
						<div {...getRootProps()} style={{ marginTop: "10px" }}>
							<input {...getInputProps()} />
							<Button
								variant="outlined"
								fullWidth
								style={{
									margin: "10px 0px",
									padding: "20px",
									color: "#444444",
									border: `1px dashed #444444`,
								}}
							>
								<FontAwesomeIcon icon={faImage} />
								&nbsp; Select an image or drop it here
							</Button>
						</div>
						{content.imageFile.length !== 0 && (
							<img
								src={content.imageFile[0].preview}
								alt={content.imageFile[0].preview}
								style={{
									width: "100%",
								}}
							/>
						)}
					</section>
				);
			}}
		</Dropzone>
	);
}

export default FileUpload;
