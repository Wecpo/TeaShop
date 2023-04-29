import teaReducer from "./tea";
import usersReducer from "./users";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
     tea: teaReducer,
     users: usersReducer,
});

const store = configureStore({
     reducer: rootReducer,
});
export default store;
