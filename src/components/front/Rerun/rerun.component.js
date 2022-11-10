import React from 'react'

import './rerun.component.css'

import Logo from '../../../images/allbirds-logo.svg'

export function Rerun(){

    return(
        <>
        <section id="rerun">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img src={Logo} alt=""></img>
                        </div>
                        <div className="col-sm-12 col-md-6 rerun-data">
                            <div id="heading1">AllBirds ReRun</div>
                            <div id="heading2">A New Way To Get Old Favorites</div>
                            <div id="paragraph">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                                essentially unchanged.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                                specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                                essentially unchanged.</p>
                            </div>
                            <div id="buttons">
                                <button id="button">Start Shopping Rerun</button>
                            </div>
                        </div>
                    </div>
                </div>
        </section></>
    )
}