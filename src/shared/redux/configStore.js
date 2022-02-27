import {combineReducers, createStore} from "redux";
import techInfo from "./modules/techInfo";

const rootReducer = combineReducers({techInfo});

const store = createStore(rootReducer);

export default store;