// import React, { useState } from "react";
// import {auth} from "./Firebase"
// import { signInWithEmailAndPassword } from "firebase/auth";
// import "./Login.css";
// const LoginComp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//    e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword (
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;
//       console.log("User Logged in", user);
//     } catch (error) {
//       console.error("Signup error:", error);
//     }
//   };

//   return (
//     <div className='back'>
//     <div className="login-container">
//       <div className="login-header">
//         <h2>Login Here</h2>
//         <hr></hr>
//       </div>
//       <form className="login-form" onSubmit={handleLogin}>
//         <input
//           className="login-input"
//           type="text"
//           placeholder="Username"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           className="login-input"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="login-button" type="submit">
//           Login
//         </button>
//       </form>
//       <div className="login-link">
//         <a href="#">Forgot Password?</a>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default LoginComp;


import React, { useState } from "react";
import {auth} from "./Firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import Discover from "../Image/NavBG1.PNG"
import Homepage from "./Homepage";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const LoginComp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleLogin = async (e) => {
   e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword (
        auth,
        email,
        password
      );
      const user = userCredential.user;
      
      console.log("User Logged in", user);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
// const [showPassword, setShowPassword] = useState(false);

// const handleShowClick = () => setShowPassword(!showPassword);

return (
  <Flex bgImage={Discover}
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack
      flexDir="column"
      mb="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bg="orange.400" />
      <Heading color="orange.400">Welcome</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
        <form onSubmit={handleLogin}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CFaUserAlt color="gray.300" />}
                />
                <Input type="email" placeholder="Email address" 
                          value={email}
          onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  children={<CFaLock color="gray.300" />}
                />
                <Input
                  // type={showPassword ? "text" : "password"}
                  value={password}
          onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  {/* <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? "Hide" : "Show"}
                  </Button> */}
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="orange"
              width="full"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
    <Box>
      New to us?{" "}
      <Link color="orange.400" href="/signup">
        Sign Up
      </Link>
    </Box>
  </Flex>
);
};

export default LoginComp;