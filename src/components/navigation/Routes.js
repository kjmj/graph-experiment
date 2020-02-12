import React from "react";
import {Route, Switch,} from "react-router-dom";
import Home from "../navPages/Home"
import Experiment from "../navPages/Experiment"

function Routes() {
  return (
      <Switch>
        <Route path="/experiments">
          <Experiment/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
  );
}

export default Routes;
