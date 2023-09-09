import { Box, Collapse, Icon, Stack, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-scroll";

const MobileNavItem = ({path,title}) => {
    const { isOpen, onToggle } = useDisclosure()
    
    const links = [
        {path:'product',title:"Product"},
        {path:'discover',title:"Discover"},
        {path:'service',title:"Services"},
        {path:'aboutus',title:"AboutUs"},
        {path:'community',title:"Community"}
        
    ]

    return (
      <Stack spacing={4} onClick={onToggle}>
         <Box
          py={2}
          as="a"
          justifyContent="space-between"
          alignItems="center"
          fontWeight={'500'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Link activeClass="active" smooth spy to={path} key={path} style={{textDecoration:'none' ,color:'black',cursor:'pointer'}} >{title}</Link>
     </Box>
  
      </Stack>
    )
  }

  export default MobileNavItem