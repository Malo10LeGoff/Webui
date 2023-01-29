import React, { useState, useEffect } from "react";
import "./GCPResources.css";
import SideBar from "./SideBar";

function GCPResources() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080")
      .then((data) => {
        console.log(data.json());
        setPosts(data.json()); // Does fetch automatically convert to JSON ?
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="gcp_resources">
      <SideBar></SideBar>
    </div>
  );
}

export default GCPResources;
