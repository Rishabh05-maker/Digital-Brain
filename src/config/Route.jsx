import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../screens/LoginPage'
import Ragistration from '../screens/Ragistration'
import Home from '../screens/Home'
import PersonalGrowth from '../screens/PersonalGrowth'
import ProductivityPlanning from '../screens/ProductivityPlanning'
import IntrestGoals from '../screens/IntrestGoals'

const Route = createBrowserRouter([
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        path: "/registration",
        element: <Ragistration/>
    },

    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/personalgrowth",
        element: <PersonalGrowth/>
    },
    {
        path: "/productivityplanning",
        element: <ProductivityPlanning/>
    },
    {
        path: "/intrestgoals",
        element: <IntrestGoals/>
    }





])

export default Route
