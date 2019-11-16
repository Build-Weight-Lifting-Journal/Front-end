import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from "redux-thunk";
import logger from "redux-logger";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { authReducer } from "./reducers/signupReducer";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(authReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
);


