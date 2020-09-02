import React, { memo, useEffect } from "react";
import Home from "../../routes/home/index";
import DashBoard from "../../routes/dashboard/index";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import  Signin from "../../routes/auth/signIn/index";
import Signup from "../../routes/auth/signUp/index";
import Dashboard from "../../routes/home/index";

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" privateRoute="true" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/login" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
export default memo(App);
