import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Pages/Login'
import DashBoard from '../Pages/DashBoard'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </div>
    )
}

export default Router