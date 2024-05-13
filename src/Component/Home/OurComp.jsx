import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../Images/ourimage/home-9.jpg";
import image1 from "../Images/ourimage/home-9-30x14.jpg";
import image2 from "../Images/ourimage/home-10.jpg";
import image3 from "../Images/ourimage/home-11.jpg";
import image4 from "../Images/ourimage/home-12.jpg";
import image5 from "../Images/ourimage/home-13.jpg";
import { Container } from "react-bootstrap";

function OurComp() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <h1 className="py-4">Our Sponsors</h1>
      <Container>
        <Slider {...settings}>
          <div>
            <img src={image} alt="aaa" />
          </div>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>  
          <div>
            <img src={image4} alt="" />
          </div>
          <div>
            <img src={image5} alt="" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default OurComp;
