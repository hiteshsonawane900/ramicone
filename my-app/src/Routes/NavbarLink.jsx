
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import {
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"
import {  ChevronUpIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'
import{Link as Linking} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const[toggle,setToggle]=useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [arr, setArr] = useState([])
  
  const link = [
    {path:'product',title:"Product"}
   
]
  const links = [
    {path:'discover',title:"Discover"},
    {path:'service',title:"Services"},
    {path:'community',title:"Community"},
    {path:'aboutus',title:"AboutUs"}
   
]

const FetchData = async () => {
  let Apiurl = ` https://json-data-dyl0.onrender.com/Products`
  try {
      let Resp = await axios.get(Apiurl);
      console.log(Resp.data)
      setArr(Resp.data)
  } catch (error) {
      console.log(error)
  }
}
console.log(arr);
useEffect(() => {
        FetchData()
    }, [])
  return (
    
    <Stack direction={'row'} ml={150} spacing={10} height={70}  display="flex" 
    alignItems="center">
      {link.map((elem,i) => (
        <Box key={elem.path}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={'white'}
                 justifyContent={'center'}
               >
            <Menu isOpen={isOpen}>
            <MenuButton
                // variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                aria-label="Courses"
                fontWeight={500}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                color={'black'}
            >
              <Link key={elem.path} activeClass="active" smooth spy to={elem.path}  style={{textDecoration:'none' ,color:'black' ,fontSize:'15px',cursor:'pointer' }} >{elem.title}</Link>
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
            {
                    arr?.map((elem, i) => 
                    // console.log(elem.ProductTitle)
                     <MenuItem as={'b'} color={'black'} _hover={{color:'red.500'}}>
                       <Linking to={`/${elem.id}`} > {elem.ProductTitle}</Linking>
                      </MenuItem>
                    )
                }
             </MenuList>
        </Menu>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
      {links.map((elem,i) => (
        <Box key={elem.path}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                fontSize={'sm'}
                fontWeight={500}
                color={'white'}
                 justifyContent={'center'}
               >
              <Link key={elem.path} activeClass="active" smooth spy to={elem.path}  style={{textDecoration:'none' ,color:'black' ,fontSize:'15px',cursor:'pointer'}} >{elem.title}</Link>
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav

