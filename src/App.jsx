import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import "./assets/vendors/style";
import "./App.css";
import MainApp from "./containers/App/index";

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
