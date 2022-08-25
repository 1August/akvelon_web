import axios from "axios";
import {createStore, combineReducers, applyMiddleware} from 'redux'

import {composeWithDevTools} from "redux-devtools-extension";
// import {userReducer} from "./userReducer";
import {usersReducer} from "./usersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({users: usersReducer})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))