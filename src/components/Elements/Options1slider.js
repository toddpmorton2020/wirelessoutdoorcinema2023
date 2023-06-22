import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OptionOneslider = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    };

    const settingsThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };

    return (
        <>
            <div className="slider-wrapper">
                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={slider => (setSlider1(slider))}
                >
                    <div>
                        <StaticImage src='../../assets/images/screenAndFrame.png' />
                    </div>
                    <div>
                        <StaticImage src='../../assets/images/lg_battery.png' />
                    </div>

                    <div>
                        <StaticImage src='../../assets/images/lg_projector.png' />
                    </div>
                    <div>
                        <StaticImage src='../../assets/images/lg_speaker.png' />
                    </div>

                    <div>
                        <StaticImage src='../../assets/images/roku.png' />
                    </div>
                    <div>
                        <StaticImage src='../../assets/images/projectStand.png' />
                    </div>
                </Slider>
                <div className="thumbnail-slider-wrap mt-5 ">
                    <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={slider => (setSlider2(slider))}>
                        <div>
                            <StaticImage src='../../assets/images/screenAndFrame.png' className='border border-neutral-400' />
                        </div>
                        <div>
                            <StaticImage src='../../assets/images/lg_battery.png' className='border border-neutral-400' />
                        </div>

                        <div>
                            <StaticImage src='../../assets/images/lg_projector.png' className='border border-neutral-400' />
                        </div>
                        <div>
                            <StaticImage src='../../assets/images/lg_speaker.png' className='border border-neutral-400' />
                        </div>

                        <div>
                            <StaticImage src='../../assets/images/roku.png' className='border border-neutral-400' />
                        </div>
                        <div>
                            <StaticImage src='../../assets/images/projectStand.png' className='border border-neutral-400' />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}
export default OptionOneslider