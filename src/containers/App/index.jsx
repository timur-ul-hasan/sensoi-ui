import React, { memo } from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import Home from "../../routes/home/index";
import Dashboard from "../../routes/dashboard/index";

import { Signin, Signup } from "../../routes/auth";
import RoutePrivate from "../RoutePrivate";
import RoutePublic from "../RoutePublic";
import { useIsAuthenticated } from "../../routes/auth/hooks";

const App = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <BrowserRouter>
      <Switch>
        <RoutePrivate path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
        <RoutePublic path="/login" exact component={Signin} isAuthenticated={isAuthenticated} />
        <RoutePublic path="/signup" exact component={Signup} isAuthenticated={isAuthenticated} />
        <RoutePublic path="/" component={Home} isAuthenticated={isAuthenticated} />
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
