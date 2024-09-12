import React from 'react';
import UserProfile from './UserProfile';
import Logout from './Logout';
import ScreenMode from './ScreenMode/ScreenMode';

const Header = () => {
  return (
    <div className="header w-full px-4 sm:px-6 lg:px-8">
      <header className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 bg-opacity-75">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-2xl font-serif">Personal Home</h1>
          <p className="font-serif text-sm">Organize everything in your life in one place.</p>
        </div>

        <div className="flex items-center space-x-4">
          <UserProfile />
          {/* <ScreenMode />
          <Logout /> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
