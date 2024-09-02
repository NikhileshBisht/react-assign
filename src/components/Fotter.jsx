import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-white py-8 text-center">
       <div className="max-w-screen-lg mx-auto px-4">
        
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
           
           <div className="space-y-4">
            <h3 className="font-bold text-lg">Navigate</h3>
             <ul className="space-y-1">
           <li>Home</li>
              <li>T-Shirts</li>
                <li>About Us</li>
            </ul>
          </div>

           
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Tracking & Support</h3>
            <ul className="space-y-1">
               <li>Returns</li>
              <li>Terms</li>
                <li>Support</li>
              <li>Track Your Order</li>
            </ul>
          </div>

          
          <div className="space-y-4">
             <h3 className="font-bold text-lg">More Info</h3>
             <ul className="space-y-1">
              <li>Blog</li>
               <li>Reviews</li>
              <li>Care</li>
            </ul>
          </div>
        </div>

     
        <div className="flex flex-col items-center mt-8 text-gray-800">
       <h3 className="font-bold text-lg">Contact</h3>
          <p>support@website.in</p>
          
          <div className="flex justify-center space-x-4 mt-4">
               <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
          </div>
   </div>
      </div>
    </div> );
};

export default Footer;
