import React from "react";
import { useFetch } from "../../hooks/useFetch";

function SinglePostPage(...props) {
	const slug = props[0].match.params.slug;
	const res = useFetch(`/posts/${slug}`);
	console.log(res);
	return <div>JSON.stringify(res.response, null, 2)</div>;
}

export default SinglePostPage;
