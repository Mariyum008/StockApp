import React from 'react'

function Footer() {
    return ( 
        <div className='p-5 border-top' style={{backgroundColor:"#FFF"}}>
            <div className='row p-5'>
                <div className='col-3 p-2'>
                    <img src='images/logo.svg' style={{width:"50%"}}></img>
                    <p>© 2010 - 2025, Zerodha Broking Ltd.
                    All rights reserved</p>

                    <div className='row'>
                        <a><i class="fa-brands fa-x-twitter"></i></a>
                        <a><i class="fa-brands fa-facebook-f"></i></a>
                        <a><i class="fa-brands fa-instagram"></i></a>
                        <a><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className='row'>
                    <a><i class="fa-brands fa-youtube"></i></a>
                    <a><i class="fa-brands fa-whatsapp"></i></a>
                    <a><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
                <div className='col-3'>
                <ul style={{listStyle:"none"}}>
                <li className='social-link fs-4'>  Company</li> 
                <li className='social-link'>       <a> About</a> </li>                
                <li className='social-link'>       <a> Products</a></li>
                <li className='social-link'>       <a> Pricing</a></li>
                <li className='social-link'>       <a> Referral programme </a> </li>  
                <li className='social-link'>       <a> Careers</a></li>
                <li className='social-link'>       <a> Zerodha.tech</a></li>
                <li className='social-link'>       <a> Open source</a></li>
                <li className='social-link'>       <a> Press & media</a></li>
                   <li><a> Zerodha Cares (CSR)</a>
                   </li>
                    </ul>
                </div>
                <div className='col-3' >
                    <ul style={{listStyle:"none"}}>
                    <li className='social-link fs-4'>Support</li>
                   <li className='social-link'> <a> About</a></li>
                   <li className='social-link'> <a> Products</a></li>
                   <li className='social-link'> <a> Pricing</a>
                   </li>
                   <li className='social-link'> <a> Referral programme </a>       </li>
                   <li className='social-link'> <a> Careers</a>       </li>
                   <li className='social-link'> <a> Zerodha.tech</a></li>
                   <li className='social-link'> <a> Open source</a></li>
                   <li className='social-link'> <a> Press & media</a></li>
                   <li className='social-link'> <a> Zerodha Cares (CSR)</a></li> 
                    </ul>   
                </div>
                <div className='col-3'>
                <ul style={{listStyle:"none"}}>
                    <li className='social-link fs-4'>Account</li>
                   <li className='social-link'><a>Open an account   </a>
                   </li>
                   <li><a>Fund transfer</a></li>
                   
                </ul>
               </div>

               <div className='mt-5 text-small text-muted fs-7'>
               <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

               Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
               
               Smart Online Dispute Resolution | Grievances Redressal Mechanism
               
               Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

               <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.

               Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
               
               "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
               </div>
            </div>
        </div>
     );
}

export default Footer;