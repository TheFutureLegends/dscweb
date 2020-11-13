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

export const ABOUT = "/about";

export const FORUM = "/forum";

export const POST = "/posts";
export const SINGLE_POST = `/posts/:slug`;
export const NEW_POST = `/new-post`;

export const listOfRoutes = [
	{ route: HOME, icon: faHome, svg: ASSETS.HOME_ICON, text: "Home" },
	{ route: EVENT, icon: faCalendarAlt, svg: ASSETS.EVENT_ICON, text: "Event" },
	{ route: FORUM, icon: null, svg: ASSETS.FORUM_ICON, text: "Forum" },
	// { route: ABOUT, icon: faUsers, text: "About" },
];
