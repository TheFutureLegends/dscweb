import {
  SET_LATEST_POSTS,
  SET_POPULAR_POSTS,
  SET_POST,
  SET_POSTS,
  SET_LIST_OF_POST,
  DELETE_POST,
} from "../types/post.types";

const initialState = {
  mostPopularPosts: [],
  latestPosts: [],
  posts: [],
  post: {},
  postList: [],
};

export function PostReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LATEST_POSTS:
      return {
        ...state,
        latestPosts: action.payload,
      };
    case SET_POPULAR_POSTS:
      return {
        ...state,
        mostPopularPosts: action.payload,
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case SET_LIST_OF_POST:
      return {
        ...state,
        postList: action.payload,
      };
    case DELETE_POST:
      return;
    default:
      return state;
  }
}
