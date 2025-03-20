import React from 'react'
import Hero  from './Hero';
import Awards from './Awards';
import Stacks from './Stacks';
import Education from './Education';
import OpenAccount from '../OpenAccount'
import Footer from '../Footer';
import Navbar from './Navbar';
import Pricing from './Pricing';
function HomePage () {
    return (  
        <>
    
        <Hero/>
        <Awards/>
       <Stacks/> 
       <Pricing/>
       <Education/>
       <OpenAccount/>
        </>

    );
}

export default HomePage;