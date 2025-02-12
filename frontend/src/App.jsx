
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Menu from "./components/Menu.jsx";
import Testimonials from './components/Testimonials.jsx';
import Contact from "./components/Contact.jsx";
import Feedback from './components/Feedback.jsx';
import AboutUs from './components/AboutUs.jsx';
import FloatingContact from './components/FloatingContact.jsx';
<<<<<<< HEAD
import FloatingButtons from './components/FloatingContact.jsx';
import { CartProvider } from './components/CartContext';
import OrderModal from './components/OrderModal';
=======
import Footer from './components/Footer.jsx';



>>>>>>> 96db045 (final)


function App() {
  

  return (
    <>
    <Navbar/>
    <Header />
    <AboutUs/>
<<<<<<< HEAD
    <Menu/>
=======
   
    
    <Menu/>
    
>>>>>>> 96db045 (final)
    <Testimonials/>
    <Contact/>
    <Feedback/>
    {/* <FloatingButtons/> */}
    <FloatingContact/>
<<<<<<< HEAD
    {/* <CartProvider>
      <OrderModal/>
    </CartProvider> */}
  
=======
    
    <Footer/>
>>>>>>> 96db045 (final)
     
    </>
  );
}

export default App;