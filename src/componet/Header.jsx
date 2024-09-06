import React from 'react'
import UserProfile from './UserProfile'
import Logout from './Logout'
import ScreenMode from './ScreenMode/ScreenMode'


const Header = () => {
  return (
    <div>
      <header className="header ">
        <div>
          <h1 className='text-2xl font-serif'> Personal Home</h1>
          <p className='font-serif text-sm'>Organize everything in your life in one place.</p>

        </div>

        <div className='items-center'>
          <UserProfile/>
          {/* <ScreenMode/> */}
          {/* <Logout/> */}
        </div>



      </header>

    </div>
  )
}

export default Header
