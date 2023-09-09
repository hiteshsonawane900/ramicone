import { Stack } from "@chakra-ui/react"
import MobileNavItem from "./MobileNavItem"

const links = [
  {path:'product',title:"Product"},
  {path:'discover',title:"Discover"},
  {path:'service',title:"Services"},
  {path:'aboutus',title:"AboutUs"},
  {path:'community',title:"Community"}
   
]


const MobileNav = () => {
    return (
      <Stack  p={4} display={{ md: 'none' }}>
        {links.map((navItem) => (
          <MobileNavItem key={navItem.path} {...navItem} />
        ))}
      </Stack>
    )
  }

  export default MobileNav