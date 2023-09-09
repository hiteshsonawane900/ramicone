import { ReactNode } from 'react'
import FooterLogo from "../Image/LOGO.PNG"
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react'

 const Logo = () => {
  return(
    <Image src={FooterLogo} w={'60%'}/>
  )
}

export default Logo;
