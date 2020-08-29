import React, { memo, useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  BrowserRouter,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import Auth from "../../routes/auth";
import Home from "../../routes/home/index";
import DashBoard from "../../routes/dashboard/index";
const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/sigin" component={Auth} /> */}
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
