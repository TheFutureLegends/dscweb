import {
	SET_AUTHOR,
	// SET_AUTHORS,
	SET_TOP_AUTHORS,
} from "../types/author.types";
import axios from "axios";
import { apiDomain } from "../../../constants/api";

export const getAuthor = (username, history) => async (dispatch) => {
	try {
		let res = await axios.get(`${apiDomain}/users/${username}`);
		dispatch({ type: SET_AUTHOR, payload: res.data });
		history.push(`/users/${username}`);
	} catch (error) {
		console.log(error);
	}
};

export const getAuthors = (history) => (dispatch) => {};

export const getTopAuthor = (limit) => async (dispatch) => {
	try {
		let res = await axios.get(`${apiDomain}/posts/top-author?limit=${limit}`);
		dispatch({ type: SET_TOP_AUTHORS, payload: res.data.topAuthors });
	} catch (error) {
		console.log(error);
	}
};
