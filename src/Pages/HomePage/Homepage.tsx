import React from "react";
import NavBar from "../../Component/NavBar";
import Events from "../../Component/Events/Events";
import FetchAllData from "../../Component/FetchData/FetchAllData";
import Dat from "../../Component/FetchData/Dat";
import Data from "../../Component/FetchData/Data";
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
    </div>
  );
};

export default Homepage;
