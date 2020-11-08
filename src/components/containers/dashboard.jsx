import React from "react";
import { Sidebar } from "../styled-elements";
import { listOfGames } from "../../constants/games";
import faker from "faker";
import { listOfRoutes } from "../../constants/route";
import { Link as ReactRouterLink } from "react-router-dom";

function ItemWithImage({ src, className, header, ...restProps }) {
	return (
		<Sidebar.Item justify="flex-start" {...restProps}>
			<Sidebar.Picture src={src} className={className} />
			<Sidebar.Header>{header}</Sidebar.Header>
		</Sidebar.Item>
	);
}

const style = {
	__a: {
		textDecoration: "none",
		width: "100%",
	},
};

function Dashboard() {
	return (
		<Sidebar>
			<Sidebar.Inner direction="column">
				<ItemWithImage
					src={faker.image.avatar}
					className="__avatar"
					header="Tin Quan Chung"
				/>
				{listOfRoutes.slice(1).map((route) => (
					<ReactRouterLink to={route.route} style={style.__a}>
						<ItemWithImage
							src={route.svg}
							className="__icon"
							header={route.text}
						/>
					</ReactRouterLink>
				))}

				<Sidebar.Divider />
				{listOfGames.map((game) => (
					<a href={game.href} style={style.__a}>
						<ItemWithImage
							src={game.icon}
							className="__icon"
							header={game.name}
						/>
					</a>
				))}
			</Sidebar.Inner>
		</Sidebar>
	);
}

export default Dashboard;
