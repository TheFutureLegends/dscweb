import {
	// SET_USER,
	SET_UNAUTHENTICATED,
	LOADING_USER,
} from "../types/user.types";
import {
	LOADING_UI,
	SET_ERRORS,
	//  CLEAR_ERRORS
} from "../types/ui.types";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const cookieName = "biscuitToken";

export const loginUser = (userData, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let res = await axios.post(`${apiDomain}/auth/signin`, userData);
		cookies.set(cookieName, res.data.accessToken, { path: "/" });
		history.push("/");
	} catch (error) {
		dispatch({ type: SET_ERRORS, payload: { login: "Something went wrong" } });
	}
};

export const logoutUser = () => (dispatch) => {
	cookies.remove(cookieName, { path: "/" });
	dispatch({ type: SET_UNAUTHENTICATED });
};

export const getUserData = (id) => (dispatch) => {
	dispatch({ type: LOADING_USER });
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

// const setAuthorizationHeader = (token) => {
// 	const FBIdToken = `Bearer ${token}`;
// 	localStorage.setItem("FBIdToken", FBIdToken);
// 	axios.defaults.headers.common["Authorization"] = FBIdToken;
// };
