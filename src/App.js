import { useEffect } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Testimonial from './Components/Testimonial/Testimonial';
import Why from './Components/Why/Why';

import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {

  useEffect(() => {
    AOS.init({duration : 1000, once : true})
  }, [])
  

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Programs/>
      <Why/>
     
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
