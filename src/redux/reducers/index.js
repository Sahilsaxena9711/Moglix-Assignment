// root reducer is exported from this file
import { combineReducers } from "redux";
import postReducer from "./posts";

// for adding more reducers 
// , reducerName: reducerInstance
export default combineReducers({
    post: postReducer
});