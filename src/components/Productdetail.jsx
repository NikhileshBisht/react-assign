import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Productdetail = () => {
  const [quantity, setQuantity] = useState(1);
  const colors = ['bg-gray-500', 'bg-red-500', 'bg-green-500', 'bg-blue-900', 'bg-black', 'bg-pink-500'];
  
  const navigate = useNavigate();  
  const incrementQuantity = () => setQuantity(quantity + 1);
 
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
 const handleBuyNow = () => {
    navigate('/add');  
  };

  return (
    <div className="relative w-full h-[50%] bg-white rounded-t-2xl shadow-md overflow-hidden p-6">
     
      <h2 className="text-xl font-bold mb-4">Off White 100% Supima Cotton T-Shirts with Invisible Stitching</h2>
      <div className="flex justify-between">
          <div className="flex flex-col space-y-4">
           
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
              ))} </div>
            </div>
          
          
          <div>
            <h3 className="text-lg font-semibold">Color</h3>
            <div className="flex space-x-2 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${color}`}
                ></button>
              ))}      </div>
          </div>
        </div>
  <div className="flex flex-col items-end space-y-4">
      
          <div>
            <span className="text-2xl font-bold text-red-500">Rs. 1,999.00</span>
            <span className="ml-2 text-sm line-through text-gray-500">Rs. 2,699.00</span>
          </div>
 
          <div className="flex items-center space-x-2">
            <span>QUANTITY</span>
            <button
              onClick={decrementQuantity}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400"
            >
              -
            </button>
            <div>
              {quantity}
            </div>
            <button
              onClick={incrementQuantity}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400"
            >
              +</button>
          </div>

        
          <div className="flex flex-col space-y-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add to Cart</button>
            <button
              onClick={handleBuyNow}  
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Buy it Now
            </button>
          </div>
        </div>
      </div>

      <div className="text-xl font-bold mb-2 text-center py-5 mt-4">SUPER COMFY SUPER LIGHT</div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Productdetail;
