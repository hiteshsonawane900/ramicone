import React, { useEffect, useState } from 'react'
import ButtonPagination from '../Component/ButtonPagination'
import ProductCard from '../Component/ProductCard'
import axios from 'axios'
import ServiceBG from "../Image/ServiceBG.PNG"
import style from "../Component/Productpage.module.css"
import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    Input,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'

const Productdetail = () => {

    const [arr, setArr] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState([])
    const [sortby, setSortby] = useState('')
    const[all,setAll]=useState("")
    const [search,setSearch]=useState('')


    let limit = 3;
    let Length = totalPage.length;
    console.log(Length)


    // <------------------- Search functionality ------------------>

//     const SearchValue=Debouncing(search,1000)

//   function Debouncing(search, delay) {

//     const [debouncedValue, setDebouncedValue] = useState(search);

//     useEffect(() => {
//       const timer = setTimeout(() => {
//         setDebouncedValue(search);
//       }, delay);

//       return () => {
//         clearTimeout(timer);
//       };
//     }, [search, delay]);
//     return debouncedValue;
//   }

// console.log(SearchValue);
// const FetchData_Search=async(SearchValue)=>{
//   try {
//     let Resp=await fetch(`https://voyawander-server.onrender.com/hotels?q=${SearchValue}&_limit=3`)
//     let Data=await Resp.json();
//     setArr(Data);
//     console.log(Data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// <-------------- End Search Functionality ---------------->

// <=================== Display Data -------------------->
    function getUrl(url,sortby) {
        if (sortby) {
            return `${url}&_sort=cost&_order=${sortby}`
        }
        else if(all==""){
            return url
        }
    }

    async function TotalPage() {
        try {
            let Resp = await axios.get(` https://json-data-dyl0.onrender.com/Products`);
            console.log(Resp.data)
            setTotalPage(Resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const FetchData = async () => {
        let Apiurl = getUrl(
            ` https://json-data-dyl0.onrender.com/Products?_page=${page}&_limit=${limit}`,
            sortby
        );
        try {
            let Resp = await axios.get(Apiurl);
            console.log(Resp.data)
            setArr(Resp.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        FetchData()
        TotalPage()
    }, [page])

  return (
    <div>
        <Stack  direction={{ base: 'column', md:'column'}} bgImage={ServiceBG}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontWeight={1000} textAlign={'center'} mt={['20px','20px','20px']} fontSize={[  '2xl', '3xl', '4xl' ]}  >
              <Text  color={'black'} as={'span'}>
                OUR
              </Text>{' '}
               <Text  color={'red'} as={'span'} >
                PRODUCTS
              </Text>{' '}<br/>
            </Heading>
            </Stack></Flex>
            <Text as={'b'} textAlign={'start'} ml={['50px','50px','100px']}  mr={['50px','50px','100px']}>
              RAMICONE ENGINEERS INDIA is a professionally run organization that provides technical sales and services in heavy engineering equipment in India and Abroad. The organization has been deeply involved with the iron and steel industry,fire industry, forging industry, Cement industry and the power transmission industry.
            </Text>
            </Stack>
            <div className={style.Container}>
                {
                    arr?.map((elem, i) => {
                        return <ProductCard key={i} elem={elem}  />
                    })
                }
            </div>
            <ButtonPagination setPage={setPage} page={page} Length={Length} />
    </div>
  )
}

export default Productdetail
