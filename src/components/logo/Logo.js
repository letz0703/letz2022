import React from "react";
import Tilt from 'react-tilt'
import './Logo.css';
import wizard from './wizard.png'

const Logo = () => {
  return (
    <div className='m4 m0'>
      <Tilt className="Tilt ml6 br2 shadow-2" options={{ max: 10 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px", width: "100px" }} src={wizard} alt="logo" /> </div>
      </Tilt>
    </div>
  )

};
export default Logo;
