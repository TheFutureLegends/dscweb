import { SET_TOP_AUTHOR, SET_AUTHOR, SET_AUTHORS } from "../types/author.types";

const initialState = {
	topAuthor: [],
	authors: [],
	author: [],
};

export function PostReducer(state = initialState, action) {
	switch (action.type) {
		case SET_TOP_AUTHOR:
			return {
				...state,
				topAuthor: action.payload,
			};
		case SET_AUTHOR:
			return {
				...state,
				author: action.payload,
			};
		case SET_AUTHORS:
			return {
				...state,
				authors: action.payload,
			};
		default:
			return state;
	}
}
