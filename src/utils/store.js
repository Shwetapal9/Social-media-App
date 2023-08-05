// import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './utils/reducers'; // Create a separate reducers file if needed
import rootReducer from "./reducer";
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;