import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import OnlineCourses from "./components/OnlineCourses/OnlineCourses";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online" element={<OnlineCourses />} />
        {/* <Route path="/sheeps" component={Sheeps} />
        <Route path="/goats" component={Goats} /> */}
      </Routes>
    </div>
  );
}

export default App;
