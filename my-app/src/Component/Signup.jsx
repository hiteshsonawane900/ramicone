
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
import { MdPhone } from 'react-icons/md';
  
import { BsPerson, BsPhone } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

import { useState } from "react";

function Signup() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Add your email sending logic here
  };

  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Box>
        <Button onClick={onOpen}>Open Contact Form</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
              <Box>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading>Contact</Heading>
                      <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                        Fill up the form below to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <a href="tel:+91-902-926-3481">
                            <Button
                              size="md"
                              height="48px"
                              width="200px"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ color: "red.400" }}
                              leftIcon={<MdPhone color="#1970F1" size="20px" />}
                            >
                              +91-9029263481
                            </Button>
                          </a>
                          <a href="mailto:futureengineersindia@gmail.com">
                            <Button
                              size="md"
                              height="48px"
                              width="200px"
                              variant="ghost"
                              color="#DCE2FF"
                              _hover={{ color: "red.400" }}
                              leftIcon={<MdOutlineEmail color="#1970F1" size="20px" />}
                            >
                              futureengineersindia@gmail.com
                            </Button>
                          </a>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ color: "red.400" }}
                            leftIcon={<MdOutlinePhone color="#1970F1" size="20px" />}
                          >
                            Thane, Maharashtra, India
                          </Button>
                        </VStack>
                      </Box>
                      <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          color={"white"}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<MdFacebook size="28px" />}
                        />
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          color={"white"}
                          _hover={{ bg: "#0D74FF" }}
                          icon={<BsLinkedin size="28px" />}
                        />
                        <a href="tel:+91-902-926-3481">
                          <IconButton
                            aria-label="discord"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            href="tel:902-926-3481"
                            color={"white"}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<BsPhone size="28px" />}
                          />
                        </a>
                      </HStack>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <Flex>
                          <VStack spacing={5}>
                            <form onSubmit={sendEmail}>
                              <FormControl id="name">
                                <FormLabel>Your Name</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement pointerEvents="none">
                                    <BsPerson color="gray.800" />
                                  </InputLeftElement>
                                  <Input type="text" size="md" name="name" required />
                                </InputGroup>
                              </FormControl>
                              <FormControl id="email">
                                <FormLabel>Email</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement pointerEvents="none">
                                    <MdOutlineEmail color="gray.800" />
                                  </InputLeftElement>
                                  <Input type="email" size="md" name="email" required />
                                </InputGroup>
                              </FormControl>
                              <FormControl id="contact">
                                <FormLabel>Contact</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement pointerEvents="none">
                                    <MdOutlinePhone color="gray.800" />
                                  </InputLeftElement>
                                  <Input type="number" size="md" name="contact" required />
                                </InputGroup>
                              </FormControl>
                              <FormControl id="message">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                  borderColor="gray.300"
                                  name="message"
                                  _hover={{
                                    borderRadius: "gray.300",
                                  }}
                                  placeholder="Message"
                                />
                              </FormControl>
                              <FormControl id="submit" float="right">
                                <Button
                                  type="submit"
                                  variant="solid"
                                  bg="#0D74FF"
                                  color="white"
                                  _hover={{}}
                                >
                                  Send Message
                                </Button>
                              </FormControl>
                            </form>
                          </VStack>
                        </Flex>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              {/* You can add additional buttons or actions here */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Container>
  );
}

export default Signup;

