import React from 'react';
import myImage from './mainimage.jpg'; 

const Fourimages = () => {
  return (
    <div className="bg-[#f5f0e1]  flex flex-col items-center">
    <div className="grid grid-cols-2 grid-rows-2 gap-0">
       <div className="col-span-1 row-span-1">
          <img
         src={myImage}
           alt="1"
          className=" shadow-lg w-full h-full object-cover"
          />
   </div>
        
        <div className="col-span-1 row-span-1">
         <img
        src={myImage}
         alt="2"
         className=" shadow-lg w-full h-full object-cover"
          />
  </div>
      
        <div className="col-span-1 row-span-1">
        <img
          src={myImage}
      alt="3"
           className=" shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <img
       src={myImage}
      alt="4"
        className=" shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Fourimages;
