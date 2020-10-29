import {
	faHome,
	faCalendarAlt,
	faBook,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";

export const HOME = "/";
export const LOG_IN = "/login";
export const SIGN_UP = "/signup";
export const EVENT = "/event";
export const BLOG = "/blog";
export const ABOUT = "/about";

export const POST = "/posts";
export const SINGLE_POST = `/posts/:slug`;
export const PLAYGROUND = "/playgrounds";
export const PLAYGROUND_PROJECT = "/playgrounds/:slug";

export const listOfRoutes = [
	{ route: HOME, icon: faHome, text: "Home" },
	{ route: EVENT, icon: faCalendarAlt, text: "Event" },
	{ route: BLOG, icon: faBook, text: "Blog" },
	{ route: ABOUT, icon: faUsers, text: "About" },
];
