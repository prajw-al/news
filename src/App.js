import React, { Component} from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Sports from "./Sports.js";
import Business from "./Business.js";
import Entertainment from "./Entertainment.js";
import Home from "./Home.js";
import Health from "./Health.js";
import Science from "./Science.js";
import Technology from "./Technology.js";
import Results from "./Results.js";
export default class App extends Component{
  render() {
    return (
      <div className="container" >
        <HashRouter basename="/">
          <Routes>
        <Route exact path="/" element={<Home/>} />
            <Route path="/sports" element={<Sports/>} />
            <Route path="/business" element={<Business/>} />
            <Route path="/entertainment" element={<Entertainment/>} />
            <Route path="/health" element={<Health/>} />
            <Route path="/science" element={<Science/>} />
            <Route path="/technology" element={<Technology/>} />
            <Route path="/search" element={<Results/>} />
          </Routes>
          </HashRouter>
      </div >
    );
  }
}
