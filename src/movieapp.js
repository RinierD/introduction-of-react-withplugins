import { useEffect, useState } from "react";
import Home from "./routes/home.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./routes/details.js";

function MovieApp() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default MovieApp;
