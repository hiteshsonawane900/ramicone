import { Text, useColorModeValue } from "@chakra-ui/react"

const TestimonialText = (props) => {
    const { children } = props
  
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'m'}>
        {children}
      </Text>
    )
  }

export default TestimonialText;