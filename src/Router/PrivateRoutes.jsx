import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PrivateRoutes = () => {

    let checkLogin = localStorage.getItem("isUserLogin")

    return (
        <>
            {
                checkLogin ? <Outlet /> : <Navigate to={"/"} />
            }
        </>
    )
}

export default PrivateRoutes