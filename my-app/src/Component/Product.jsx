import React from 'react'
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import Productdetail from '../Files/Productdetail'

const Product = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <>
      <Productdetail/>
      </>
    </div>
    
  )
}

export default Product
