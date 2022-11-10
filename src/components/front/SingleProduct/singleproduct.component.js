import React from 'react'

import Breadcrumb from 'react-bootstrap/Breadcrumb'

import './singleproduct.component.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import FirstImage from '../../../images/1.avif'
import SecondImage from '../../../images/2.avif'
import ThirdImage from '../../../images/3.avif'
import ForthImage from '../../../images/W_TR_BLACK_1_mp4_.webm'
import FifthImage from '../../../images/pdp-video-mens-wool-runners.webm'
import { StarRating } from '../ResusableComponent/star.component';
export function SingleProduct(){

    return(
        <>
            <section id="single-product">
                <div className="col-sm-8">
                    <div className="display-image">
                        <div className="col-sm-6">
                            <div className="single-image">
                                <img src={FirstImage} alt=""></img>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="single-image">
                                <img src={SecondImage} alt=""></img>
                            </div>
                        </div>                                             
                    </div>
                    <div className="display-image">
                        <div className="col-sm-6">
                            <div className="single-image">
                                <video src={FifthImage} autoPlay preload="auto" loop></video> 
                            </div>
                        </div> 
                        <div className="col-sm-6">
                            <div className="single-image">
                                <img src={ThirdImage} alt=""></img>
                            </div>
                        </div>                                            
                    </div>
                </div>
                <div className="col-sm-4">
                    <Breadcrumb>
                        <Breadcrumb.Item href="">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="">
                            Library
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                    <div id="single-product-title">Product Name</div>
                    <div id="single-product-price">$ 100.0</div>
                    <div id="single-product-rating"><StarRating></StarRating></div>
                    <div id="single-product-classic">
                        <h6>Classic:</h6>
                        <p>Lorem Ipsum is Dummy</p>
                    </div>
                    <div id="single-product-limited-edition">
                        <h6>Limited Edition:</h6>
                    </div>
                    <div id="single-product-sale">
                        <div id="product-color"></div>
                        <div id="product-color"></div>
                        <div id="product-color"></div>
                        <div id="product-color"></div>
                    </div>
                    <div id="size-box">
                        <div id="size-box-title">SELECT SIZE :</div>
                        <div id="single-product-size">
                            <div className="child-size">1</div>
                            <div className="child-size">2</div>
                            <div className="child-size">3</div>
                            <div className="child-size">4</div>
                            <div className="child-size">5</div>
                            <div className="child-size">6</div>
                        </div>
                    </div>
                    <div id="single-product-size-info">
                        <p>This style is available in whole sizes only. In between sizes? We recommend you size up.</p>
                    </div>
                    <div id="single-product-add-to-cart">
                        <button>Add To Cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}