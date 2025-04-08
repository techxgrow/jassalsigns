import React from 'react';
import CustomButton from './ui/CustomButton';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
      
        <div>
          <h2 className="text-2xl">Don’t miss out</h2>
          <p className="text-gray-400 text-sm mt-2">Subscribe for the latest events news.</p>
          <div className="flex flex-col space-y-3 mt-4">
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-gray-800 text-white px-4 py-2 w-full "
              />
              <input
                type="text"
                placeholder="Enter Name"
                className="bg-gray-800 text-white px-4 py-2 w-full "
              />
            </div>
            <button className="bg-orange-500 text-black py-2 px-4  w-full">
              Subscribe Us!
            </button>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <input type="checkbox" className="bg-gray-800" />
              <span className="text-gray-400 text-sm">I Agree With Terms and Privacy</span>
            </div>
          </div>
        </div>
        
        
        <div>
          <h2 className="text-2xl">Quick Links</h2>
          <ul className="text-gray-400 mt-4 space-y-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Products</a></li>
            
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        
       
        <div>
          <h2 className="text-2xl">Get in touch</h2>
          <p className="text-gray-400 mt-2">(604) 599 4221</p>
          <p className="text-gray-400 mt-1">info@jassalsigns.com</p>
          <p className="text-gray-400 mt-1">7728 128 St Unit 101, Surrey, BC V3W 1L3, Canada</p>
          <div className='flex flex-wrap justify-center md:justify-start gap-2 mt-4 '>
            <CustomButton >Facebook</CustomButton>
            <CustomButton >Twitter</CustomButton>
            
          </div>
          
        
        </div>
      </div>
      
      
      <div className="mt-10 text-center mx-auto w-full md:w-fit">
  <p className="text-center">
    Copyright © 2025 JASSAL SIGNS. All rights reserved.
  </p>
  <ul className="flex justify-center mx-auto gap-4 mt-2">
    <li><a href="#">Services</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms Of Use</a></li>
  </ul>
</div>

    </footer>
  );
};

export default Footer;