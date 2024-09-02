import React from 'react';
const SIgnup = () => {
  return (
    <div className="bg-black  text-white py-16 flex flex-col items-center text-center">
      <h2 className=" text-2xl p-8 ">
        SIGN UP FOR DAILY DISCOUNTS AND OFFERS
      </h2>
      <p className="  md:text-base mb-8 px-4 p-8 max-w-xl">
        Signup with your email for daily updates about our Discounts, Sales, and Offers. Get a wide variety of coupon codes on your mail!
      </p>
      <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 text-black">
        <input
          type="email"
          placeholder="Your email"
          className="px-4 py-3 rounded-md border border-gray-300 w-64 md:w-80 mb-4 md:mb-0 md:mr-2"
        />
        <button className="bg-gray-300 text-black px-6 py-2 rounded-md font-semibold">
          Subscribe
        </button>
    </form>
    </div>
  );
};

export default SIgnup;
