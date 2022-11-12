import React from "react";
import "./Homepage.css";
import Header from "./Header";

function sayHello() {
  alert("You clicked me!");
}

function Homepage() {
  return (
    <div className="homepage">
      <Header></Header>
      <div>
        <a className="gcp" href="https://react.school" target="_blank">
          <button className="gcp_button" onClick={sayHello}>
            Start monitoring your GCP energy consumption
          </button>
        </a>
      </div>
    </div>
  );
}

export default Homepage;
