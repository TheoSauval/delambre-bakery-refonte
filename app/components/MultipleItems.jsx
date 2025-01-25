"use client"

import React from "react";
import Slider from "react-slick";


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next`}
            style={{ ...style, display: "block", background: "#D84315", borderRadius: "50%" }}
            onClick={onClick}
        >
            <span style={{ color: "Black", fontWeight: "bold", padding: "8px" }}>{">"}</span>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev`}
            style={{ ...style, display: "block", background: "#D84315", borderRadius: "50%" }}
            onClick={onClick}
        >
            <span style={{ color: "White", fontWeight: "bold", padding: "8px" }}>{"<"}</span>
        </div>
    );
}

function MultipleItems() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="slider-container m-12 pr-10 left-0 right-0">
            <Slider {...settings}>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/cookie-daim.png" alt="" className="size-96" />
                        <h3>Daim</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/cookie-original.png" alt="" className="size-96" />
                        <h3>Original</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/cookie-orignal.png" alt="" className="size-96" />
                        <h3>Kinder Madness</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/cookie-praline.png" alt="" className="size-96" />
                        <h3>Praline</h3>
                        <p>3.50 €</p>
                    </div>
                </button>

                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/Canadian-Maple.png" alt="" className="size-96" />
                        <h3>Canadian Maple</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/Chocolate-Tuxedo.png" alt="" className="size-96" />
                        <h3>Chocolate Tuxedo</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/cookie-New-Yorker.png" alt="" className="size-96" />
                        <h3>New-Yorker</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/Nutella-explosion.png" alt="" className="size-96" />
                        <h3>Nutella explosion</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/Peanut-Butter.png" alt="" className="size-96" />
                        <h3>Peanut Butter</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/REd-Velvet.png" alt="" className="size-96" />
                        <h3>Red Velvet</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
                <button className="hover:bg-rougecerise hover:text-blanccasse transition ease-linear py-2 px-4 rounded-3xl">
                    <div className="p-4 text-2xl flex flex-col items-start">
                        <img src="/img/Speculoos.png" alt="" className="size-96" />
                        <h3>Speculoos</h3>
                        <p>3.50 €</p>
                    </div>
                </button>
            </Slider>
        </div >
    );
}

export default MultipleItems;
