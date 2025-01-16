import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import profilePhoto from "../assets/profilePhoto.jpg"
import logo from "../assets/logo.png"
import { USER_DATA } from '../Data/DATA'

const Navbar = () => {
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const profileRef = useRef(null)
    const { state } = useLocation();
    const role = state?.role || 'user'; // Default to 'user' if no role is provided

    const user = USER_DATA.find(user => user.role.toLowerCase() === role.toLowerCase());

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsOpenProfile(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem("isUserLogin")
    }

    return (
        <>
            <div className='flex items-center fixed top-0 left-0 w-full bg-white z-30 justify-between p-3 md:px-10 shadow-md'>
                <Link to={"/dashboard"} className='text-zinc-600 font-semibold text-xl flex items-center gap-2.5'> <img src={logo} className='h-8' alt="" /> Jira Clone</Link>
                <div
                    onClick={() => setIsOpenProfile(!isOpenProfile)}
                    className="w-12 h-12 cursor-pointer border-2 border-white transition-all duration-500 hover:border-blue-600 rounded-full overflow-hidden"
                >
                    <img src={profilePhoto} className='w-full h-full' alt="" />
                </div>
            </div>
            {
                isOpenProfile && (
                    <div
                        ref={profileRef}
                        className="p-2 w-[7rem] myShadow fixed fadeIn right-14 top-16 z-30 bg-white rounded-md"
                    >
                        <img src={profilePhoto} className='w-full px-2 h-full mx-auto rounded-full' alt="" />
                        <h2 className='font-medium p-1 text-center text-sm text-zinc-800 !leading-tight'> {user ? `${user.firstName} ${user.lastName}` : "John Smith"}</h2>
                        <div className="w-full border-b my-1"></div>
                        <Link onClick={logoutHandler} to={"/"} className="bg-red-200 transition-all duration-500 hover:bg-red-300 block text-red-800 text-center p-2 rounded-md mt-2">
                            Logout
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default Navbar
