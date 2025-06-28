import React from "react";
import "./Service.css";
// import service-1 from '../assets/service-1.jpg'

const service = () => {
  return (
    <section className="service-section">
      <h1>Our Services</h1>
      <div className="divider"></div>
      <div className="service-flex">
        <div>
          {/* <img src= {service-1}/> */}
          <h3>Web Design</h3>
          <p>
            Focus on how you can help and benefit your user. Use simple words so
            that you don't confuse peoples.
          </p>
        </div>
        <div>
          {/* <img src={service-2} /> */}
          <h3>Graphics Design</h3>
          <p>
            Focus on how you can help and benefit your user. Use simple words so
            that you don't confuse people.
          </p>
        </div>
        <div>
          {/* <img src={service-3} /> */}
          <h3>Content Creation</h3>
          <p>
            Focus on how you can help and benefit your user. Use simple words so
            that you don't confuse people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default service;
