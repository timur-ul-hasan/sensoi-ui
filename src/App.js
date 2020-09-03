import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
// import "./assets/css/lightslider.css";
import "./assets/css/style.css";
import MainApp from "./containers/App/index";
import { useIsAuthenticated, useUserType, useUserTypeTemp } from "./routes/auth/hooks";

const App = () => {
  const tempType = useUserTypeTemp();
  const type = useUserType();

  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
