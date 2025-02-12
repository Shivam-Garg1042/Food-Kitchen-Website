
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Menu from "./components/Menu.jsx";
import Testimonials from './components/Testimonials.jsx';
import Contact from "./components/Contact.jsx";
import Feedback from './components/Feedback.jsx';
import AboutUs from './components/AboutUs.jsx';
import FloatingContact from './components/FloatingContact.jsx';

import Footer from './components/Footer.jsx';






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

    
    <Footer/>

     
    </>
  );
}

export default App;