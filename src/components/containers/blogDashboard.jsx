import React from "react";
import { Paper, Avatar, Typography, Divider, Grid } from "@material-ui/core";
import { FlexBox } from "../styled-elements";
import { theme } from "../../global-theme";
import { AvatarGroup } from "@material-ui/lab";
import { TagContainer, AuthorWithView, AccordionContainer } from "./index";
import EventCard from "./event/card";
import { useSelector } from "react-redux";
import faker from "faker";
import * as ASSETS from "../../constants/asset";
import { style } from "../styles/sidebar.style.js";

function BlogDashboard() {
	const user = useSelector((state) => state.user);
	return (
		<FlexBox direction="column" style={style.main}>
			{user.authenticated && (
				<Paper style={style.card}>
					<FlexBox justify="flex-start">
						<AuthorWithView
							src={user.credential.avatar}
							alt="TQC"
							views={19273}
							name={user.credential.username}
						/>
					</FlexBox>
				</Paper>
			)}
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
				{user.authenticated ? (
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
				) : (
					<FlexBox direction="column" style={{ width: "100%" }}>
						<img
							src={ASSETS.PARTY_JUMBOTRON}
							alt="Party"
							style={{ height: "100px" }}
						/>
						<Typography
							variant="body1"
							style={{
								width: "150px",
								color: theme.colors.dark.fb.__fb_secondary_text,
								textAlign: "center",
								margin: "20px",
							}}
						>
							You must login to see this feature
						</Typography>
					</FlexBox>
				)}
			</AccordionContainer>
		</FlexBox>
	);
}

export default BlogDashboard;
