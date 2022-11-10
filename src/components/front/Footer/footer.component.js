import React from 'react'

import './footer.component.css'

import LogoImage from '../../../images/icon-b-corp.png'
import FlagImage from '../../../images/flag-ca.svg'
import CanadaImage from '../../../images/flag-cn.svg'
import NewZealandImage from '../../../images/flag-nz.svg'
import LondonImage from '../../../images/flag-uk.svg'
import UsImage from '../../../images/flag-us.svg'

function FrontFooter(){

    return(
       <>
            <section id="footer1">
                
                <div className="link-list1">
                    <ul className="col-3" id="help-list">
                        <div id="footer-list-title"> <h4>HELP</h4></div>
                        <li>1-888-963-8944</li>
                        <li>1-814-251-9966 (Text)</li>
                        <li>help@allbirds.com</li>
                        <li>Returns/Exchanges</li>
                        <li>FAQ/Contact Us</li>
                        <li>Afterpay </li>
                    </ul>
                    <ul className="col-3"  id="shop-list">
                        <div id="footer-list-title"> <h4>SHOP</h4></div>
                        <li> Men's Shoes</li>
                        <li>Women's Shoes</li>
                        <li>Men's Apparel</li>
                        <li>Women's Apparel</li>
                        <li>Socks</li>
                        <li>Gift Cards</li>
                        <li>Refer a Friend</li>
                        <li>Download the Allbirds App</li>
                    </ul>
                    <ul className="col-3"  id="company-list">
                        <div id="footer-list-title"> <h4>COMPANY</h4></div>
                        <li> Our Story</li>
                        <li> Our Materials</li>
                        <li>Sustainability</li>
                        <li>Investors</li>
                        <li>Partnerships</li>
                        <li>Product Testing</li>
                        <li>Affiliates</li>
                        <li>Bulk Orders</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
            
                <div className="link-list2">
                    <ul className="col-4" id="follow-flock">
                        <div id="footer-list-title2"> <h4>Follow the Flock</h4></div>
                        <li><p>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's </p></li>
                        
                    </ul>
                    <ul className="col-2" id="footer-logo">
                        <li><img src={LogoImage} alt=""></img></li>
                    </ul>
                    <ul className="col-6 flag-list">
                        <li><img src={FlagImage} alt=""></img></li>
                        <li><img src={CanadaImage} alt=""></img></li>
                        <li><img src={UsImage} alt=""></img></li>
                        <li><img src={LondonImage} alt=""></img></li>
                        <li><img src={UsImage} alt=""></img></li>
                        <li><img src={UsImage} alt=""></img></li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>© 2022 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
                </div>
            </section>

            <section id="mobile-footer">
                <div id="mobile-block">
                   <div id="display-data">
                        <div id="help">
                            <h1>HELP</h1>
                            <ul>
                                <li>1-888-963-8944</li>
                                <li>1-814-251-9966 (Text)</li>
                                <li>help@allbirds.com</li>
                                <li>Returns/Exchanges</li>
                                <li>FAQ/Contact Us</li>
                                <li>Afterpay </li>
                            </ul>
                        </div>
                        <div id="shops">
                            <h1>SHOPS</h1>
                            <ul>
                                <li> Men's Shoes</li>
                                <li>Women's Shoes</li>
                                <li>Men's Apparel</li>
                                <li>Women's Apparel</li>
                                <li>Socks</li>
                                <li>Gift Cards</li>
                                <li>Refer a Friend</li>
                                <li>Download the Allbirds App</li>
                            </ul>
                        </div>
                        <div id="company">
                            <h1>COMPANY</h1>
                            <ul>
                                <li> Our Story</li>
                                <li> Our Materials</li>
                                <li>Sustainability</li>
                                <li>Investors</li>
                                <li>Partnerships</li>
                                <li>Product Testing</li>
                                <li>Affiliates</li>
                                <li>Bulk Orders</li>
                                <li>Careers</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div id="follow">
                            <h1>Follow the Flock</h1>
                            < ul>
                                <li>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's</li>
                        
                            </ul>
                        </div>
                        <div id="logo">
                            <ul>
                                <li><img src={LogoImage} alt=""></img></li>
                            </ul>
                        </div>
                        <div id="flag">
                            <ul>
                                <li><img src={FlagImage} alt=""></img></li>
                                <li><img src={CanadaImage} alt=""></img></li>
                                <li><img src={UsImage} alt=""></img></li>
                                <li><img src={LondonImage} alt=""></img></li>
                                <li><img src={UsImage} alt=""></img></li>
                                <li><img src={UsImage} alt=""></img></li>
                            </ul>
                        </div>
                        <div id="copyright">
                        <p>© 2022 Allbirds, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default FrontFooter
