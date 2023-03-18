import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoList from "./todolist.js";
import CoinTracker from "./cointracker.js";
import MovieApp from "./movieapp";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <MovieApp />
  </div>
);
