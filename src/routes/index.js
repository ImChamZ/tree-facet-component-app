import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
);

export default Routes;
