import React from "react";
import "./NavBar.css";
import { Navigate, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const dash = () => {
    navigate("/Dashboard");
  };

  return (
    <div>
      <h1 className="nav">NavBar</h1>
      <h2>
        <a href="Signup">Signup</a>
        {""}
      </h2>

      <p onClick={dash}>Dashboard</p>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2 className="text-9xl bg-red-100">Welcome</h2>
    </div>
  );
};

export default NavBar;
