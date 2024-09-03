import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Route from './config/Route'
import PersonalGrowth from './screens/PersonalGrowth'

const App = () => {
  return (
    <div>
      
     <RouterProvider router={Route} />

      
    </div>
  )
}

export default App
