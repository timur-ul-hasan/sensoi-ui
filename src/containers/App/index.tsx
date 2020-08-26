import React, { memo, useEffect } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Signin, Signup } from "../../routes/auth";
import Dashboard from "../../routes/home/index";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
