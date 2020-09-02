import React, { memo, useEffect } from "react";
import Home from "../../routes/home/index";
import DashBoard from "../../routes/dashboard/index";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import  Signin from "../../routes/auth/signIn/index";
import Signup from "../../routes/auth/signUp/index";
import Dashboard from "../../routes/home/index";
import {history} from  "../../routes/history";
// import {PrivateRoute} from "../../routes/privateRoute";
const App = props => {
  return (
    // <BrowserRouter>
     <Router history={history}>
      <Switch>
      {/* <PrivateRoute exact path="/" component={Home} /> */}
        <Route path="/home" privateRoute="true" component={Home} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/login" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" component={Dashboard} />
        <Redirect from="*" to="/" />
      </Switch>
      </Router>
    // </BrowserRouter>
  );
};
export default memo(App);
