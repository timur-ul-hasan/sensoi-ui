import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import MainApp from "./containers/App/index";

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;
