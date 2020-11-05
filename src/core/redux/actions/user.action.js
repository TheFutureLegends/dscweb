import {
	SET_USER,
	SET_UNAUTHENTICATED,
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
		setAuthorizationHeader(res.data.accessToken);
		dispatch({ type: SET_USER, payload: res.data });
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

export const getAuthUserData = (cookieToken) => async (dispatch) => {
	dispatch({ type: LOADING_USER });
	console.log(cookieToken);
	try {
		let res = axios.get(`${apiDomain}/users/profile`, {
			headers: {
				"x-access-token": cookieToken,
			},
		});
		dispatch({
			type: SET_USER,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
	}
};

// export const getAuthUserData = (method) => async (dispatch) => {
// 	try {
// 		let authUser = await getAuthUser(method);
// 		console.log(authUser);
// 	} catch (error) {
// 		dispatch({ type: SET_ERRORS, payload: { authenticate: error.message } });
// 	}
// };

// export const signupUser = (method, userData, history) => async (dispatch) => {
// 	dispatch({ type: LOADING_UI });
// 	try {
// 		let token = await signUpAction(method, userData);
// 		setAuthorizationHeader(token);
// 		history.push(ROUTES.__default_channel);
// 	} catch (error) {
// 		console.log(error);
// 		dispatch({ type: SET_ERRORS, payload: { signup: error.message } });
// 	}
// };

const setAuthorizationHeader = (token) => {
	cookies.set(cookieName, token, { path: "/" });
	axios.defaults.headers.common["Authorization"] = token;
};
