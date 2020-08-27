import React, { memo, useEffect } from "react";
import Home from "../../routes/home/index";
import DashBoard from "../../routes/dashboard/index";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Signin, Signup } from "../../routes/auth";
import Dashboard from "../../routes/home/index";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/login" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
