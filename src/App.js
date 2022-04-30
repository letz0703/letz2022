import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Clarifai from 'clarifai'
// import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'

const app = new Clarifai.App({
  apiKey: '6383ac6b7c8640318023b1a415579848'
})

// todo check clarify id
console.log(Clarifai)
// const app = new Clarifai.App({
//   apiKey: '6383ac6b7c8640318023b1a415579848'
// })

const particlesInit = async (main) => {
  await loadFull(main)
};

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imgUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {

    this.setState({ imgUrl: this.state.input })
    app.models
      .predict(
        "a403429f2ddf4b49b307e318f00e528b",
        // Clarifai.COLOR_MODEL,
        // https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/11/03145751/GENTE-Jenner-03111708.jpg
        this.state.input
      )
      .then(response => console.log('hi', response.outputs[0].data.regions[0].region_info.bounding_box))
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit} className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imgUrl={this.state.imgUrl} />
      </div >
    );
  }
}

export default App;
