import React from 'react'

import './collection.component.css'

import FirstImage from '../../../images/FW22-Core-2ndary-HP-Desltop-WRM.avif'
import SecondImage from '../../../images/FW22-Core-Custom-Collection-Hero-Rainy.avif'
import ThirdImage from '../../../images/FW22-CORE-Homepage-Desktop-TR-Men.avif'

export function Collection(){

    return(
        <>
             <section id="collection">
            <div className="container">
                <div id="collection-heading">
                    <h2>Shop The Collection</h2>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="collection-card">
                            <img src={FirstImage} alt="" />
                            <div className="collection-body">
                                <h4>Title lorem Ipsum</h4>
                                <p> Description endures pains to avoid worse pains endures pains to avoid worse pains</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="collection-card">
                            <img src={SecondImage} alt="" />
                            <div className="collection-body">
                                <h4>Title lorem Ipsum</h4>
                                <p> Description endures pains to We think it’s a good place to start.  avoid worse pains</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="collection-card">
                            <img src={ThirdImage} alt=""/>
                            <div className="collection-body">
                                <h4>Title lorem Ipsum</h4>
                                <p> Description endures pains to avoid worse pains</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}