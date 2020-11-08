import React, { useState, useEffect } from "react";
import { Tag } from "../../styled-elements";
import { CircularProgress } from "@material-ui/core";
import { useFetch } from "../../hooks/useFetch";
import { theme } from "../../../global-theme";

function TagContainer({ ...restProps }) {
	const [categories, setCategories] = useState([]);
	const res = useFetch("/categories?limit=15&page=1");

	useEffect(() => {
		if (res.response != null) {
			setCategories(res.response.data.categories);
		}
	}, [res]);

	return (
		<Tag justify="flex-start" {...restProps}>
			{categories.length !== 0 ? (
				categories.map((category) => (
					<Tag.Item key={category._id}>{category.title}</Tag.Item>
				))
			) : (
				<CircularProgress style={{ color: theme.colors.primary }} />
			)}
		</Tag>
	);
}

export default TagContainer;
