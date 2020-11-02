import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch.js";
import MainSection from "./mainSection";

function MostPopularBlogs() {
	const [posts, setPosts] = useState([]);
	const res = useFetch("/posts/latest?sortBy=visit&limit=6&asc=false");

	useEffect(() => {
		if (res.response != null) {
			setPosts(res.response.data.posts);
		}
	}, [res]);

	return <MainSection posts={posts} header="Most Popular Posts" />;
}

export default MostPopularBlogs;
