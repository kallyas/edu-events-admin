import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";


import App from './App';
import { ScrollToTop } from "./components/index"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
