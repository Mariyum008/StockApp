import React from 'react'

function Stacks() {
    return (  
        <div className='container p-2'>
            <div className='row  p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-1'>Trust with confidence</h1>
                    <br/>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <br/>

                    <h3 className='fs-4'>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <br/>

                    <h3 className='fs-4'>The universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <br/>

                    <h3 className='fs-4'>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    <br/>

                </div>
                <div className='col-6 p-5 '>
                    <img src='images/ecosystem.png' style={{width:"90%"}}/>

                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>

                        <a href='' style={{textDecoration:"none"}}>Try demo<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stacks;