import React from 'react'
function LeftImage({ imageURL, ProductName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container p-5 mb-5'>
            <div className='row p-3'>
                <div className='col-8 p-3 text-center'>
                    <img src={imageURL}></img>
                </div>
                <div className='col-4 p-5 mb-5'>
                    <h1>{ProductName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore}  style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>`
                    <div className='mt-2'> 
                        <a href={googlePlay}>
                             <img src="images/googlePlayBadge.svg"></img>
                        </a>
                        <a href={appStore}>
                            <img src='images/appstoreBadge.svg' style={{marginLeft:"50px"}} />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default LeftImage;