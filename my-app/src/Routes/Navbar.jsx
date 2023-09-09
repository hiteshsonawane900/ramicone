
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
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import Logo from "../Image/LOGO.PNG"
import Discover from "../Image/NavBG1.PNG"
import DesktopNav from './NavbarLink'
import MobileNav from '../Files/MobileNav'
import Nav from "../Image/NavBG12.PNG"
import { Link } from 'react-router-dom'
import Homepage from '../Component/Homepage'
import {Routes,Route} from "react-router-dom"
import ContactForm from '../Component/ContactForm'

const Navbar=()=>{
  const { isOpen,onToggle} = useDisclosure()
  return (
    <Box>
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton color={'white'} bgColor={'teal'}
          _hover={{bgColor:'red.400'}}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            // variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
    <Link to='/'>  <Image src={Logo} cursor={'pointer'} w={150} h={45} mt={3} ml={[0,0,20]}/> </Link>
    
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
     
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <ContactForm />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}


export default Navbar;


