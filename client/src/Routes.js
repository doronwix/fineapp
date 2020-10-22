import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard";

import history from "./history";
console.log(__dirname);
const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
