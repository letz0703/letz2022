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
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    const app = new Clarifai.App({
      apiKey: '6383ac6b7c8640318023b1a415579848'
    })
    this.setState({ imageUrl: this.state.input })
    console.log("click");
    app.models
      .predict(
        //     // Clarifai.FACE_DETECT_MODEL,
        //     // replace above w/ below id of clarify
        "a403429f2ddf4b49b307e318f00e528b",
        // this.state.input
        "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp"
      )
      .then(response => console.log('hi', response))
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
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      </div >
    );
  }
}

export default App;
