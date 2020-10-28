import React from "react";
import { useFetch } from "../../hooks/useFetch";

function SinglePostPage(...props) {
	const slug = props[0].match.params.slug;
	const res = useFetch(`/posts/${slug}`);
	return JSON.stringify(res.response, null, 2);
}

export default SinglePostPage;
