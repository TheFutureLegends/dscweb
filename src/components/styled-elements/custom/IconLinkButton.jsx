import React from "react";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "../index";
import { theme } from "../../../global-theme";

function IconLinkButton({ icon, id, title, place, ...restProps }) {
	return (
		<>
			<IconButton
				style={{
					fontSize: "20px",
					width: "40px",
					height: "40px",
					margin: "0px 5px",
					color: theme.colors.dark.fb.__fb_primary_text,
					backgroundColor: theme.colors.dark.fb.__fb_light_gray,
				}}
				data-for={id}
				data-tip
				{...restProps}
			>
				<FontAwesomeIcon icon={icon} />
			</IconButton>
			<Tooltip id={id} place={place} effect="solid">
				{title}
			</Tooltip>
		</>
	);
}

export default IconLinkButton;
