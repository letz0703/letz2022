import React from "react";

const FaceRecognition = ({ imgUrl }) => {
  return (
    <div className="center">
      <div className="absolute mt2">
        <img src={imgUrl} alt=""
          width="700rem"
          height="auto"
        />
      </div>
    </div>
  )
};

export default FaceRecognition;
