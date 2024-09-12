import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoLogOutSharp } from "react-icons/io5";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
} from '@chakra-ui/react'
import { use } from 'framer-motion/client';



function Logout() {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )
 

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.clear()
        navigate('/login')
    }

  
    return (
        <>
            <Button

                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
                <IoLogOutSharp /> Logout
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}

           
                <ModalContent className='bg-white max-w-[300px] h-[0px] text-center mt-[200px] items-center mx-auto p-2'>
                       <img src="https://media1.tenor.com/m/NiBD3Jj07AYAAAAC/monkey-laptop.gif" alt="" />
                    <div className='flex justify-between p-2 gap-[180px]'>
                    <ModalHeader className='text-red-500'>Alert!</ModalHeader>
                    <ModalCloseButton className='text-red-500' />
                    </div>


                    <ModalBody >
                        <Text className='text-blue-400 italic text-sm'> Are You sure you want to logout ?</Text>
                    </ModalBody>
                    <ModalFooter >
                       <Button className='border text-black border-1 bg-slate-100 text-sm p-1 text-center '  onClick={handleLogout}> Logout  </Button>
                    </ModalFooter>
                   

                </ModalContent> 
       
            </Modal>
        </>
    )
}



export default Logout

