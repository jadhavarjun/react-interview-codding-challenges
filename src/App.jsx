import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import OnlineCourses from "./components/OnlineCourses/OnlineCourses";
import TodoLists from "./components/TodoLists/TodoLists";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online" element={<OnlineCourses />} />
      </Routes> */}
      <TodoLists />
    </div>
  );
}

export default App;
