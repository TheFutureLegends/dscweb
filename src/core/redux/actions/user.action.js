import {
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  LOADING_USER,
} from "../types/user.types";
import { LOADING_UI, SET_ERRORS, STOP_LOADING_UI } from "../types/ui.types";
import axios from "axios";
import { getAuthorizationHeaders } from "../../../constants/api";
import { cookies, cookieName } from "../../../constants/cookie";
import { getListOfPost } from "./post.action.js";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

export const loginUser = (userData, history) => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  try {
    let res = await axios.post(`/auth/signin`, userData);

    setAuthorizationHeader(res.data.accessToken.token);

    getListOfPost();

    dispatch({ type: SET_USER, payload: { credential: res.data } });

    dispatch({ type: STOP_LOADING_UI });

    history.push("/");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: { login: "Something went wrong" } });
  }
};

export const logoutUser = () => (dispatch) => {
  cookies.remove(cookieName, { path: "/" });

  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getAuthUserData = () => async (dispatch) => {
  dispatch({ type: LOADING_USER });
  try {
    let res = await axios.get(`/users/profile`, getAuthorizationHeaders());

    if (res) {
      dispatch({
        type: SET_USER,
        payload: { credential: res.data },
      });

      dispatch({ type: SET_AUTHENTICATED });
    }
  } catch (error) {
    cookies.remove(cookieName, { path: "/" });

    dispatch({ type: SET_UNAUTHENTICATED });
  }
};

export const signupUser = (userData, history) => async (dispatch) => {
  dispatch({ type: LOADING_UI });

  let keys = Object.keys(userData);

  delete userData[keys[keys.length - 1]];

  try {
    await axios.post(`/auth/signup`, userData);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      text: "You can now login with your registered email!",
      showConfirmButton: false,
      timer: 2000,
    });

    dispatch({ type: STOP_LOADING_UI });

    history.push("/login");
  } catch (error) {
    console.log(error.response.data.message);

    Swal.fire({
      position: "center",
      icon: "error",
      title: error.response.data.title,
      text: error.response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });

    dispatch({ type: SET_ERRORS, payload: { signup: error.message } });
  }
};

const setAuthorizationHeader = (token) => {
  cookies.set(cookieName, token, { path: "/" });
};
