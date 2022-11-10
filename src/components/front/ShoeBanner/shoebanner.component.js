import React from 'react'
import './shoebanner.component.css'

import ShoeImage from '../../../images/TB-Secondary_Homepage.avif'


export function ShoeBanner(){

    return(
        <>
            <section id="shoe-banner">
                <img src={ShoeImage} alt="" />
            </section>
        </>

    )
}