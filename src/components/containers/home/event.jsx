import React, { useContext } from "react";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { Grid, Typography } from "@material-ui/core";
import { FlexBox } from "../../styled-elements";
import EventCard from "../event/card";
import * as CSS from "../../pages/Home/styles/home.style";
import * as BREAK from "../../../constants/breakpoint";
import { event_mock_data } from "../../../constants/mockData";
import faker from "faker";

function EventSectionContainer({ ...restProps }) {
	const { breakPoint } = useContext(UtilityContext);
	//FIXME Each child in a list should have a unique "key" prop.
	return (
		<section
			style={CSS.lastSection(breakPoint >= BREAK.desktop_md ? "140px" : "30px")}
			{...restProps}
		>
			<FlexBox direction="column">
				<Typography variant="h2" style={CSS.eventSection().header}>
					Featured Events
				</Typography>
				<Grid
					container
					spacing={3}
					style={{ marginTop: "15px", marginBottom: "15px" }}
				>
					{event_mock_data.map((event) => (
						<Grid item={true} xs={12} md={4} key={faker.random.uuid()}>
							<EventCard
								header={event.header}
								date={event.date}
								src={event.picture}
							/>
						</Grid>
					))}
				</Grid>
			</FlexBox>
		</section>
	);
}

export default EventSectionContainer;
