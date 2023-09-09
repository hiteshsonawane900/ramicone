import React from 'react'
import Boy from "../Image/Boy.PNG"
import {
  Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Input,
    List,
    ListItem,
    Stack,
    Text,
    UnorderedList,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import Service from "../Image/Service.PNG"
  import ServiceBG from "../Image/ServiceBG.PNG"
import Testimonial from '../Testimonial/Testimonial'
import TestimonialContent from '../Testimonial/TestimonialContent'
import TestimonialHeading from '../Testimonial/TestimonialHeading'
import TestimonialText from '../Testimonial/TestimonialText'
  
  export default function Services() {
    return (
      <Box>
        <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} cursor={'pointer'}>
        <Heading fontWeight={1000} textAlign={'start'} mt={['20px','20px','20px']} fontSize={[  '2xl', '3xl', '4xl' ]} >
              <Text  color={'black'} as={'span'}>
                OUR
              </Text>{' '}
               <Text  color={'red'} as={'span'} >
                SERVICES
              </Text>{' '}<br/>
            </Heading>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mechanical services</TestimonialHeading>
              <TestimonialText>
              <UnorderedList>
              <ListItem>Mechanical assembly of machinery and <br/> Industrial plants</ListItem>

              <ListItem>Steelwork construction</ListItem>

              <ListItem>Aerotechnical systems and filter technology</ListItem>

              <ListItem>Pipeline construction, media lines in C steels, alloyed <br/> and high-alloy steels</ListItem>

              <ListItem>Installation of hydraulic & pneumatic systems</ListItem>

              <ListItem>Welding works</ListItem>

              <ListItem>Insulation works</ListItem>
              </UnorderedList>
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Electrical services</TestimonialHeading>
              <TestimonialText >
              <UnorderedList>
              <ListItem>Installation of cable support systems & protective conduits</ListItem>

              <ListItem>Wiring & Connection Work to I/O Checks</ListItem>

              <ListItem>Laying control, trailing & power cables</ListItem>

              <ListItem>Laying earthing & equipotential bonding systems</ListItem>

              <ListItem>ISwitch cabinet manufacturing</ListItem>

              <ListItem> Realisation of measurement & control systems</ListItem>

              <ListItem>Work on transformer & generator installations</ListItem>
              </UnorderedList>
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Fire Fighting System</TestimonialHeading>
              <TestimonialText>
              <UnorderedList>
              <ListItem>Refilling fire extinguisher</ListItem>

              <ListItem> Installation of Electric cabinet fire  suppression</ListItem>

              <ListItem>Installation of Kitchen suppression system </ListItem>

              <ListItem>Installation of Fire hydrant system</ListItem>

              <ListItem> Installation of Sprinkler system</ListItem>

              <ListItem>Installation of Modular system</ListItem>

              <ListItem> Installation of Insulation works</ListItem>
              </UnorderedList>
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
      
      </Box>
    )
  }
