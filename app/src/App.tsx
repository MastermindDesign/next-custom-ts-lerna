import * as React from "react";
import * as ReactDOM from "react-dom";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { Home } from "./views/home/Home";
import { Calendar } from "./views/calendar/Calendar";

const App = () => (
  <div>
    <h1>Hello, friend</h1>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/calendar">
        <Calendar compiler="TypeScript" framework="React" />
      </Route>
    </Switch>
  </div>
);

export default withRouter(App);
