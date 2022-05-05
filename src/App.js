//reference sites
//
import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Clarifai from 'clarifai'
import Navigation from './components/Navigation/navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

const app = new Clarifai.App({
  apiKey: '6383ac6b7c8640318023b1a415579848'
})

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
      imgUrl: '',
      box: {},
      route: 'signIn',
      sampleUrl: 'https://tinyurl.com/y4gt429u',
    }
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    const cellName1 = data.outputs[0].data.regions[0].data.concepts[0].name
    const cellName2 = data.outputs[0].data.regions[0].data.concepts[1].name
    const cellName3 = data.outputs[0].data.regions[0].data.concepts[2].name
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
      ,
      cellName1, cellName2, cellName3
    }
  }

  displayFaceBox = (box) => {
    // console.log(box) to FaceRecognition
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {

    this.setState({ imgUrl: this.state.input })
    app.models
      .predict(
        'e466caa0619f444ab97497640cefc4dc',
        // https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/11/03145751/GENTE-Jenner-03111708.jpg
        this.state.input
      )
      .then(response => {
        this.displayFaceBox(
          this.calculateFaceLocation(response))
      })
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  onRouteChange = (route) => {
    this.setState({ route: route })
  }

  render() {
    const { imgUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit} className='particles' />
        <Navigation onRouteChange={this.onRouteChange} state={route} />
        {route === 'home'
          ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              sampleUrl={this.state.sampleUrl}
            /> <h1>It should be...</h1>
            <FaceRecognition imgUrl={imgUrl} box={box} />
          </div>
          :
          route !== 'signIn'
            ? <Register onRouteChange={this.onRouteChange} />
            : <SignIn onRouteChange={this.onRouteChange} />
        }
      </div >
    );
  }
}

export default App;
