import React from 'react'

import './bids.component.css'

export function Bids(){

    return(
        <>
            <section id="bids">
                <div id="bids-body">
                    <h2>Want First Dibs?</h2>
                    <p>Join our email list and be the first to know about new limited edition products, material
                            innovations, and lots of other fun updates.
                        </p>
                        <div id="form-bids">
                            <input type="text" placeholder="Enter Email Address" id="email"></input>  
                            <button type="submit"  id="button">Sign Up</button>
                        </div> 
                        <div id="bids-link">
                        <p> You can opt-out at any time. See our Privacy Policy and Term</p>
                        </div>  
                </div> 
            </section>
            
            <section id="mobile-bids">
                <div id="mobile-bids-body">
                    <h2>Want First Dibs?</h2>
                    <p>Join our email list and be the first to know about new limited edition products, material
                            innovations, and lots of other fun updates.
                        </p>
                        <div id="mobile-bids-form">
                            <input type="text" placeholder="Enter Email Address" id="email"></input>  
                            <button type="submit"  id="button">Sign Up</button>
                        </div> 
                        <div id="mobile-bids-link">
                        <p> You can opt-out at any time. See our Privacy Policy and Term</p>
                        </div>  
                </div> 
            </section>
        </>
    )
}