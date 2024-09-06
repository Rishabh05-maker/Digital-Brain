import React from 'react'
import { SiDarkreader } from "react-icons/si";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
import ScreenMode from './ScreenMode/ScreenMode'
import Logout from './Logout'

const UserProfile = () => {
  return (
    <div>
        <Menu>
  <MenuButton as={Button} className= '  p-1  border bg-white border-none w-[100px] ' >
    Profile
  </MenuButton>
  <MenuList className= ' bg-white  text-black w-[100%] '>
    <MenuGroup className='p-2 ' >
      <MenuItem className='ml-2 mr-2 font-serif text-[20px] underline '> Rishabh  </MenuItem>
      <MenuItem className='ml-2 text-sm p-1'> <SiDarkreader/> <ScreenMode/></MenuItem>
      <MenuItem className='ml-2 text-sm p-1'> <Logout/>  </MenuItem>

    </MenuGroup>
    <MenuDivider />
    
  </MenuList>
</Menu>

    </div>
  )
}

export default UserProfile
