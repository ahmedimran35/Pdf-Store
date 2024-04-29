import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./components/Courses/Courses";

function App() {
  return (
    <>
      {/* <Home />
      <Courses /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
