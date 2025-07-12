import React from "react";
import NavBar from "../../Component/NavBar";
import Events from "../../Component/Events/Events";
import FetchAllData from "../../Component/FetchData/FetchAllData";
import Dat from "../../Component/FetchData/Dat";
import Data from "../../Component/FetchData/Data";
import { Link } from "react-router-dom";
// import Service from "../../Component/service";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Events />
      {/* <FetchAllData /> */}
      <Dat />
      <Data />
      {/* <Service /> */}
      <div>
        <button>
          <Link to="/signup">Register</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/profile"> User Profile</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
