import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch.js";
import MainSection from "./mainSection";

function LatestUpdateSection() {
	const [posts, setPosts] = useState([]);
	const res = useFetch("/posts/latest?sortBy=createdAt&limit=6&asc=true");

	useEffect(() => {
		if (res.response != null) {
			setPosts(res.response.data.posts);
		}
	}, [res]);

	return <MainSection header="Latest Update Posts" posts={posts} />;
}

export default LatestUpdateSection;
