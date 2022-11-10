import React, { useState } from 'react'

import './stories.component.css'

import FirstImage from '../../../images/ReRun-Site-Landing-Page-v3-1200px.avif'

export function Stories(){

    return(
        <>
            <section id="stories">
                <div className="container">
                    <div className="row">
                        <div id="stories-heading"> <h3>Stories</h3></div>
                        
                        
                            <div className="col-sm-12 col-md-6 col-lg-4" id="stories-card-height">
                                <div id="stories-card">
                                    <img src={FirstImage}></img>
                                    <div id="stories-body">
                                        <h4>Title</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4" id="stories-card-height">
                                <div id="stories-card">
                                    <img src={FirstImage}></img>
                                    <div id="stories-body">
                                        <h4>Title</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambledwhen an unknown printer took a galley of type and scrambled</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4" id="stories-card-height">
                                <div id="stories-card">
                                    <img src={FirstImage}></img>
                                    <div id="stories-body">
                                        <h4>Title</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>                        
                    </div>
                </div>
            </section>
        </>
    )
}