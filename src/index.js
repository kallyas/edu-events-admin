import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// core styles
import "./assets/dist/css/tabler.min.css";
// import "./assets/dist/css/tabler-flags.min.css";
// import "./assets/dist/css/tabler-payments.min.css";
import "./assets/dist/css/tabler-vendors.min.css";
import "./assets/dist/css/tabler-custom.min.css";
import "./App.css";
import App from './App';
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
