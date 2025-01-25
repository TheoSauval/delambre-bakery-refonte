"use client"

import React from "react";
import Slider from "react-slick";

function TextCarousel() {
    const settings = {
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false, // Désactive les flèches

    };
    return (
        <div className="slider-container relative text-6xl">
            <Slider {...settings}>
                <div className="text-center">
                    <h3>De mardi à samedi</h3>
                </div>
                <div className="text-center">
                    <h3>Lille : 13h à 19h</h3>
                </div>
                <div className="text-center">
                    <h3>Paris : 12h à 19h</h3>
                </div>
            </Slider>
        </div>
    );
}

export default TextCarousel;
