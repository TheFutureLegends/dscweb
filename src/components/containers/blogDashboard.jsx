import React from "react";
import { Paper, Avatar, Typography, Divider, Grid } from "@material-ui/core";
import { FlexBox } from "../styled-elements";
import { theme } from "../../global-theme";
import { AvatarGroup } from "@material-ui/lab";
import { TagContainer, AuthorWithView, AccordionContainer } from "./index";
import EventCard from "./event/card";
import faker from "faker";
import * as ASSETS from "../../constants/asset";
import { style } from "../styles/sidebar.style.js";

function BlogDashboard() {
	return (
		<FlexBox direction="column" style={style.main}>
			<Paper style={style.card}>
				<FlexBox justify="flex-start">
					<AuthorWithView
						src={faker.image.avatar()}
						alt="TQC"
						views={19273}
						name="Tin Quan Chung"
					/>
				</FlexBox>
			</Paper>
			<AccordionContainer
				style={{ ...style.accordion, backgroundColor: theme.context.dark }}
				header={
					<Typography variant="h6" style={style.header}>
						Categories
					</Typography>
				}
			>
				<TagContainer />
			</AccordionContainer>
			<AccordionContainer
				style={{ ...style.accordion, backgroundColor: theme.context.dark }}
				header={
					<Typography variant="h6" style={style.header}>
						Top Authors
					</Typography>
				}
			>
				<FlexBox direction="column">
					{Array(5).fill(
						<React.Fragment>
							<FlexBox justify="flex-start" style={{ width: "100%" }}>
								<AuthorWithView
									alt="Remy Sharp"
									src={faker.image.avatar()}
									name="Tin Quan Chung"
									views={2020}
								/>
							</FlexBox>
							<Divider style={style.divider} />
						</React.Fragment>
					)}
					<FlexBox justify="space-between" style={style.author_extend}>
						<div style={style.header}>More...</div>
						<AvatarGroup max={4}>
							<Avatar
								alt="Remy Sharp"
								style={style.author_extend.author}
								src={faker.internet.avatar()}
							/>
							<Avatar
								alt="Travis Howard"
								style={style.author_extend.author}
								src={faker.internet.avatar()}
							/>
							<Avatar
								alt="Cindy Baker"
								style={style.author_extend.author}
								src={faker.internet.avatar()}
							/>
							<Avatar
								alt="Agnes Walker"
								style={style.author_extend.author}
								src={faker.internet.avatar()}
							/>
							<Avatar
								alt="Trevor Henderson"
								style={style.author_extend.author}
								src={faker.internet.avatar()}
							/>
						</AvatarGroup>
					</FlexBox>
				</FlexBox>
			</AccordionContainer>
			<AccordionContainer
				style={{ ...style.accordion, backgroundColor: theme.context.dark }}
				header={
					<Typography variant="h6" style={style.header}>
						Your Events
					</Typography>
				}
			>
				<Grid container spacing={2}>
					<Grid item={true} xs={12}>
						<EventCard
							header={"Experience Day"}
							date={"12-01-2001"}
							src={ASSETS.EVENT_PICTURE_1}
						/>
					</Grid>
					<Grid item={true} xs={12}>
						<EventCard
							header={"AI Seminar"}
							date={"12-01-2020"}
							src={ASSETS.EVENT_PICTURE_2}
						/>
					</Grid>
				</Grid>
			</AccordionContainer>
		</FlexBox>
	);
}

export default BlogDashboard;
