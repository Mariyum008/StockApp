import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import HomePage from './landing_page/home/HomePage.js';
import Signup from "./landing_page/signup/Signup.js"
import PricingPage from './landing_page/home/Pricing.js';
import AboutPage from './landing_page/about/AboutPage.js';
import ProductPage from './landing_page/products/ProductPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import Navbar from './landing_page/home/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/NotFount.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  <Footer/>
 </BrowserRouter>
);

