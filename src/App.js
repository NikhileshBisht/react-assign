import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Productdetail from './components/Productdetail';
import ThreeImageCollection from './components/ThreeImageCollection';
import Fourimages from './components/Fourimages';
import SIgnup from './components/SIgnup';
import Fotter from './components/Fotter'; 
import Mainpage from './components/Mainpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="font-sans">
            <div className="w-full h-[900px] relative">
              <Profile />
              <div className="absolute bottom-0 w-full">
                <Productdetail />
              </div>
            </div>
            <ThreeImageCollection />
            <Fourimages />
            <SIgnup />
            <Fotter />
          </div>
        } />
        <Route path="/add" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
