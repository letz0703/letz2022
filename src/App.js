import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

const particlesInit = async (main) => {
  await loadFull(main)
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles options={particlesOptions} init={particlesInit} className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div >
    );
  }
}

export default App;
