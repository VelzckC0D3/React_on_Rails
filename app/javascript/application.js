// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Greeting from "./components/Greeting.js";
import Testing from "./components/Testing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Greeting />
      <div className="wrapper">
        <Testing />
      </div>
    </Router>
  </React.StrictMode>
);

/* ReactDOM.render(<Greeting />, document.getElementById("root")); */
