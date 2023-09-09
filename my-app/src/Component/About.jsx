
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Image,
  Flex,
  Button ,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlineContactPhone,
  MdOutlinePhone,
  MdProductionQuantityLimits,
  MdDriveFileRenameOutline,
} from 'react-icons/md'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'
import ServiceBG from "../Image/ServiceBG.PNG"
import Service from "../Image/Service.PNG"
import Gear from "../ImageProduct/gears.gif"
export default function About() {
  const form=useRef();
  const { isOpen,onOpen, onClose} = useDisclosure()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4mak4dk', 'template_irbbj3n', form.current, 'LMc5CGgWVrpF7j08C')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
  return (
    
    <Box>
    <Box p={4} bgImage={ServiceBG}>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} bgImage={ServiceBG}>
         <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={Gear}
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading  fontWeight={1000} fontSize={[  '2xl', '3xl', '5xl' ]} textAlign={'start'}>
              <Text color={'black'} as={'span'} >
                ABOUT 
              </Text>{' '}
               <Text color={'red'} as={'span'}>
                US 
              </Text>{' '}
            </Heading>
            <Text fontWeight={600} textAlign={'start'} color={'black'}>
            RAMICONE ENGINEERS INDIA has a strong customer support and service that is the essence of the organization. RAMICONE ENGINEERS INDIA works with the customer from the project concept and development stage, through the selection of equipment, purchasing, supply and up to the installation and commissioning of the equipment at the customer site. Once the plant is commissioned, RAMICONE ENGINEERS INDIA continues to support the customer through after sales service support and warehousing of critical parts in complete coordination of the OEM.
            </Text>
            <Text fontWeight={600} textAlign={'start'}   color={'black'}>
            RAMICONE ENGINEERS INDIA is a professionally run organization that provides technical sales and services in heavy engineering equipment in India and Abroad. The organization has been deeply involved with the iron and steel industry,fire industry, forging industry, Cement industry and the power transmission industry.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={0} display={'flex'} justifyContent={'space-evenly'} ml={[0,0,-20]}>
              <Box>
                <Text as={'b'} fontWeight={1000} direction={{ base: 'column', md: 'column' }} color={'red'} fontSize={[  '2xl', '3xl', '4xl' ]} >
                  100+
                </Text>
                <Text fontWeight={800} fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
                 Happy <br/> customers
                </Text>
              </Box>
              <Box>
                <Text as={'b'} fontWeight={1000} direction={{ base: 'column', md: 'column' }} color={'red'} fontSize={[  '2xl', '3xl', '4xl' ]}  >
                  5+
                </Text>
                <Text fontWeight={800} fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
                  Export<br/> to countries
                </Text>
              </Box>
              <Box>
                <Text as={'b'} fontWeight={1000} direction={{ base: 'column', md: 'column' }} color={'red'} fontSize={[  '2xl', '3xl', '4xl' ]}>
                  5+
                </Text >
                <Text fontWeight={800} fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
                  Years of <br/> Experience
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
    <Box bg={'teal'} borderRadius={'20px'} pt={'60px'} pb={'60px'}maxW={'6xl'} m={'auto'} >
       <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} alignItems={'center'}  >
      <Heading fontWeight={1000} fontSize={[  '2xl', '3xl', '3xl' ]} textAlign={'center'}>
              <Text color={'white'} as={'span'}  >
              ARE YOU READY FOR A BETTER, 
              </Text><br/>{' '}
               <Text color={'black'} as={'span'}  >
               MORE PRODUCTIVE BUSINESS?
              </Text>{' '}
            </Heading>
        <Text fontWeight={500} color={'white'}>
        Stop worrying about engineering equipment problems. Focus on your business. Let us provide the one stop solutions you deserve.
        </Text>
        <Button onClick={onOpen}
        w={['50%','50%','17%']}
       borderRadius={10}
       color={'white'}
       bgColor={'red'}
       pl={'30px'}
       pr={'30px'}
       _hover={{bgColor:'red.500'}}
        >Get Started</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Box>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get Quote</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
        <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
         <Flex>
             <Box 
               bg="#02054B"
               color="white"
               borderRadius="lg"
               m={{ sm: 4, md: 16, lg: 10 }}
               p={{ sm: 5, md: 5, lg: 16 }}>
               <Box p={4} >
                 <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                   <WrapItem>
                     <Box bg="white" borderRadius="lg">
                       <Box m={8} color="#0B0E3F">
                        <Flex>
                         <VStack spacing={5}>
          <form ref={form} onSubmit={sendEmail}>
            <FormControl ref={form} onSubmit={sendEmail}>
                          <FormControl id="name" >
                            <FormLabel>Product Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                              <MdDriveFileRenameOutline/>
                              </InputLeftElement>
                              <Input type="text" size="md" name="name" required />
                            </InputGroup> 
                           </FormControl> 
                           <FormControl id="name" > 
                            <FormLabel>Product Description</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              name="message"
                              _hover={{
                                borderRadius: 'gray.300',
                              }}
                              placeholder="description"
                            />
                          </FormControl>
                          <FormControl id="name" >
                            <FormLabel>Quantity</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdProductionQuantityLimits/>
                              </InputLeftElement>
                              <Input type="number" size="md" name="quantity" required />
                            </InputGroup> 
                           </FormControl> 
                           <FormControl id="name" >
                            <FormLabel>Contact</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement pointerEvents="none">
                                <MdOutlinePhone color="gray.800" />
                              </InputLeftElement>
                              <Input type="number" size="md" name="contact" required />
                            </InputGroup> 
                           </FormControl> 
                          <FormControl id="name" float="right">
                            <Button type="submit" variant="solid" bg="#0D74FF" color="white" _hover={{}} >
                              Get Quote
                            </Button>
                        </FormControl>
                        </FormControl>
          </form>
          
                         </VStack>
                         </Flex>
                       </Box>
                     </Box>
                   </WrapItem>
                 </Wrap>
               </Box>
             </Box>
           </Flex>
         </Container>
         </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
        </Box>
      </Modal>
      </Stack>
      </Box>
    </Box>
  )
}
