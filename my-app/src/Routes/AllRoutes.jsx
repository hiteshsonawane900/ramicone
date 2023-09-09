import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from '../Component/Homepage'
import Login from '../Component/Login'
import ProductDetail from '../Component/ProductDetail'

const AllRoutes = () => {
  return (
    <>
     <Routes>
     <Route path='/' element={<Homepage/>}></Route>
     <Route path='/:id/' element={<ProductDetail/>}></Route>
     </Routes> 
    </>
  )
}

export default AllRoutes


