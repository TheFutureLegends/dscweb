import { combineReducers } from "redux";

import { UserReducer } from "./reducers/user.reducer";
import { UIReducer } from "./reducers/ui.reducer";

const rootReducer = combineReducers({
	user: UserReducer,
	ui: UIReducer,
});

export default rootReducer;
