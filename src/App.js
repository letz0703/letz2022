import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main)
  }, [])

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

export default App;
