// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Greeting from "./components/Greeting";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <Greeting />
    </Provider>
    </Router>
  </React.StrictMode>
);

/* ReactDOM.render(<Greeting />, document.getElementById("root")); */
