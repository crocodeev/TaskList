import { createBrowserRouter } from "react-router-dom"
import AdminPage from "../pages/admin"
import CommonPage from "../pages/common"
import LoginPage from "../pages/login"
import React from "react"




const router = createBrowserRouter([
    {
        path: '/',
        element: <CommonPage />
    },
    {
        path: '/admin',
        element: <AdminPage />    
    },
    {
        path: '/login',
        element: <LoginPage />    
    }
])

export default router