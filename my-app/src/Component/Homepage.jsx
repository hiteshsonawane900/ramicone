import React from 'react'
import Discover from './Discover'
import About from './About'
import Community from './Community'
import Services from './Service'
import Product from './Product'

const Homepage = () => {
  return (
   <>
    <section id="discover"> <Discover/> </section>
    <section id="product"><Product/></section>
    <section id="service"> <Services/> </section>
    <section id="aboutus"> <About/> </section>
    <section id="community"> <Community/> </section>
   </>
  )
}

export default Homepage
