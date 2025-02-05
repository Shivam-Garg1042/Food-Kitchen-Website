
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Menu from "./components/Menu.jsx";
import Testimonials from './components/Testimonials.jsx';
import Contact from "./components/Contact.jsx";
import Feedback from './components/Feedback.jsx';
import AboutUs from './components/AboutUs.jsx';
import FloatingContact from './components/FloatingContact.jsx';
import FloatingButtons from './components/FloatingContact.jsx';
import { CartProvider } from './components/CartContext';
import OrderModal from './components/OrderModal';


function App() {
  

  return (
    <>
    <Navbar/>
    <Header />
    <AboutUs/>
    <Menu/>
    <Testimonials/>
    <Contact/>
    <Feedback/>
    {/* <FloatingButtons/> */}
    <FloatingContact/>
    {/* <CartProvider>
      <OrderModal/>
    </CartProvider> */}
  
     
    </>
  );
}

export default App;