import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../screens/LoginPage'
import Ragistration from '../screens/Ragistration'
import Home from '../screens/Home'
import PersonalGrowth from '../screens/PersonalGrowth'
import ProductivityPlanning from '../screens/ProductivityPlanning'
import IntrestGoals from '../screens/IntrestGoals'
import Auth from '../componet/authentication/Auth'
import WithoutLogin from '../componet/Authentication/WithoutLogin'



const Route = createBrowserRouter([
    {
        path:"/login",
        element: <WithoutLogin> <LoginPage/> </WithoutLogin> 
    },
    {
        path: "/registration",
        element: <WithoutLogin><Ragistration/></WithoutLogin> 
    },

    {
        path: "/home",
        element: <Auth><Home/></Auth> 
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
