import React from 'react'

function Brokerage() {
    return ( 
       <div className='container'>
       <div className='row p-5 border-top'>
            <div className='col-8 text-muted'>
            <a href='' style={{textDecoration:"none"}} className='fs-2'>Brokerage calculator</a>
            <br/>
            <br/>
                <ul>
                    <li>Free equity delivery</li>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    <li>Intraday and F&O trades</li>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    <li>Free direct MF</li>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    <li>Free direct MF</li>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    <li>Free direct MF</li>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </ul>
            </div>
            <div className='col-4 text-muted'>
            <a href='' style={{textDecoration:"none"}} className='fs-2'>List of charges</a>
                <br/>
            </div>
       </div>   
       </div>
     );
}

export default Brokerage;
