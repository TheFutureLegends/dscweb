import {
  SET_POST,
  SET_POSTS,
  SET_POPULAR_POSTS,
  SET_LATEST_POSTS,
  SET_LIST_OF_POST,
  // DELETE_POST,
} from "../types/post.types";
import axios from "axios";
import Swal from "sweetalert2";
import { getAuthorizationHeaders } from "../../../constants/api";

export const getPost = (slug, history) => async (dispatch) => {
  try {
    let res = await axios.get(`/posts/${slug}`);
    dispatch({ type: SET_POST, payload: res.data });
    history.push(`/posts/${slug}`);
  } catch (error) {
    console.log(error);
  }
};

export const getPostsWithPagination = (limit, page) => async (dispatch) => {
  try {
    let res = await axios.get(`/posts?limit=${limit}&page=${page}`);

    dispatch({ type: SET_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const getLatestPost = (limit, asc) => async (dispatch) => {
  try {
    let res = await axios.get(`/posts?latest=true&limit=${limit}&asc=${asc}`);

    dispatch({ type: SET_LATEST_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const getMostPopularPosts = (limit, asc) => async (dispatch) => {
  try {
    let res = await axios.get(
      `/posts?latest=true?sortBy=visit&limit=${limit}&asc=${asc}`
    );

    dispatch({ type: SET_POPULAR_POSTS, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const postNewPost = (
  { title, description, imageFile, category },
  history
) => async (dispatch) => {
  try {
    await axios.post(
      `/posts/create`,
      {
        title: title,
        description: description,
        imageFile: imageFile,
        category: "web-development",
      },
      getAuthorizationHeaders()
    );

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      text:
        "You have created new post. You will be redirect to post list in a moment!",
      showConfirmButton: false,
      timer: 3000,
    });

    getListOfPost();

    setInterval(() => history.push("/post-list"), 2900);
  } catch (error) {
    console.log(error);
  }
};

export const getListOfPost = () => async (dispatch) => {
  try {
    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (item) => async (dispatch) => {
  try {
    await axios.delete("/posts/delete/" + item.id, getAuthorizationHeaders());

    let res = await axios.get(`/posts/read`, getAuthorizationHeaders());

    dispatch({ type: SET_LIST_OF_POST, payload: res.data.posts });
  } catch (error) {
    console.log(error);
  }
};
