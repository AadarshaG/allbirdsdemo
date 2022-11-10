import React,{ useState } from 'react'

import './favorite.component.css'

import FirstImage from '../../../images/AB00ADW_SHOE_LEFT_GLOBAL_WOMENS_WOOL_BREEZER_NATURAL_BLACK_NATURAL_BLACK.avif'
import SecondImage from '../../../images/AA0030M_SHOE_LEFT_GLOBAL_MENS_WOOL_DASHER2_MIZZLE_NATURAL_BLACK_RUGGED_KHAKI.avif'
import ThirdImage from '../../../images/AB0099U_SHOE_LEFT_GLOBAL_UNISEX_WOOL_DEWELLER_BUOYANT_PINK.avif'


export function Favorite(){

    const [stateTab, setStateTab] = useState(1)

    const activeTab = (index) => {
        setStateTab(index)
        console.log(index)
    }
   
    return(
        <>
           <section id="favorite">
                <div className="container">
                    <div className="row">
                        <div id="favorite-title">
                            <h3> OUR FAVORITES</h3>
                        </div>
                        <div className="fav-tabs" id="favorite-menus">
                            <div className={ stateTab === 1 ? "tab active-tab" : "tab"} onClick={() => activeTab(1)}>FOR EVERYDAY</div>                        
                            <div className={ stateTab === 2 ? "tab active-tab" : "tab"} onClick={() => activeTab(2)}>FOR THE RAIN</div>                        
                            <div className={ stateTab === 3 ? "tab active-tab" : "tab"} onClick={() => activeTab(3)}>FOR RUNNING</div>                        
                        </div>
                        <div  className="contents">
                            <div className={ stateTab === 1 ? "content active-content" : "content"} >
                                <div id="favorite-container">
                                <div className="col-sm-12 col-md-6 col-lg-4" id="margin-space">
                                    <div  id="favorite-card">
                                        <img src={FirstImage} alt=""></img>
                                        <div id="favorite-card-body">
                                            <h3>Title</h3><hr></hr>
                                            <p>Lorem Ipsum is dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4" id="margin-space">
                                    <div  id="favorite-card">
                                        <img src={SecondImage} alt="" />
                                        <div id="favorite-card-body">
                                            <h4>Title lorem Ipsum</h4>
                                            <hr></hr>
                                            <p> Description endures pains to avoid
                                            Description endures pains to avoid
                                            Description endures pains to avoid
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4" id="margin-space">
                                    <div  id="favorite-card">
                                        <img src={ThirdImage} alt=""></img>
                                        <div id="favorite-card-body">
                                            <h3>Title</h3><hr></hr>
                                            <p>Lorem Ipsum is dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={ stateTab === 2 ? "content active-content" : "content"} >
                                <div  id="favorite-container">
                                <div className="col-sm-12 col-md-6 col-lg-4" id="margin-space">
                                    <div id="favorite-card">
                                        <img src={FirstImage} alt=""></img>
                                        <div id="favorite-card-body">
                                            <h3>Title</h3><hr></hr>
                                            <p>Lorem Ipsum is dummy text</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-4" id="margin-space">
                                    <div id="favorite-card">
                                        <img src={SecondImage} alt="" />
                                        <div id="favorite-card-body">
                                            <h4>Title lorem Ipsum</h4>
                                            <hr></hr>
                                            <p> Description endures pains to avoid
                                            Description endures pains to avoid
                                            Description endures pains to avoid
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className={ stateTab === 3 ? "content active-content" : "content"} >
                                <div id="favorite-container">
                                    <div className="col-sm-12 col-md-6 col-lg-4" id="margin-space">
                                        <div id="favorite-card">
                                            <img src={FirstImage} alt=""></img>
                                            <div id="favorite-card-body">
                                                <h3>Title</h3><hr></hr>
                                                <p>Lorem Ipsum is dummy text</p>
                                            </div>
                                        </div>
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
