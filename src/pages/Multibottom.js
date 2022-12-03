import React, {Component} from "react";
import Slider from "react-slick";

export default class Multibottom extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: -1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>

                <Slider className="   overflow-hidden  " {...settings}>


                    <div>
                        <img className="px-10 h-60" src="img/user_resume (2).png" alt="user_resume (2).png"/>
                    </div>
                    <div>
                        <img className=" px-10 h-60" src="img/user_resume (3).png" alt="user_resume (3).png"/>
                    </div>
                    <div>
                        <img className="px-10 h-60" src="img/user_resume (4).png" alt="user_resume (4).png"/>
                    </div>
                    <div>
                        <img className="px-10 h-60" src="img/user_resume (5).png" alt="user_resume (5).png"/>
                    </div>
                    <div>
                        <img className="px-10 h-60" src="img/user_resume (6).png" alt="user_resume (6).png"/>
                    </div>
                    <div>
                        <img className="px-10 h-60" src="img/user_resume (7).png" alt="user_resume (7).png"/>
                    </div>
                    <div>
                        <img className="px-10 h-60" src="img/user_resume (8).png" alt="user_resume (8).png"/>
                    </div>



                </Slider>
            </div>
        );
    }
}