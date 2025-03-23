import React from 'react'
function Hero() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 mb-5 border-bottom text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted fs-5 mt-4'>Free equity investments and flat ₹20 traday and F&O trades</h3>
        </div>
        <div className='row p-5 mt-5 mb-5 border-bottom text-center'>
            <div className='col-4 p-5'>
                <img src='images/pricing0.svg'/>
                <br/>
                <h3>Free equity delivery</h3>
                <br/>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-5'>
                <img src='images/other-trades.svg'/>
                 <h3>Intraday and F&O trades</h3>
                 <br/>
                 <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.       </p>
            </div>
            <div className='col-4 p-5'>
                <img src='images/pricingEquity.svg'/> 
                <h3>Free direct MF</h3>
                 <br/>
                 <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.       </p>
            </div>
        </div>
    </div>
     );
}

export default Hero;