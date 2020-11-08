import {
	faHome,
	faCalendarAlt,
	// faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import * as ASSETS from "./asset";

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

export const DEVELOPMENT = "/development";

export const listOfRoutes = [
	{ route: HOME, icon: faHome, svg: ASSETS.HOME_ICON, text: "Home" },
	{ route: EVENT, icon: faCalendarAlt, svg: ASSETS.EVENT_ICON, text: "Event" },
	// { route: BLOG, icon: faBook, svg: ASSETS.BLOG_ICON, text: "Blog" },
	// { route: ABOUT, icon: faUsers, text: "About" },
	// { route: PLAYGROUND, icon: faCodeBranch, text: "Playground" },
];
