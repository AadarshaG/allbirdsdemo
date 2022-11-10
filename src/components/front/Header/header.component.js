import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.component.css'
import {FaAngleRight, FaAngleUp, FaQuestionCircle, FaShoppingCart, FaUser} from 'react-icons/fa'

import Logo from '../../../images/allbirds-logo.svg'
import { useState } from 'react'

function FrontHeader(){

    const [stateTab, setStateTab] = useState(null)

    const [isActive, setIsActive] = useState(false)
    const [isState, setIsState] = useState(false)

    const activeTab = (index) => {
        setStateTab(index === stateTab ? null : index)
    }


    const onClickMenu = () =>{
        document.getElementById("menu-bar").classList.toggle("icon")
        document.getElementById("list-mobile-menu").classList.toggle("change")
    }
    const onClickCart = () =>{
        // document.getElementById("shop-cart").classList.toggle("icon-cart")
        // document.getElementById("shop-cart-item").classList.toggle("change-shop-cart")
    }

    return(
       <>
            <section id="header">
                <header>
                    <nav id="top-nav">
                        Need shoes made for wet weather? Check out the Mizzle collection.&ensp; Shop Men's &ensp;|&ensp;Shop Women's
                    </nav>
                    <nav id="menu-nav">
                        <input type="checkbox" id="checkbox_toggle" />
                        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                        <div className="hidden">
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <div className="col-sm-5">
                            <div className="tabs">
                                <div className={ stateTab === 1 ? "tab active-tab" : "tab"} onClick={() => activeTab(1)}>MEN</div>
                                <div className={ stateTab === 2 ? "tab active-tab" : "tab"} onClick={() => activeTab(2)}>WOMEN</div>
                                <div className={ stateTab === 3 ? "tab active-tab" : "tab"} onClick={() => activeTab(3)}>KIDS</div>
                                <div className={ stateTab === 4 ? "tab active-tab" : "tab"} onClick={() => activeTab(4)}>SALE</div>
                                <div className={ stateTab === 5 ? "tab active-tab" : "tab"} onClick={() => activeTab(5)}>GIFTS</div>
                            </div>
                            <div className="box-contents contents">
                                <div className={ stateTab === 1 ? "content active-content" : "content"}>
                                   <div className="level1">
                                        <ul className="level1-layout">
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">SHOES</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Everyday Sneakers</p></li>
                                                        <li><p>Running Shoes</p></li>
                                                        <li><p>Water-Repellent Sneakers</p></li>
                                                        <li><p>Slips On</p></li>
                                                        <li><p>Hiking Shoes</p></li>
                                                        <li><p>High Tops</p></li>
                                                        <li><p>Slippers</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">APPAREL</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Tees</p></li>
                                                        <li><p>Sweetshirts & Sweetpants</p></li>
                                                        <li><p>Underwears</p></li>
                                                        <li><p>Sock</p></li>
                                                        <li><p>Sale Apparel</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">ASSESSORIES</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Hats & Scarves</p></li>
                                                        <li><p>Insoles</p></li>
                                                        <li><p>Gift Cards</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">FEATURED</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><img src={Logo} alt=""></img></li>
                                                        <li><img src={Logo} alt=""></img></li>
                                                                                                                
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                                <div className={ stateTab === 2 ? "content active-content" : "content"}>
                                    <div className="level1">
                                        <ul className="level1-layout">
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">SHOES</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Everyday Sneakers</p></li>
                                                        <li><p>Running Shoes</p></li>
                                                        <li><p>Water-Repellent Sneakers</p></li>
                                                        <li><p>Slips On</p></li>
                                                        <li><p>Hiking Shoes</p></li>
                                                        <li><p>High Tops</p></li>
                                                        <li><p>Slippers</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">APPAREL</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Tees</p></li>
                                                        <li><p>Sweetshirts & Sweetpants</p></li>
                                                        <li><p>Underwears</p></li>
                                                        <li><p>Sock</p></li>
                                                        <li><p>Sale Apparel</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">ASSESSORIES</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Hats & Scarves</p></li>
                                                        <li><p>Insoles</p></li>
                                                        <li><p>Gift Cards</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">FEATURED</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><img src={Logo} alt=""></img></li>
                                                        <li><img src={Logo} alt=""></img></li>
                                                                                                                
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                                <div className={ stateTab === 3 ? "content active-content" : "content"}>
                                    <div className="level1">
                                    <ul className="level1-layout">
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">LITTLE KIDS</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Everyday Sneakers</p></li>
                                                        <li><p>Slips On</p></li>
                                                        <li><p>Slippers</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">BIG KIDS</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Everyday Sneakers</p></li>
                                                        <li><p>Slips On</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">FEATURED</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><img src={Logo} alt=""></img></li>
                                                        <li><img src={Logo} alt=""></img></li>
                                                                                                                
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                                <div className={ stateTab === 4 ? "content active-content" : "content"}>
                                    <div className="level1">
                                    <ul className="level1-layout">
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">MEN'S SALE</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Sale Shoes</p></li>
                                                        <li><p>Sale Apparel</p></li>
                                                        <li><p>New Markdowns</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">WOMEN'S SALE</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>Sale Shoes</p></li>
                                                        <li><p>Sale Apparel</p></li>
                                                        <li><p>New Markdowns</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">FEATURED</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><img src={Logo} alt=""></img></li>
                                                        <li><img src={Logo} alt=""></img></li>
                                                                                                                
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                                <div className={ stateTab === 5 ? "content active-content" : "content"}>
                                    <div className="level1">
                                    <ul className="level1-layout">
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">COLLECTIONS</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><p>The Fluff Collection</p></li>
                                                        <li><p>The Mizzle Collection</p></li>
                                                        <li><p>Kids Gifts</p></li>
                                                        <li><p>Hats & Scarves</p></li>
                                                        <li><p>Best Sellers</p></li>
                                                        <li><p>Gift Cards</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="level1-column">
                                                <div className="level2">
                                                    <div className="level2-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">FEATURED</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level2-list">
                                                        <li><img src={Logo} alt=""></img></li>
                                                        <li><img src={Logo} alt=""></img></li>
                                                                                                                
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2" id="logo-image">
                            <NavLink to="/">
                                <img src={ Logo } alt=""></img>
                            </NavLink>
                        </div>
                        <div className="col-sm-5">
                            <div className="tabs">
                                <div className={ stateTab === 6 ? "tab active-tab" : "tab"} onClick={() => activeTab(6)}>SUSTAINABILITY</div>
                                <div className={ stateTab === 7 ? "tab active-tab" : "tab"} onClick={() => activeTab(7)}><NavLink to="/rerun">RERUN</NavLink></div>
                                <div className={ stateTab === 8 ? "tab active-tab" : "tab"} onClick={() => activeTab(8)}><NavLink to="/stores">STORES</NavLink></div>
                                <div><NavLink to="/login"><FaUser></FaUser></NavLink></div>
                                {/* <div id="right-menu"><FaQuestionCircle></FaQuestionCircle></div>
                                <div id="right-menu"><FaShoppingCart></FaShoppingCart></div> */}
                            </div>
                            <div className="box-contents contentss">
                                <div className={ stateTab === 6 ? "content active-contents" : "content"}>
                                   <div className="level11">
                                        <ul className="level11-layout">
                                            <li className="level11-column">
                                                <div className="level22">
                                                    <div className="level22-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">INITIATIVES</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level22-list">
                                                        <li><p>Reversing Climate Change</p></li>
                                                        <li><p>How We Operate</p></li>
                                                        <li><p>Carbon Footprint</p></li>
                                                        <li><p>Regenerative Agriculture</p></li>
                                                        <li><p>Renewable Materials</p></li>
                                                        <li><p>Carbon Offsets</p></li>
                                                        <li><p>Responsible Energy</p></li>
                                                    </ul>
                                                </div>
                                            </li>
                                         
                                            <li className="level11-column">
                                                <div className="level22">
                                                    <div className="level22-link">
                                                        <div className="link-title">
                                                            <h4 className="subcategory-title">FEATURED</h4>                                                    
                                                        </div>
                                                    </div>
                                                    <ul className="level22-list">
                                                        <li><img src={Logo} alt=""></img></li>
                                                        <li><img src={Logo} alt=""></img></li>
                                                                                                                
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                {/* <!-- mobile footer --> */}
                    <nav id="mobile-top">
                        Need shoes made for wet weather? Check out the Mizzle collection.&ensp; Shop Men's &ensp;|&ensp;Shop Women's
                    </nav>
                    <nav id="mobile-nav">
                        <div id="menu-wrap">
                            <div id="menu-bar" onClick={onClickMenu}>
                                <div id="bar1" className="bar"></div>
                                <div id="bar2" className="bar"></div>
                                <div id="bar3" className="bar"></div>
                            </div>
                            <div className="accordion" id="list-mobile-menu">
                                <div className="accordion-item">
                                    <div className="accordion-title" onClick={() => setIsActive(!isActive)} >
                                        <div id="accordion-title"><p>MEN</p></div>
                                        <div id="accordion-button">{isActive ? <FaAngleUp /> : <FaAngleRight />}</div>
                                    </div>
                                    {
                                        isActive && 
                                            <div className="accordion-content" onClick={() => setIsState(!isState)}>
                                                <div id="accordion-title"><p>Shoes</p></div>
                                                <div id="accordion-button">{isState ? <FaAngleUp /> : <FaAngleRight />}</div>
                                            </div>
                                    }
                                    {
                                        isState && 
                                            <div className="accordion-data">
                                                <ul>
                                                    <li>Everyday Sneekers</li>
                                                    <li>Everyday Sneekers</li>
                                                    <li>Everyday Sneekers</li>
                                                </ul>
                                            </div>
                                    }
                            
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-title" onClick={() => setIsActive(!isActive)} >
                                        <div id="accordion-title"><p>Women</p></div>
                                        <div id="accordion-button">{isActive ? <FaAngleUp /> : <FaAngleRight />}</div>
                                    </div>
                                    {
                                        isActive && 
                                            <div className="accordion-content" onClick={() => setIsState(!isState)}>
                                                <div id="accordion-title"><p>Accessories</p></div>
                                                <div id="accordion-button">{isState ? <FaAngleUp /> : <FaAngleRight />}</div>
                                            </div>
                                    }
                                    {
                                        isState && 
                                            <div className="accordion-data">
                                                <ul>
                                                    <li>Tees</li>
                                                    <li>Tees</li>
                                                    <li>Tees</li>
                                                </ul>
                                            </div>
                                    }
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-title">
                                        <div id="accordion-title"><NavLink to="/rerun"><p>RERUN</p></NavLink></div>
                                        <div id="accordion-button"> <FaAngleRight /></div>
                                    </div>                                    
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-title">
                                        <div id="accordion-title"><NavLink to="/stores"><p>STORES</p></NavLink></div>
                                        <div id="accordion-button"><FaAngleRight /></div>
                                    </div>                                    
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-title">
                                        <div id="accordion-title"><NavLink to="/login"><p>SIGN IN</p></NavLink></div>
                                        <div id="accordion-button"><FaAngleRight /></div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div id="mobile-logo">
                           <NavLink to="/"> <img src={Logo} alt=""></img></NavLink>
                        </div>
                        <div id="mobile-cart-block">
                            <div id="shop-cart" onClick={onClickCart}>
                                <FaShoppingCart></FaShoppingCart>
                            </div>
                            <div className="d-none" id="cart-list">
                                <div id="item-list">
                                    <ul>
                                        <li>Hello</li>
                                        <li>Hello</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </section>
       </>
    )
}

export default FrontHeader