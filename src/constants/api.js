import axios from "axios";
import { cookies, cookieName } from "./cookie.js";

// export const apiDomain = "http://rmit-dsc-api.herokuapp.com/api";

export const apiDomain = "http://localhost:5000/api";

axios.defaults.baseURL = apiDomain;

export const getAuthorizationHeaders = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${cookies.get(cookieName)}`,
    },
  };
};
