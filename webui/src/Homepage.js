import "./Homepage.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

function sayHello() {
  var results = axios.get("http://localhost:5000/users");
  console.log(results);
}

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
      <div>
        <button className="gcp_button" onClick={sayHello}>
          Get one of your users
        </button>
      </div>
    </div>
  );
}

export default Homepage;
