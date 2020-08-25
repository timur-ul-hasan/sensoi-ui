import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";

import Auth from "../../routes/auth";

const App = props => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
    </Switch>
  );
};

export default memo(App);
