import React from "react";
import { Card, CardHeader, IconButton, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import * as CSS from "../../pages/Home/styles/home.style";

function EventCard({ header, date, src, ...restProps }) {
	return (
		<Card style={CSS.eventSection().card} {...restProps}>
			<CardHeader
				action={
					<IconButton aria-label="Schedule">
						<FontAwesomeIcon icon={faEllipsisV} />
					</IconButton>
				}
				title={
					<Typography variant="h5" style={CSS.eventSection().card.header}>
						{header}
					</Typography>
				}
				subheader={
					<Typography variant="h5" style={CSS.eventSection().card.meta}>
						{date}
					</Typography>
				}
			/>
			<div style={CSS.eventSection(src).card.picture} />
		</Card>
	);
}

export default EventCard;
