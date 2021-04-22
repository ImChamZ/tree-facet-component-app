/**
 * Describes the main routes of the application.
 *
 * @author Chamara Chathuranga
 */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => (
  <Router>
    <Route path="/" component={Home} />
  </Router>
);

export default Routes;
