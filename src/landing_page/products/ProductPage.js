import React from 'react'
import Hero from './Hero.js';
import LeftImage from './LeftImage.js';
import RightImage from './RightImage.js'
import Universe from './Universe.js';

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftImage imageURL="images/kite.png" ProductName="Kite"  productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo=""  learnMore=""  googlePlay=""  appStore=""/>

<RightImage  imageURL="images/console.png" ProductName="Console"  productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  learnMore=""/>

        <LeftImage imageURL="images/coin.png" ProductName="Coin"  productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices"
 tryDemo=""  learnMore=""  googlePlay=""  appStore=""/>

<RightImage  imageURL="images/kiteconnect.png" ProductName="Kite Connect API"  productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."  learnMore="" />

        <LeftImage imageURL="images/varsity.png" ProductName="Varsity mobile"  productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
 tryDemo=""  learnMore=""  googlePlay=""  appStore=""/>
        
        <Universe/>
        </>
     );
}

export default ProductPage;