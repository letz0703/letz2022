import React from "react";
import './FaceRecognition.css';


const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div className="center">
      <div className="dib m10 f2 pr4 ">{box.cellName1}  </div>
      <div className="dib m10 f2 ">  || {box.cellName2}  </div>
      {/* <div className="dib m10 f2 ">or {box.cellName3} </div> */}
      <div className="absolute mt2">
        <img
          id='inputImage'
          src={imgUrl} alt=""
          width="700rem"
          height="auto"
          style={{ marginTop: 40 }}
        />
        <div className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>

    </div >
  )
};

export default FaceRecognition;
