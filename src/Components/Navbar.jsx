import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import profilePhoto from "../assets/profilePhoto.jpg"

const Navbar = () => {
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const profileRef = useRef(null)

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

    return (
        <>
            <div className='flex items-center fixed top-0 left-0 w-full bg-white z-10 justify-between p-3 md:px-10 shadow-md'>
                <Link to={"/dashboard"} className='text-zinc-600 font-semibold text-xl'>Jira Clone</Link>
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
                        className="p-2 w-[7rem] myShadow absolute fadeIn right-14 top-16 z-20 bg-white rounded-md"
                    >
                        <img src={profilePhoto} className='w-full px-2 h-full mx-auto rounded-full' alt="" />
                        <h2 className='font-medium p-1 text-center text-lg text-zinc-600'>Jessie</h2>
                        <div className="w-full border-b my-1"></div>
                        <Link to={"/"} className="bg-red-200 block text-red-800 text-center p-2 rounded-md mt-2">
                            Logout
                        </Link>
                    </div>
                )
            }
        </>
    )
}

export default Navbar
