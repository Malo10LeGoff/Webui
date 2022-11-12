import React from "react";
import "./Homepage.css";
import Header from "./Header";

function sayHello() {}

function Homepage() {
  return (
    <div className="homepage">
      <Header></Header>
      <div>
        <a className="gcp" href="./gcp_resources">
          <button className="gcp_button" onClick={sayHello}>
            Start monitoring your GCP energy consumption
          </button>
        </a>
      </div>
    </div>
  );
}

export default Homepage;
