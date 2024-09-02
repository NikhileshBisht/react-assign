import React from 'react';
import myimage from './1.jpg'

const Mainpage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      
      <header className="w-full flex items-center justify-between p-4 bg-white shadow-md">
        <button className="text-gray-700">
         <i className="fas fa-bars"></i> 
          <span className="ml-2">Shop</span>
        </button>
        <button className="text-gray-700">
          <i className="fas fa-shopping-cart"></i></button>
      </header>

 
      <main className="w-full max-w-md bg-white rounded-lg shadow-md mt-4 p-4"> 
        <div className="relative mb-4">
          <img
            src={myimage}
            alt="Product"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[...Array(3)].map((_, index) => (
              <button
                key={index}
                className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white shadow-md"
              >
           <img
                  src={myimage}  
                  alt="Thumbnail"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
 
        <h2 className="text-lg font-semibold text-gray-900">
          Gentleman Gray 100% Supima Cotton T-Shirts with Invisible Stitching
        </h2> 
        <div className="flex items-center mt-4 space-x-2">
          {['red', 'green', 'blue', 'black', 'white', 'pink', 'gray'].map(
            (color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full border ${
                  color === 'red' ? 'border-black' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              ></button>
            )
          )}
        </div>
 
        <div className="mt-4">
          <p className="text-gray-700">Size</p>
          <div className="flex items-center mt-2 space-x-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
             key={size}
               className="px-3 py-1 border rounded-md hover:bg-gray-200"
              >
                {size}
              </button>
            ))}
          </div>
    </div> 
    <div className="mt-4 flex items-center justify-between">
          <p className="text-red-500 font-bold text-xl">₹1999</p>
          <p className="text-gray-400 line-through">₹2699</p>
          <p className="text-green-500 font-semibold">34% Off</p>
        </div>
        <p className="text-green-600 mt-1">In Stock</p>
        <p className="text-gray-500">Ships in 24hrs • 14 Days Return</p>
 
        <div className="mt-6 flex space-x-4">
          <button className="flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Add to Cart</button>
          <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
            Buy Now </button>
        </div>
      </main>
    </div>
  );
};

export default Mainpage;
