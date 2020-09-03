import React, { memo, useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  BrowserRouter,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import Home from "../../routes/home/index";
import Dashboard from "../../routes/dashboard/index";

import { Signin, Signup } from "../../routes/auth";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
