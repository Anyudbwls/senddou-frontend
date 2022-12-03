import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {

            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            pauseOnHover: true,
            swipeToSlide: true,
        };
        return (
            <div>

                <Slider {...settings}>
                    <div >
                        <img className="w-72px h-72px px-6" src="img/이력서 (1).png" alt="이력서 (1).png"/>
                    </div>
                    <div >
                        <img className="w-50px h-55px px-6" src="img/이력서 (2).png" alt="이력서 (2).png"/>
                    </div>
                    <div>
                        <img className="w-50px h-55px px-6" src="img/이력서 (3).png" alt="이력서 (3).png"/>
                    </div>
                    <div>
                        <img className="w-50px h-55px px-6" src="img/이력서 (1).png" alt="이력서 (1).png"/>
                    </div>
                    <div>
                        <img className="w-50px h-55px px-6" src="img/이력서 (2).png" alt="이력서 (2).png"/>
                    </div>
                    <div>
                        <img className="w-50px h-55px px-6" src="img/이력서 (3).png" alt="이력서 (3).png"/>
                    </div>

                </Slider>
            </div>
        );
    }
}