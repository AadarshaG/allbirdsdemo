import React from 'react'

import './girlbanner.component.css'
import GirlImage from '../../../images/FW22-Core-2ndary-HP-Desltop-WRM.avif'

export function GirlBanner(){

    return(
        <>
             <section id="girl-banner">
                <img src={ GirlImage } alt="" />
            </section>

        </>
    )
}