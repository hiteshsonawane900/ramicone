import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import NavbarLink from './Routes/NavbarLink';
import DesktopNav from './Routes/NavbarLink';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './Component/Homepage';
import Productpage from './Component/ProductPage';
import ProductDetail from './Component/ProductDetail';
import Productdetail from './Files/Productdetail';
import ContactForm from './Component/ContactForm';
import Signup from './Component/Signup';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Navbar/>
      <AllRoutes/>
      {/* <Signup/> */}
      </ChakraProvider>
    </div>
  )
}

export default App;
