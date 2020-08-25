import React from "react";
import styled from "styled-components";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import Signin from "./signIn";
import Signup from "./signUp";

export default ({ match }) => {
  const location = useLocation();
  const signOut = useRouteMatch(`${match.url}/signout`);

  return (
    <>
      <Switch>
        <Route path={`${match.url}/signin`} component={Signin} />
        <Route path={`${match.url}/signup`} component={Signup} />
      </Switch>
    </>
  );
};
