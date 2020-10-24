import React, { useContext } from "react";
import { Tag } from "../../styled-elements";
import { UtilityContext } from "../../../contexts/UtilityContext";
import * as BREAK from "../../../constants/breakpoint";

function TagContainer({ ...restProps }) {
	const { breakPoint } = useContext(UtilityContext);
	return (
		<Tag
			justify="flex-start"
			style={{
				padding: `20px ${breakPoint >= BREAK.desktop_md ? "100px" : "10px"}`,
			}}
			{...restProps}
		>
			<Tag.Item>Course Roadmap</Tag.Item>
			<Tag.Item>Design Pattern</Tag.Item>
			<Tag.Item>Machine Learning</Tag.Item>
			<Tag.Item>Robotics & Electronic</Tag.Item>
			<Tag.Item>Algorithms & Data Structure</Tag.Item>
			<Tag.Item>UI/UX Design</Tag.Item>
			<Tag.Item>Testing & QA</Tag.Item>
			<Tag.Item>Programming Languages</Tag.Item>
			<Tag.Item>Self-help</Tag.Item>
			<Tag.Item>Web Development</Tag.Item>
			<Tag.Item>Game Development</Tag.Item>
		</Tag>
	);
}

export default TagContainer;
