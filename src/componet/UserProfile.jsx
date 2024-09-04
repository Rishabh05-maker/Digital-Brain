import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'

const UserProfile = () => {
  return (
    <div>
        <Menu>
  <MenuButton as={Button} className= 'border bg-white p-0 w-[100px] ' >
    Profile
  </MenuButton>
  <MenuList>
    <MenuGroup >
      <MenuItem>Name</MenuItem>
      <MenuItem>Log Out</MenuItem>
    </MenuGroup>
    <MenuDivider />
    
  </MenuList>
</Menu>

    </div>
  )
}

export default UserProfile
