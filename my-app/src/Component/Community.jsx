

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Button,
  Link
} from '@chakra-ui/react'
import Logo from '../Files/Logo'
import { Link as Linked} from 'react-scroll'
import ListHeader from '../Files/ListHeader'
import ServiceBG from "../Image/ServiceBG.PNG"
import Testimonial from '../Testimonial/Testimonial'
import TestimonialHeading from '../Testimonial/TestimonialHeading'
import TestimonialContent from '../Testimonial/TestimonialContent'
import TestimonialText from '../Testimonial/TestimonialText'
import { MdPhone } from 'react-icons/md'

export default function Community() {

  return (
    <Box>
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
        <Heading fontWeight={1000} textAlign={'center'} mt={['20px','20px','20px']} fontSize={[  '2xl', '3xl', '4xl' ]}  >
              <Text  color={'black'} as={'span'}>
                OUR CLIENT
              </Text>{' '}
               <Text  color={'red'} as={'span'} >
                SPEAKS
              </Text>{' '}<br/>
            </Heading>
          <Text as={'b'} color={'red'}>WE HELP TO GET SOLUTIONS!</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText >
              We won't let you settle for a framework that can't mechanize your entire operations and meet your prerequisites.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Quality Products</TestimonialHeading>
              <TestimonialText >
              Ensure your Engineering arrangements essentially and consistently meet your business needs – with assistance from Ramicone Service and Support.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              Ramicon Engineer's not only focus on successful delivery of a project but beyond that, in delighting a customer.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>

      <Container as={Stack} maxW={'full'} py={10} bgColor={'teal'} >
        <SimpleGrid
          templateColumns={{ sm:'1fr 1fr', md:'2fr 1fr 1fr 1fr 1fr' }}
          // templateColumns='repeat(5, 1fr)'
          spacing={8}>
          <Stack spacing={6} mt={'16px'} cursor={'pointer'}>
            <Box>
              <Logo />
            </Box>
            <Text textAlign={'start'} fontSize={{ base: 'md', lg: 'lg' }} color={'white'} fontWeight={500} >We aim to build a strong and profitable service by delivering to our customer a professional services that is always fair, efficient helpful and responsive.</Text>
          </Stack>
          <Stack align={'flex-start'} display={'flex'}  mt={['-20px',0,0]}   >
            <ListHeader>About Us</ListHeader>
            <Text  textAlign={'start'} fontSize={'16px'} color={'white'}   cursor={'pointer'}>
            We are leading supplier and service provider for industrial plant and machinery, electrical components, automobile solution and fire fighting systems.
            </Text>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>Quick Links</ListHeader>
            <Box as="a" fontSize={'16px'} color={'white'}   cursor={'pointer'}> 
             <Linked key={'product'} activeClass="active" smooth spy to={'product'} >
              Ramicon's Products
              </Linked>
            </Box>
            <Box as="a" fontSize={'16px'} color={'white'}   cursor={'pointer'}>
            <Linked key={'aboutus'} activeClass="active" smooth spy to={'aboutus'} >
              About us
            </Linked>
            </Box>
            <Box as="a" fontSize={'16px'} color={'white'}  cursor={'pointer'}>
            <Linked key={'discover'} activeClass="active" smooth spy to={'discover'} >
              Home 
              </Linked>
            </Box>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>Information</ListHeader>
            <Box as="a" fontSize={'16px'} color={'white'}   cursor={'pointer'}>
              <Linked key={'community'} activeClass="active" smooth spy to={'community'}>
              Why Ramicone?
              </Linked>
            </Box>
            <Box as="a" fontSize={'16px'} color={'white'}  cursor={'pointer'}>
            <Linked key={'service'} activeClass="active" smooth spy to={'service'} >
              Services
            </Linked>
            </Box>
          </Stack>
          <Stack align={'flex-start'} >
            <ListHeader>Reach us</ListHeader>
            <Box as="a" fontSize={'16px'} color={'white'} cursor={'pointer'}>
            <Text  textAlign={'start'} fontSize={'16px'} color={'white'}   cursor={'pointer'}>
              Nisarg CHS 5B Tisgaon,Kalyan, <br/>Thane, Maharashtra 421306
            </Text>
            </Box>
            <a href='mailto:futureengineersindia@gmail.com'>
              <Box as="a" fontSize={'16px'} color={'white'} cursor={'pointer'}>
              futureengineersindia@gmail.com
            </Box>
            </a>
            <a href='tel:+91-902-926-3481'>
            <Box as="a" fontSize={'16px'}color={'white'}  cursor={'pointer'}>
              +91 9029263481
            </Box>
            </a>
          </Stack>
        </SimpleGrid>

        <Text mt={'15px'} fontSize={'15px'} color={'white'} fontWeight={500} >@2023 Ramicone Engineers India Pvt Ltd.All rights reserved</Text>
      </Container>
    </Box>
  )
}