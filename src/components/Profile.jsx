import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3];

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
       
    <img 
        src={images[currentIndex]} 
        alt="Slide" 
        className="w-full h-full object-cover"
      />
   <div className="absolute top-4 left-4   text-white px-4 py-2 rounded-md flex items-center space-x-2 ">
        <FontAwesomeIcon icon={faCartShopping} />
        <span>Shop</span>
      </div>
  <div className="absolute top-20 right-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCircleClick(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`} ></button>
        ))}
      </div>
    </div>
  );
};

export default Profile;
