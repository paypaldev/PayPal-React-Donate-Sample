import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { DonateApp } from "./DonateApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DonateApp />
  </StrictMode>,
  rootElement
);
