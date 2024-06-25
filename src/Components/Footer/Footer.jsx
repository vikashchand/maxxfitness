import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='footer px-5'>
        <hr />
        <div className="flex d-flex justify-content-center align-items-center">
        <div className="footer-info">
        <p>
          <i className="fas fa-clock mr-2"></i>
          Opening Hours: Every day, 5:00 AM - 11:00 AM & 5:00 PM - 10:00 PM
        </p>
       
        <p className='flex d-flex justify-content-center align-items-center'>
         
          &copy; MaxFitness 2024
        </p>
      </div>
   
    
            </div>
    </div>
  )
}

export default Footer