import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Bannar from './components/Bannar'
import BannarOne from './components/BannarOne'
import BannarTwo from './components/BannarTwo'
import Footer from './components/Footer'
import BannarSeven from './components/BannarSeven'
import BannarSix from './components/BannarSix'

function App() {
 

  return (
    <>
        <NavBar></NavBar>
      <Bannar></Bannar>
      <BannarOne></BannarOne>
      <BannarTwo></BannarTwo>
      <BannarSix></BannarSix>
      <BannarSeven></BannarSeven>
      <Footer></Footer>
    </>
  )
}

export default App
