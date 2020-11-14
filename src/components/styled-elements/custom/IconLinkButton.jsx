import React from "react";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "../index";
import { theme } from "../../../global-theme";

function IconLinkButton({
	icon,
	id,
	title,
	place,
	bgColor,
	color,
	...restProps
}) {
	return (
		<React.Fragment>
			<IconButton
				style={{
					...restProps.style,
					fontSize: "20px",
					width: "40px",
					height: "40px",
					margin: "0px 5px",
					color: color ? color : theme.colors.dark.fb.__fb_primary_text,
					backgroundColor: bgColor
						? bgColor
						: theme.colors.dark.fb.__fb_light_gray,
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
		</React.Fragment>
	);
}

export default IconLinkButton;
