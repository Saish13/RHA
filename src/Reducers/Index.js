import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const reducer = combineReducers({
    auth: AuthReducer
});

export default reducer;
