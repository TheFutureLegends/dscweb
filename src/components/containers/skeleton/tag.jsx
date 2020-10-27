import React from "react";
import { Tag } from "../../styled-elements";

function TagSkeleton() {
	return Array(30)
		.fill({})
		.map(() => <Tag.Item></Tag.Item>);
}

export default TagSkeleton;
