 import React from 'react';
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'

const ThreeImageCollection = () => {
  return (
    <div className="bg-[#f5f2eb] p-6 flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4">
        
        <div className="col-span-2">
          <img 
            src={one} 
            alt="1" 
            className="w-full h-auto rounded-lg" />
        </div>
     <div className="col-span-1">
          <img 
            src={two} 
            alt="2Bottom Left Image" 
            className="w-full h-auto rounded-lg"
          />
        </div>
  
        <div className="col-span-1">
          <img 
            src={three} 
            alt="3" 
            className="w-full h-auto rounded-lg" />
        </div>
      </div>
      <p className="text-center mt-4 p-5 text-gray-600">For Every Occasion</p>
    </div>
  );
};

export default ThreeImageCollection;
