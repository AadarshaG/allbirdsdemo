import React from 'react'

import './firstbanner.component.css'

import Banner from '../../../images/FW22-CORE-Homepage-Desktop-TR-Men.avif'


export function FirstBanner(){

    return(
        <>
             <section id="banner">
                <div id="banner-img">
                    <img src={ Banner } alt="" />
                    <div id="banner-content">
                        <h1>Light On your Feet</h1>
                        <p>Confortable and very layerable, our Tree styles take you from crisp to cold.</p>
                        <button type="button" id="button1">SHOP MEN</button>
                        <button type="button" id="button2">SHOP WOMEN</button>
                    </div>
                </div>
                <div id="style-quiz">
                    <p>Discover Your Perfect Pair Try Our Style Quiz to find the best pair for you.&ensp;Take the Style Quiz</p>
                </div>
            </section>
        </>
    )
}