import React from "react";
import { Sidebar } from "../styled-elements";
import * as ASSETS from "../../constants/asset";
import { listOfGames } from "../../constants/games";
import { Divider } from "@material-ui/core";
import faker from "faker";

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
				<ItemWithImage
					src={ASSETS.BLOG_ICON}
					className="__icon"
					header="Blog"
				/>
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
