import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import WIPcontribute from "../../assets/WIPcontribute.gif";
import "./Contribute.css";

const Contribute = () => {
  return (
    <>
      <Navbar />
      <div className="contribute-container">
        <Sidebar />
        <div className="work-in-progress">
          <img className="work-in-progress-gif" src={WIPcontribute} alt="Work-in-progress"></img>
        </div>
      </div>
    </>
  );
};

export default Contribute;
