import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from "redux-thunk";
import logger from "redux-logger";

import { createStore, applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux";
import { authReducer } from "./reducers/signupReducer";
import { loginReducer } from "./reducers/loginReducer";
import { exerciseReducer } from "./reducers/exerciseReducer";
import { BrowserRouter as Router } from "react-router-dom";

const allReducers = combineReducers({
  authReducer,
  loginReducer,
  exerciseReducer
});

const store = createStore(allReducers, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
);


