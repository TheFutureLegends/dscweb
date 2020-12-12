import {
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  LOADING_USER,
} from "../types/user.types";
import { LOADING_UI, SET_ERRORS, STOP_LOADING_UI } from "../types/ui.types";
import axios from "axios";
import { apiDomain } from "../../../constants/api";
import { cookies, cookieName } from "../../../constants/cookie";

export const loginUser = (userData, history) => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  try {
    let res = await axios.post(`${apiDomain}/auth/signin`, userData);
    setAuthorizationHeader(res.data.accessToken.token);
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
    let res = await axios.get(`${apiDomain}/users/profile`);
    if (res)
      dispatch({
        type: SET_USER,
        payload: { credential: res.data },
      });
    dispatch({ type: SET_AUTHENTICATED });
  } catch (error) {
    console.log(error);
  }
};

export const signupUser = (userData, history) => async (dispatch) => {
  dispatch({ type: LOADING_UI });

  let keys = Object.keys(userData);

  delete userData[keys[keys.length - 1]];

  try {
    let res = await axios.post(`${apiDomain}/auth/signup`, userData);

    dispatch({ type: STOP_LOADING_UI });

    history.push("/login");
  } catch (error) {
    console.log(error.response.data.message);

    dispatch({ type: SET_ERRORS, payload: { signup: error.message } });
  }
};

const setAuthorizationHeader = (token) => {
  cookies.set(cookieName, token, { path: "/" });
  axios.defaults.headers.common["x-access-token"] = token;
};
