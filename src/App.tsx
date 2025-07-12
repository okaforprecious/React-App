import React from "react";
import NavBar from "./Component/NavBar";
import Homepage from "./Pages/HomePage/Homepage";
import Login from "./Pages/LoginPage/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/signup/Signup";
import UserDetails from "./Pages/DetailsPage/UserDetails";
import ProductDetails from "./Pages/DetailsPage/ProductDetails";
import Updateprofile from "./Pages/LoginPage/Updateprofile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Updateprofile />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
