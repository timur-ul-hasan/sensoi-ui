import React from "react";
import styled from "styled-components";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import Homepage from "../../components/HomePage";

export default ({ match }) => {
  const location = useLocation();
  const signOut = useRouteMatch(`${match.url}/signout`);

  return (
    <>
      <Switch>
        <Route path={`${match.url}/`} component={Homepage} />
      </Switch>
    </>
  );
};
