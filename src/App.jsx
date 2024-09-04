import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Route from './config/Route'
import Logout from './componet/Logout'
import ScreenMode from './componet/ScreenMode/ScreenMode'

const App = () => {
  return (
    <div>
    
     <RouterProvider router={Route} />

      
    </div>
  )
}

export default App
