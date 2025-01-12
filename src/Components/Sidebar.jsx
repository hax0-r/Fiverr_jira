import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png"
import { Link, useLocation } from 'react-router'
import { MdKeyboardArrowLeft, MdKeyboardCommandKey } from 'react-icons/md'
import { SlidebarContext } from '../Context/MyContext'

const  Sidebar = () => {
  const { pathname } = useLocation()
  const { slidebarOpen, setSlidebarOpen } = useContext(SlidebarContext);

  return (
    <div className={`bg-[#f7f8f9] ${slidebarOpen ? "w-[17rem]" : "w-5"}  transition-all duration-500 fixed top-0 left-0 h-screen`}>
      <div className="bg-white p-1 top-24 absolute -right-3 transition-all duration-500 z-30 hover:bg-[#0c66e4] hover:text-white border inline-block cursor-pointer rounded-full" onClick={() => setSlidebarOpen(!slidebarOpen)}>
        <MdKeyboardArrowLeft className={`text-xl ${slidebarOpen ? "rotate-0" : "rotate-180"}`} />
      </div>
      <div className={`relative  overflow-hidden ${slidebarOpen ? "opacity-100" : "opacity-0"} transition-all duration-500`}>
        <div className="px-5 pt-24">
          <div className="flex items-center  gap-3">
            <img src={logo} alt="" className='h-9' />
            <div className="">
              <h2 className='font-semibold text-lg text-nowrap'>Jira Clone</h2>
              <p className='text-sm text-zinc-700 text-nowrap'>Software project</p>
            </div>
          </div>

          <ul className='mt-10'>
            <li> <Link className={`flex mb-1 items-center gap-1.5 bg-[#e9ebee] p-3 ${pathname === "/board" && "text-[#0c66e4]"}  font-medium rounded-lg transition-all duration-500`}><MdKeyboardCommandKey className='text-lg' />
              Board</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Sidebar