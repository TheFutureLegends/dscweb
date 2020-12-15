import {
  SET_POST,
  SET_POSTS,
  SET_POPULAR_POSTS,
  SET_LATEST_POSTS,
  SET_LIST_OF_POST,
} from "../types/post.types";
import axios from "axios";
import { apiDomain } from "../../../constants/api";
import { cookies, cookieName } from "../../../constants/cookie";

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
      `${apiDomain}/posts?latest=true&limit=${limit}&asc=${asc}`
    );
    dispatch({ type: SET_LATEST_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const getMostPopularPosts = (limit, asc) => async (dispatch) => {
  try {
    let res = await axios.get(
      `${apiDomain}/posts?latest=true?sortBy=visit&limit=${limit}&asc=${asc}`
    );
    dispatch({ type: SET_POPULAR_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const postNewPost = ({
  title,
  description,
  imageFile,
  categories,
}) => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": `${cookies.get(cookieName)}`,
    };

    let create = await axios.post(
      `${apiDomain}/posts/create`,
      {
        title: title,
        description: description,
        imageFile: imageFile,
        category: "web-development",
      },
      {
        headers: headers,
      }
    );

    this.getListOfPost();
  } catch (error) {
    console.log(error);
  }
};

export const getListOfPost = () => async (dispatch) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": `${cookies.get(cookieName)}`,
    };

    let res = await axios.get(`${apiDomain}/posts/read`, {
      headers: headers,
    });

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};
