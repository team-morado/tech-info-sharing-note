import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import techInfo from "./modules/techInfo";

const middlewares = [thunk];
const rootReducer = combineReducers({techInfo});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;