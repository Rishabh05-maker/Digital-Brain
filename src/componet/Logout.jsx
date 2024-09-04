import React from 'react'
import { Link } from 'react-router-dom'

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

    return (
        <>
            <Button

                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
            >
                Logout
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}

           
                <ModalContent className='bg-white max-w-[500px] text-center mt-[200px] mx-auto p-2'>

                    <div className='flex justify-between'>
                    <ModalHeader className='text-red-500'>Alert!</ModalHeader>
                    <ModalCloseButton className='text-red-500' />
                    </div>


                    <ModalBody >
                        <Text className='text-blue-400 italic text-mm'>Do you really want to logout ?  </Text>
                    </ModalBody>
                    <ModalFooter>
                       <Button className='border text-black border-1 bg-slate-100 text-sm p-1 '  onClick={onClose}> <Link to={"/login"}>Logout</Link>  </Button>
                    </ModalFooter>
                   

                </ModalContent> 
       
            </Modal>
        </>
    )
}

export default Logout

