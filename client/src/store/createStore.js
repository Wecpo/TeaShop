import teaReducer from "./tea";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
     tea: teaReducer,
});

const store = configureStore({
     reducer: rootReducer,
});
export default store;
