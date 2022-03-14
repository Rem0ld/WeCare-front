import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <Toaster />
      </div>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
