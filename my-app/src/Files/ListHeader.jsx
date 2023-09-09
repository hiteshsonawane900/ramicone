import { ReactNode } from 'react'

import {
  Text
} from '@chakra-ui/react'
const ListHeader = ({children} ) => {
  return (
    <Text as='b' color={'white'} fontSize={'20px'} mb={5} mt={5}>
      {children}
    </Text>
  )
}
export default ListHeader