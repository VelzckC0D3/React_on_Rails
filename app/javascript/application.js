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

function App () {
  return (
    <div>
      <h1>React App</h1>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
      <App />
      <Greeting />
    </Provider>
    </Router>
  </React.StrictMode>
);