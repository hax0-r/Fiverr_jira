import React, { useContext, useState } from 'react'
import "./App.css"
import Router from './Router/Router'
import Navbar from './Components/Navbar'
import 'lenis/dist/lenis.css'
import { useLocation } from 'react-router'
import { ToastContainer } from 'react-toastify';
import Lenis from 'lenis'
import Sidebar from './Components/Sidebar'
import { SlidebarContext } from './Context/MyContext'

const App = () => {
  const { pathname } = useLocation()
  const { slidebarOpen, setSlidebarOpen } = useContext(SlidebarContext);


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

      <div className="flex w-full">
        <Sidebar />
        <div className={`pt-24 overflow-hidden ${slidebarOpen ? "w-[calc(100%-18rem)]" : "w-[calc(100%-2rem)]"} transition-all duration-500  ml-auto`}>
          <Router />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App