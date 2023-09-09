import React, { useRef, useState } from 'react'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
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
import { BsGithub, BsDiscord, BsPerson, BsLinkedin,BsPhone } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const QuotationForm = () => {
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
        <div>
        <section>
        <Button
            size={'lg'}
            w={['120px','120px',"120px"]}
            m={'auto'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'teal'}
            bg={'teal'}
            _hover={{ bg: 'teal.500' }} onClick={onOpen}>
            Get Quote
          </Button>
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
        </section>
        </div>
  )
}

export default QuotationForm
