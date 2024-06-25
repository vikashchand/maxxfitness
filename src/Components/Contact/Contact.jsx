import './Contact.css'

import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [contact, setContact] = useState(false)
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w615m58', 'template_8r4wfva', form.current, '_ZF_lEXLnGlyO6WlC')
      .then((result) => {
          console.log(result.text);
          setContact(true)
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div id='contact' className='row contact mb-5'>
        <div className="py-4 col-lg-6 col-xlg-6 col-md-12 col-sm-12 col-12 text-center">
            <p data-aos='slide-right' className="head stroke m-0">VISIT US </p>
            <p data-aos='slide-right' className="head stroke m-0">AND START YOUR FITNESS JOURNEY</p>

        <p className='addres'><i class="fa-solid fa-location-dot"></i>Plot No.6, Krishan Plaza, Abhay Khand 1, Nyay Khand I, Indirapuram, Ghaziabad, Uttar Pradesh 201014</p>
       
       
        <p className='addres'> <i class="fa-solid fa-phone"></i> CAll NOW:- 9871406350</p>
       
        </div>
       
        <div id="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56029.86397879838!2d77.30887626953124!3d28.633762999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53484baaa9d%3A0x95d43d673c6ac061!2sMax%20Fitness%20GYm%20India!5e0!3m2!1sen!2sin!4v1719313313600!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>

    </div>
  )
}

export default Contact