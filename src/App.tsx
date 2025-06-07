import React from "react";
import NavBar from "./Component/NavBar";
import Homepage from "./Pages/HomePage/Homepage";
import Login from "./Pages/LoginPage/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/signup/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;