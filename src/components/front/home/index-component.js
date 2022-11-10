import React from 'react'
import { Bids } from '../Bids/bids.component'
import { Collection } from '../Collections/collection.component'
import { Favorite } from '../Favorite/favorite.component'
import { FirstBanner } from '../FirstBanner/firstbanner.component'
import { FlatFall } from '../FlatFall/flatfall.component'
import { GirlBanner } from '../GirlBanner/girlbanner.component'
import { GoFall } from '../GoFall/gofall.component'
import { NewArrival } from '../NewArrival/newarrival.component'
import { ShoeBanner } from '../ShoeBanner/shoebanner.component'
import { Stories } from '../Stories/stories.component'
import { Sustainability } from '../Sustainability/sustainability.component'
import { SustainPractice } from '../SustainPractice/sustainpractice.component'


function IndexHome(){

    return(
        <>
            <FirstBanner></FirstBanner>
            <Favorite></Favorite>
            <ShoeBanner></ShoeBanner>
            <FlatFall></FlatFall>
            <NewArrival></NewArrival>
            <GirlBanner></GirlBanner>
            <GoFall></GoFall>
            <Collection></Collection>
            <Sustainability></Sustainability>
            <SustainPractice></SustainPractice>
            <Stories></Stories>
            <Bids></Bids>
        </>
    )
}

export default IndexHome