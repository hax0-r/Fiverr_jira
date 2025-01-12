import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Pages/Login'
import Board from '../Pages/Board'

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </div>
    )
}

export default Router