import React from 'react'
import "./App.css"
import Router from './Router/Router'
import Navbar from './Components/Navbar'
import { useLocation } from 'react-router'

const App = () => {
  const { pathname } = useLocation()
  return (
    <>
      {
        pathname !== '/' && (
          <Navbar />
        )
      }
      <Router />
    </>
  )
}

export default App