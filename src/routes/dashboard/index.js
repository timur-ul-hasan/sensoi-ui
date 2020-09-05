import React, { useEffect } from "react";
import styled from "styled-components";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "./dashboard";
import { requestDashboard } from "./actions";
import { useEntries } from "./hooks";

export default ({ match }) => {
  const location = useLocation();
  const signOut = useRouteMatch(`${match.url}/signout`);
  const dispatch = useDispatch();
  const entries = useEntries();

  useEffect(() => {
    dispatch(requestDashboard());
  }, []);

  return (
    <>
      <Switch>
        <Route path={`${match.url}/`} component={Dashboard} />
      </Switch>
    </>
  );
};
