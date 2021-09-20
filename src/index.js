import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";
import "./App.css"

import App from './App';
import { ScrollToTop } from "./components/index"

import { Provider } from "react-redux";
import  store  from "./store";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
