import React from 'react'
import "./App.css"
import Router from './Router/Router'
import Navbar from './Components/Navbar'
import 'lenis/dist/lenis.css'
import { useLocation } from 'react-router'
import { ToastContainer } from 'react-toastify';
import Lenis from 'lenis'

const App = () => {
  const { pathname } = useLocation()


  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      {
        pathname !== '/' && (
          <Navbar />
        )
      }
      <Router />
      <ToastContainer />
    </>
  )
}

export default App