import React from "react";
import { Tag } from "../../components";

function TagContainer() {
	return (
		<Tag justify="flex-start">
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
