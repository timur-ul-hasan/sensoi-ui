import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Switch,
  useHistory,
  BrowserRouter,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import Auth from "../../routes/auth";
import Dashboard from "../../routes/home/index";
const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
