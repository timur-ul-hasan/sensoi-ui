import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/style.css";
import MainApp from "./containers/App/index";
// import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
