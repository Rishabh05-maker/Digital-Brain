import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Route from './config/Route'
import Logout from './componet/Logout'
import ScreenMode from './componet/ScreenMode/ScreenMode'
import AddButton from './componet/AddButton'

const App = () => {
  return (
    <div>
     
     <RouterProvider router={Route} />

      
    </div>
  )
}

export default App
