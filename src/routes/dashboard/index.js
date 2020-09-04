import React, { useEffect } from "react";
import styled from "styled-components";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dashboard from "../../components/Dashboard";
import { requestDashboard } from "./actions";

export default ({ match }) => {
  const location = useLocation();
  const signOut = useRouteMatch(`${match.url}/signout`);
  const dispatch = useDispatch();

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
