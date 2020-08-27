import React, { memo, useEffect } from "react";

<<<<<<< HEAD
import Auth from "../../routes/auth";
import Home from "../../routes/home/index";
import DashBoard from "../../routes/dashboard/index";
=======
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Signin, Signup } from "../../routes/auth";
import Dashboard from "../../routes/home/index";

>>>>>>> 5d4e1c61ffd42b15995b67692e84c92a6692d05f
const App = props => {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path="/auth" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
=======
        <Route path="/login" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" component={Dashboard} />
>>>>>>> 5d4e1c61ffd42b15995b67692e84c92a6692d05f
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
