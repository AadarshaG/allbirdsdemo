import React from "react";
import Slider from "react-slick";

import "./newarrival.component.css";
import FirstImage from "../../../images/AB00ADW_SHOE_LEFT_GLOBAL_WOMENS_WOOL_BREEZER_NATURAL_BLACK_NATURAL_BLACK.avif";
import SecondImage from "../../../images/AA0030M_SHOE_LEFT_GLOBAL_MENS_WOOL_DASHER2_MIZZLE_NATURAL_BLACK_RUGGED_KHAKI.avif";
import ThirdImage from "../../../images/AB0099U_SHOE_LEFT_GLOBAL_UNISEX_WOOL_DEWELLER_BUOYANT_PINK.avif";
import ForthImage from "../../../images/AB00ADW_SHOE_LEFT_GLOBAL_WOMENS_WOOL_BREEZER_NATURAL_BLACK_NATURAL_BLACK.avif";

export function NewArrival() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true
  };
 
  return (
    <>
      <section id="new-arrival">
        <div className="container">
          <div id="new-arrival-heading">
            <h2>New Arrivals</h2>
          </div>
          <div className="row " id="flex-arrival">
          {/* <Slider {...settings}> */}
             <div className="col-sm-12 col-md-6 col-lg-4">
                <div id="arrival-card">
                  <img src={FirstImage} alt="" />
                  <div id="arrival-body">
                    <h4>Title lorem Ipsum</h4>
                    <p>Short Description</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div id="arrival-card">
                  <img src={SecondImage} alt="" />
                  <div id="arrival-body">
                    <h4>Title lorem Ipsum</h4>
                    <p>Short Description</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div id="arrival-card">
                  <img src={ThirdImage} alt="" />
                  <div id="arrival-body">
                    <h4>Title lorem Ipsum</h4>
                    <p>Short Description</p>
                  </div>
                </div>
              </div>
           
          {/* </Slider> */}
          </div>
        </div>
      </section>
    </>
  );
}
