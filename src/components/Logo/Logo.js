import React from "react";
// import Tilt from "react-tilt"
import "./Logo.css"
import wizard from "./wizard.png"

const Logo = () => {
  return (
    <div className="m4 mb4 ">
      {/* <Tilt className="Tilt ml6 br2 shadow-2 center" */}
      <div className="ml6 br2 shadow-2 center"
        options={{ max: 10 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa3 bg-orange">
          <img src={wizard} alt="logo"
            style={{ paddingTop: '5px', width: 175 }}
          />
        </div>
      </div>
    </div>
  )
};

export default Logo;
