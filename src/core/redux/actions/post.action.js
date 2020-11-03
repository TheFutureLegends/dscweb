import {
	SET_POST,
	SET_POSTS,
	SET_POPULAR_POSTS,
	SET_LATEST_POSTS,
} from "../types/post.types";
import axios from "axios";
import { apiDomain } from "../../../constants/api";

export const getPost = (slug, history) => async (dispatch) => {
	try {
		let res = await axios.get(`${apiDomain}/posts/${slug}`);
		dispatch({ type: SET_POST, payload: res.data });
		history.push(`/posts/${slug}`);
	} catch (error) {
		console.log(error);
	}
};

export const getPostsWithPagination = (limit, page) => async (dispatch) => {
	try {
		let res = await axios.get(`${apiDomain}/posts?limit=${limit}&page=${page}`);
		dispatch({ type: SET_POSTS, payload: res.data.posts });
	} catch (error) {
		console.log(error);
	}
};

export const getLatestPost = (limit, asc) => async (dispatch) => {
	try {
		let res = await axios.get(
			`${apiDomain}/posts/latest?sortBy=createdAt&limit=${limit}&asc=${asc}`
		);
		dispatch({ type: SET_LATEST_POSTS, payload: res.data.posts });
	} catch (error) {
		console.log(error);
	}
};

export const getMostPopularPosts = (limit, asc) => async (dispatch) => {
	try {
		let res = await axios.get(
			`${apiDomain}/posts/latest?sortBy=visit&limit=${limit}&asc=${asc}`
		);
		dispatch({ type: SET_POPULAR_POSTS, payload: res.data.posts });
	} catch (error) {
		console.log(error);
	}
};
