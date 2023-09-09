import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
// import {
//   Box,
//   Container,
//   Heading,
//   SimpleGrid,
//   Icon,
//   Text,
//   Stack,
//   HStack,
//   VStack,
// } from '@chakra-ui/react'
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
  ListItem,
  UnorderedList,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

import ProductPage from "./ProductPage";

const ProductDetail=()=>{
  const [arr, setArr] = useState([]);
  const[detail,setDetail]=useState([]);


  // <------------------ Fetch Product Detail Data --------------->
  // async function FetchDetail() {
  //   try {
  //     let Resp = await axios.get(`http://localhost:8080/Products/${id}`);
  //     setArr(Resp.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const { id } = useParams();
  async function FetchDetail() {
    try {
      let Resp = await axios.get(` https://json-data-dyl0.onrender.com/Products/${id}`);
      setArr(Resp.data);
      setDetail(Resp.data.Details)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(detail);
//   const FetchDetail = async () => {
//     let Apiurl =
//         ` http://localhost:8080/Products/${id}`
    
//     try {
//         let Resp = await axios.get(Apiurl);
//         console.log(Resp.data)
//         setArrD(Resp.data)
//     } catch (error) {
//         console.log(error)
//     }
// }
  useEffect(() => {
    FetchDetail();
  }, [id]);

  // <---------------- END



  // <--------------------- Disable Previous Date ---------------------->
  // Replace test data with your own
// const features = Array.apply(null, Array(8)).map(function (x, i) {
//   return {
//     id: i,
//     title: 'Lorem ipsum dolor sit amet',
//     text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
//   }
// })
 
  return (
    <Box>
    <Box p={4} 
    bgImage={arr.ProductImage}
    bg-repeat='no-repeat'
    bg-position='center'
    bgSize={'cover'} height={['200px','200px','350px']} >
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mt={['60px','60px','120px']} opacity={'100%'} >
        <Heading fontSize={['3xl','5xl','5xl']} color={'white'} >{arr.ProductTitle}</Heading>
      </Stack>
    </Box>
    <Box>
    {
                    detail?.map((elem, i) => {
                        return <ProductPage key={i} elem={elem}  />
                    })
                }
    </Box>
  </Box>
  )
}

export default ProductDetail;











