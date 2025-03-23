import React from 'react'
function Universe() {
    return (
        <div className='container p-5 mb-5'>
        <div className='row text-center p-5'>

            <h1>The Zerodha Universe</h1>
            <br/>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='col-md-4 text-center p-5'>
                <img src="images\zerodhaFundhouse.png" style={{width:"95%", marginBottom:"20px"}}/>
                <p className='text-small text-muted'>Assest Management</p>
            </div>
            <div className='col-md-4 text-center p-5'>
            <img src="images\sensibullLogo.svg" style={{width:"100%"  ,marginBottom:"40px"}}/>
            
            <p className='text-small text-muted'>Options trading platform</p>
            </div>
            <div className='col-md-4 text-center p-5'>
            <img src="images\streakLogo.png" style={{width:"90%", marginBottom:"20px"}}/>
            <p className='text-small text-muted'>Algo & strategy platform</p>
            </div>
            <div className='col-md-4 text-center p-5'>
                <img src="images\smallcaseLogo.png" style={{width:"100%", marginBottom:"20px"}}/>
                <p className='text-small text-muted'>Thematic investmnet platform</p>
            </div>
            <div className='col-md-4 text-center p-5'>
            <img src="images\dittoLogo.png" style={{width:"70%", marginBottom:"20px"}}/>
            <p className='text-small text-muted'>Insurance</p>
            </div>
            <div className='col-md-4 text-center p-5'>
            <img src="images\goldenpiLogo.png" style={{width:"90%", marginBottom:"20px"}}/>
            <p className='text-small text-muted'>Bonds trading platform</p>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto",}}>Signup Now</button>
        </div>
    </div>
     );
}

export default Universe;