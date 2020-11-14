import React, { useContext } from "react";
import { Paper } from "@material-ui/core";
import { FlexBox, IconLinkButton } from "../../components/styled-elements";
import DefaultBlogContainer from "./blog/default";
import { ModalContext } from "../../contexts/ModalContext";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactHTMLParser from "react-html-parser";
import faker from "faker";
import { theme } from "../../global-theme";
import moment from "moment";

function PreviewPanel() {
	const { content, setContent, handleClose } = useContext(ModalContext);

	const handleSubmit = () => {
		console.log(content);
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
									title="Post"
								/>
								<FlexBox.FlexBasis width="10px" />
							</FlexBox>
						</FlexBox>
					</Paper>
					<DefaultBlogContainer
						style={{ boxShadow: theme.colors.dark.__elevation_high }}
						src={content.imageFile[0].preview}
						body={ReactHTMLParser(content.description)}
						title={content.title}
						author={"Tin Quan Chung"}
						avatar={faker.image.avatar()}
						category=""
						date={moment(new Date().toISOString()).format("MMM-DD YYYY")}
					/>
				</FlexBox>
			</Paper>
		</FlexBox>
	);
}

export default PreviewPanel;
