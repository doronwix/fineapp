import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard/Dashboard";
import Grid from "./components/Layout/Grid/Grid";

import history from "./history";
console.log(__dirname);
const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/" component={Grid} />
      </Switch>
    </Router>
  );
};

export default Routes;
