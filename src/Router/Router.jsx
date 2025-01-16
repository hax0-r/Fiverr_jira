import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Pages/Login'
import Board from '../Pages/Board'
import PrivateRoutes from './PrivateRoutes'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/board" element={<Board />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Router