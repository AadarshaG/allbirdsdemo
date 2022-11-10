import React from 'react'
import Slider from "react-slick";
import './shops.component.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FirstImage from '../../../images/1.avif'
import SecondImage from '../../../images/2.avif'
import ThirdImage from '../../../images/3.avif'
import ForthImage from '../../../images/4.avif'
import FifthImage from '../../../images/5.avif'

export function Shops(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true
      };

    return(
        <>
            <section id="shop">
               
                <div className="col-sm-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </nav>
                    <ul className="subcategory-name">
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                        <li>Hello</li>
                    </ul>
                    <div className="filter-section">
                        <h2>FIlter By:</h2>
                        <hr></hr>
                        <ul>
                            <h3>Best For</h3>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                        </ul>
                        <hr></hr>
                        <ul>
                            <h3>Best For</h3>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                            <li><input type="checkbox"></input> Hello</li>
                        </ul>
                        <hr></hr>
                        <ul>
                            <h3>Hue</h3>
                            <li><input type="radio"></input> Hello</li>
                            <li><input type="radio"></input> Hello</li>
                            <li><input type="radio"></input> Hello</li>
                            <li><input type="radio"></input> Hello</li>
                            <li><input type="radio"></input> Hello</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="top-select">
                        <div id="limited-edition"> <input type="checkbox"></input>Limited Edition</div>
                        <div id="toggle-tabs">Toggle Tabs</div>
                    </div>
                    <div className="products-list">
                        <div className="col-sm-4">
                            <div id="full-product-card">
                                <div className="product-card">
                                    <img src={FirstImage} alt=""></img>
                                    <div className="product-card-body">
                                        <h6>Title</h6>
                                        <p>Short Description</p>
                                        <p>Price</p>
                                    </div>
                                    <div className="product-card-body-slider">
                                    <Slider {...settings}>
                                        <div id="product-cart-body-slider-image">
                                        <img src={FirstImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={SecondImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={ThirdImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={ForthImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={FifthImage}  alt=""/>
                                        </div>
                                    
                                        </Slider>
                                    </div>
                                </div>
                                <div className="hidden-element">
                                    <div className="hidden-element-title">Quick Add</div>
                                    <div className="hidden-element-select">
                                        <div className="child-div">1</div>
                                        <div className="child-div">2</div>
                                        <div className="child-div">3</div>
                                        <div className="child-div">4</div>
                                        <div className="child-div">5</div>
                                        <div className="child-div">6</div>
                                    </div>
                                    <div className="hidden-element-select">
                                        <div className="child-div">7</div>
                                        <div className="child-div">8</div>
                                        <div className="child-div">9</div>
                                        <div className="child-div">10</div>
                                        <div className="child-div">11</div>
                                        <div className="child-div">12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="full-product-card">
                                <div className="product-card">
                                    <img src={SecondImage} alt=""></img>
                                    <div className="product-card-body">
                                        <h6>Title</h6>
                                        <p>Short Description</p>
                                        <p>Price</p>
                                    </div>
                                    <div className="product-card-body-slider">
                                    <Slider {...settings}>
                                        <div id="product-cart-body-slider-image">
                                        <img src={FirstImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={SecondImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={ThirdImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={ForthImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={FifthImage}  alt=""/>
                                        </div>
                                    
                                        </Slider>
                                    </div>
                                </div>
                                <div className="hidden-element">
                                    <div className="hidden-element-title">Quick Add</div>
                                    <div className="hidden-element-select">
                                        <div className="child-div">1</div>
                                        <div className="child-div">2</div>
                                        <div className="child-div">3</div>
                                        <div className="child-div">4</div>
                                        <div className="child-div">5</div>
                                        <div className="child-div">6</div>
                                    </div>
                                    <div className="hidden-element-select">
                                        <div className="child-div">7</div>
                                        <div className="child-div">8</div>
                                        <div className="child-div">9</div>
                                        <div className="child-div">10</div>
                                        <div className="child-div">11</div>
                                        <div className="child-div">12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div id="full-product-card">
                                <div className="product-card">
                                    <img src={ThirdImage} alt=""></img>
                                    <div className="product-card-body">
                                        <h6>Title</h6>
                                        <p>Short Description</p>
                                        <p>Price</p>
                                    </div>
                                    <div className="product-card-body-slider">
                                    <Slider {...settings}>
                                        <div id="product-cart-body-slider-image">
                                        <img src={FirstImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={SecondImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={ThirdImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={ForthImage}  alt=""/>
                                        </div>
                                        <div id="product-cart-body-slider-image">
                                        <img src={FifthImage}  alt=""/>
                                        </div>
                                    
                                        </Slider>
                                    </div>
                                </div>
                                <div className="hidden-element">
                                    <div className="hidden-element-title">Quick Add</div>
                                    <div className="hidden-element-select">
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                    </div>
                                    <div className="hidden-element-select">
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                        <div className="child-div"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}