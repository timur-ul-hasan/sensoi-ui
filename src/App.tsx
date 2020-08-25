import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "mapbox-gl/dist/mapbox-gl.css";
import "antd/dist/antd.css";
import "./style.css";
import "./assets/vendors/style";
import "./App.css";
import MainApp from "./containers/App/index";
import { useIsAuthenticated, useUserType, useUserTypeTemp } from "./routes/auth/hooks";

const App: React.FC = () => {
  const tempType = useUserTypeTemp();
  const type = useUserType();

  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
