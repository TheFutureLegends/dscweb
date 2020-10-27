import React, { useContext, useState, useEffect } from "react";
import { Tag } from "../../styled-elements";
import { UtilityContext } from "../../../contexts/UtilityContext";
import { CircularProgress } from "@material-ui/core";
import * as BREAK from "../../../constants/breakpoint";
import { useFetch } from "../../hooks/useFetch";
import { theme } from "../../../global-theme";

function TagContainer({ ...restProps }) {
	const { breakPoint } = useContext(UtilityContext);
	const [categories, setCategories] = useState([]);
	const res = useFetch("/categories?limit=15&page=1");

	useEffect(() => {
		if (res.response != null) {
			setCategories(res.response.data.categories);
		}
	}, [res]);

	return (
		<Tag
			justify="flex-start"
			style={{
				padding: `20px ${breakPoint >= BREAK.desktop_md ? "100px" : "10px"}`,
			}}
			{...restProps}
		>
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
