import React from 'react'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  SimpleGrid,
  ListItem,
  UnorderedList,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'
import QuotationForm from './QuotationForm';

const ProductPage = ({ elem }) => {
    console.log(elem);
  return (
    <Container maxW={'6xl'} >
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10}}
      // py={{ base: 16, md: 16 }}
      py={['10','10','10']}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '4xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1,
            }}>
            {elem.heading}
          </Text>
        </Heading>
        <UnorderedList as={'b'}>
        {elem.type.map((detail)=>{
          return <ListItem fontSize= {'17px'}
      fontWeight= {'bold'}>{detail}</ListItem>
        })}
        </UnorderedList>
        <QuotationForm/>
      </Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <Image
            alt={'Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={elem.Image}
          />
        </Box>
      </Flex>
    </Stack>
  </Container>
  )
}

export default ProductPage
