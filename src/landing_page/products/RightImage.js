import React from 'react';

function RightImage({ imageURL, ProductName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container p-5 mb-5'>
            <div className='row d-flex align-items-center p-5'>

                {/* Left Content */}
                <div className='col-md-4 text- p-5 ml-5'>
                    <h1>{ProductName}</h1>
                    <p>{productDescription}</p>
                    <div className='d-flex gap-4'>
                        
                        <a href={learnMore} style={{ textDecoration: "none" }}>
                            Learn More <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    
                </div>

                {/* Right Image */}
                <div className='col-md-8 text-center p-5'>
                    <img src={imageURL} className="img-fluid" alt="Product Preview" />
                </div>
                <h4 className='text-center text-muted fs-5'>Want to know more about our technology stack? Check out the <a href='/' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h4>
            </div>
        </div>
    );
}

export default RightImage;
