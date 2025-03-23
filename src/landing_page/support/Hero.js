import React from 'react'
function Hero() {
    return (
        <div className="container-fluid p-5" id='Support'>
            <div className="p-5 mb-5 mt-5" id='supportWrapper'>
            <h3>Support Portal</h3>
            <a href='' className='support-link'>Track Tickets</a>
            </div>
            <div className=" row">
                <div className="col-6  ">
                <h3 >Search for an answer or browse help topics to create a ticket</h3>
                <input type="text" placeholder="Search for help" className="form-control"/>
                <br/>
                <a className='support-link fs-6' href=''>Track account opening </a>
                <a className='support-link fs-6' href=''> Track segment activation </a>
                <a className='support-link fs-6' href=''>Intraday margins</a>
                <a className='support-link fs-6' href=''> Kite user manual</a>
                </div>
            <div className="col-6 p-5">
                <h3>Featured</h3>
                <ol>
                    <a href='' className='support-link fs-5' ><li>Exclusion of F&O contracts on 5 securities from May 27, 2025</li></a>
        
                    <a href='' className='support-link fs-5'><li>Rights Entitlements listing in March 2025</li></a>
                </ol>
            </div>
            </div>
        </div>
      );
}

export default Hero;
<div className="hero"></div>