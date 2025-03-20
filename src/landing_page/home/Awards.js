import React from 'react'

function Awards() {
    return ( 
        
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='images/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5 mt-3'>
                <h1>Best Broker in the Country</h1>
                <p className='mb-5'>Our company has been awarded the title of the best broker in the country</p>
                    <div className='row'>
                        <div className='col-6'>
                        <ul>
                            <li>
                                <p>Future & Options</p>
                            </li>
                            <li>
                                <p>Commodities & Derivatives</p>
                            </li>
                            <li>
                                <p>Currency & Derivatives</p>
                            </li>
                        </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Future & Options</p>
                                </li>
                                <li>
                                    <p>Commodities & Derivatives</p>
                                </li>
                                <li>
                                    <p>Currency & Derivatives</p>
                                </li>
                            </ul>
                        </div>
                    <img src='images/pressLogos.png' style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default  Awards;