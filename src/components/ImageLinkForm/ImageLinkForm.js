import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({ sampleUrl, onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'we detect face on your pictures.'}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input type="text" className="f4 center pa2 bg-light-blue w-70"
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 f4 link ph3 pv2 grow dib white bg-light-purple">Detect</button>
        </div>
      </div>
      <div className="mt4 f3">sample image link: {sampleUrl}</div>
    </div>
  )
};

export default ImageLinkForm;
