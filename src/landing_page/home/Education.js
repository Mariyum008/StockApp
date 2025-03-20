import React from 'react'
function Education () {
    return (  
        <div className='container mt-3'>
        <div className='row p-5'>
            <div className='col-6'>
                <img src='images/education.svg'></img>
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1 className='fs-2 mb-3'>Free and open market education</h1>
                <br/>

                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                <br/>
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
    );
}

export default Education;