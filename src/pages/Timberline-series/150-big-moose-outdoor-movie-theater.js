import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import Breadcrumbs from "../../components/Elements/breadcrumbs"
import ProductSection from "../../components/Elements/ProductSection"
import OptionOneslider from '../../components/Elements/Options1slider';
import OptionTwoslider from '../../components/Elements/Options2slider';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BigMooseCinema = () => {
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
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };



    return (
        <Layout>
            <>
                <div className="wrapper desktop md:block hidden">
                    <div className="max-w-7xl px-5 mx-auto">
                        <div className="py-5 xl:pt-5">
                            <Breadcrumbs page_title={'150 Big Moose Outdoor Cinema'}/>
                            <div className="mt-12 grid xl:grid-cols-2 grid-cols-1">
                                <div className="mt-10 xl:mt-0 pr-0 xl:pr-12 xl:order-first order-last">
                                    <h1 className="xl:text-70 text-4xl md:text-5xl text-orange-500 sm:text-5xl leading-none relative mb-0">
                                        150” Big Moose
                                    </h1>
                                    <h2 className="xl:text-50 md:text-4xl text-3xl text-black leading-none relative mb-0 mt-0">
                                        Outdoor Cinema
                                    </h2>
                                    <p className="sm:text-lg text-base mt-4 max-w-full mb-5">
                                        Standing at 12’ ft. wide and 10’ ft. high, this massive
                                        viewing screen is for the homeowner who wants the biggest and
                                        best. And perfect for business owners who want to attract more
                                        customers to their place of business with outdoor seating.
                                    </p>
                                    <p className="sm:text-lg text-base mt-3 mb-0 max-w-full">
                                        The Big Moose outdoor cinema is the elite of all available
                                        packages with a giant screen and an easy setup that allows you
                                        to begin watching in less than 5 minutes. Now, that's
                                        lightning-fast compared to the competition.
                                    </p>
                                </div>
                                <div className="pl-0 xl:pl-12 text-center xl:text-left rightContainer">

                                    <div className="slider-wrapper">
                                        <Slider
                                            {...settingsMain}
                                            asNavFor={nav2}
                                            ref={slider => (setSlider1(slider))}
                                        >
                                            <div>
                                                <StaticImage src='../../assets/images/moosedesktop.png' />
                                            </div>
                                            <div>
                                                <StaticImage src='../../assets/images/lionKing.png' />
                                            </div>

                                            <div>
                                                <StaticImage src='../../assets/images/godzillaScreen.png' />
                                            </div>
                                            <div>
                                                <StaticImage src='../../assets/images/roadHouse.png' />
                                            </div>

                                            <div>
                                                <StaticImage src='../../assets/images/holloween.png' />
                                            </div>
                                            <div>
                                                <StaticImage src='../../assets/images/winter.png' />
                                            </div>
                                        </Slider>
                                        <div className="thumbnail-slider-wrap mt-5 ">
                                            <Slider
                                                {...settingsThumbs}
                                                asNavFor={nav1}
                                                ref={slider => (setSlider2(slider))}>
                                                <div>
                                                    <StaticImage src='../../assets/images/moosedesktop.png' className='border border-neutral-400' />
                                                </div>
                                                <div>
                                                    <StaticImage src='../../assets/images/lionKing.png' className='border border-neutral-400' />
                                                </div>

                                                <div>
                                                    <StaticImage src='../../assets/images/godzillaScreen.png' className='border border-neutral-400' />
                                                </div>
                                                <div>
                                                    <StaticImage src='../../assets/images/roadHouse.png' className='border border-neutral-400' />
                                                </div>

                                                <div>
                                                    <StaticImage src='../../assets/images/holloween.png' className='border border-neutral-400' />
                                                </div>
                                                <div>
                                                    <StaticImage src='../../assets/images/winter.png' className='border border-neutral-400' />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full py-9 xl:my-14 my-10 bg-gray-100 text-center">
                        <h2 className="xl:text-50 lg:text-5xl md:text-4xl text-3xl text-orange-500">Option 1: <span className="text-black">Go Wireless</span></h2>
                    </div>

                    <div className="max-w-7xl px-5 mx-auto">
                        <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
                            <div className="text-center md:text-left">

                                <OptionOneslider />

                            </div>
                            <div className="mt-6 xl:mt-0">
                                <h3 className="xl:text-35 text-3xl mb-4">
                                    Get the only Wireless Outdoor Cinema
                                </h3>
                                <p className="max-w-full mb-5 text-lg">
                                    Get this ground-breaking wireless outdoor movie theater and
                                    avoid the hassle of running extension cords from your home to
                                    the cinema equipment. The included off-grid battery station
                                    powers your cinema equipment, allowing you to watch two films
                                    before needing to be recharged. Unfortunately, due to the
                                    extra power consumption, the wireless feature does not allow
                                    you to connect the speakers with stands or the Digital FM
                                    Transmitter, as shown below.
                                </p>
                                <h3 className="xl:text-35 text-3xl mb-5">
                                    Wireless Cinema Package Includes
                                </h3>
                                <ul className="list">
                                    <li className='list-disc mb-0 text-lg'>Pressure-treated wooden movie frame</li>
                                    <li className='list-disc mb-0 text-lg'>Wrinkle-free Cinematic Screen with black backing</li>
                                    <li className='list-disc mb-0 text-lg'>1080p HD Projector with 4,000 Lumens</li>
                                    <li className='list-disc mb-0 text-lg'>Bluetooth Sound bar Speaker</li>
                                    <li className='list-disc mb-0 text-lg'>Chargeable Off-Grid Battery Station</li>
                                    <li className='list-disc mb-0 text-lg'>Roku Express 4k Player with voice control</li>
                                    <li className='list-disc mb-0 text-lg'>Custom Cedar Equipment Stand</li>
                                    <li className='list-disc mb-0 text-lg'>Friendly and Professional Installation</li>
                                </ul>
                                <div className="mt-4 flex justify-between items-center">
                                    <div className="">
                                        <Link to="/connect" className='bg-orange-500 text-white py-4 px-8 uppercase font-bold rounded duration-300 transition hover:bg-orange-600 no-underline'>Call Today</Link>
                                    </div>
                                    <div className="flex flex-col items-center pl-4">
                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                            <span className="hidden sm:inline">Sale Price</span>
                                            <span className="inline sm:hidden">
                                                <br />
                                                Sale Price
                                            </span>
                                        </span>
                                        <span className="text-3xl text-orange-500 flex items-start mt-2">
                                            <span className="text-2xl">$</span>2,899
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center priceContainer">
                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                            <span className="hidden sm:inline">Reg Price</span>
                                            <span className="inline sm:hidden">
                                                <br />
                                                Reg Price
                                            </span>
                                        </span>
                                        <span className="text-3xl text-neutral-500 flex items-start line-through mt-2">
                                            <span className="text-2xl">$</span>3,499
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center priceContainer">
                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                            <span className="hidden sm:inline">You Save</span>
                                            <span className="inline sm:hidden">
                                                <br />
                                                Save
                                            </span>
                                        </span>
                                        <span className="text-3xl text-orange-500 flex items-start mt-2">
                                            <span className="text-2xl">$</span>600
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ProductSection
                            title="Wireless Cinema Specifications"

                            content={
                                <div className="grid gap-8 sm:grid-cols-2 mt-10">
                                    <div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Wooden Frame For Screen
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                4" x 4” Frame Dimensions: 123" Wide by 102" High x 42“
                                                Deep
                                            </div>
                                            <div className="mb-2 flex items-start ">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 65-75 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 5-Year Limited
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                HD Cinematic Screen
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Cinematic Screen Dimensions: 111” Wide by 70” High
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 1.2 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 1-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                HD Projector
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Bluetooth Capable: No
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Native Resolution: 800 x 480
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Supported Resolutions: 480P, 720P & 1080P
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Contrast Ratio: 2,000:1
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Display Technology: LCD
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Light Source: LED
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Image Brightness/Lumens: 3600
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Ports: USB, Micro SD Card, AV, HDMI, VGA Input, Audio
                                                IN/OUT
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Built-in Speaker: 2 watt / 8 ohm
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Lamp Life: 40,000 hours
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Screen Size Range: 4.9’ feet to 16’ feet away from the
                                                projector
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Projector Dimensions: 7.9” Wide x 5.9” Deep x 3.10” High
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 2.1 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 2-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Off-Grid Battery Station
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Cell Chemistry: Li-ion NMC
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Lifecycles: ≥500 cycles to 80%
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Management System: BMS, Over Voltage & Short Circuit
                                                Protection
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Charge Methods: AC Wall Outlet, 12V Car adaptor
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Full Recharge Time: 5 (HOURS) AC
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Shelf-life: Charge every 3-6 Months
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Operating Usage Temperature: 32-104F
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Certification: FCC, ROHS, UN38.3
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Battery Dimensions: 7.4" Width x 6.7" Height x 4.5"
                                                Depth
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Weight: 3.84 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 2-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Soundbar Speaker
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Wireless Operation Range: 30’ Feet
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Speaker Dimensions: 0.8" Width x 2.4" Height x 2" Depth
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Speaker Weight: 1.6 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 1-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Projector Stand
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Projector Stand: Cedar
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Stand Dimensions: 16“ Width x 24” High x 12” Depth
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 20 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 2-Year Limited
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                    <div className="w-full py-9 xl:my-16 my-12 bg-gray-100 text-center">
                        <h2 className="xl:text-50 lg:text-5xl md:text-4xl text-3xl text-orange-500">Option 2: <span className="text-black">Go Wired</span></h2>
                    </div>

                    <div className='max-w-7xl mx-auto px-5'>
                        <div className="grid xl:grid-cols-2 grid-cols-1">
                            <div className="flex-1 pr-0 xl:pr-12 xl:pb-0 pb-10">
                                <h3 className="xl:text-35 text-3xl mb-3">
                                    Get a year-round Backyard Outdoor Cinema
                                </h3>
                                <p className="mb-5 max-w-full text-lg">
                                    Get this fantastic backyard outdoor cinema setup and use it in
                                    any season Mother Nature has in store for you. The solid
                                    pressure-treated frame with weather-resistant hardware was
                                    built to stay up all year, making the entire cinema setup
                                    simple to attach to the cinematic screen and begin watching
                                    your favorite entertainment outside. This package differs from
                                    the wireless version in that it includes two powerful 8"
                                    outdoor speakers with tripod stands and a Digital FM
                                    Transmitter.
                                </p>
                                <h3 className="xl:text-35 md:text-2xl text-xl mb-5">
                                    Wired Cinema Package Includes
                                </h3>
                                <ul className="list">
                                    <li className='mb-0 list-disc text-lg'>Pressure-treated wooden movie frame</li>
                                    <li className='mb-0 list-disc text-lg'>Wrinkle-free Cinematic Screen with black backing</li>
                                    <li className='mb-0 list-disc text-lg'>1080p HD Projector with 4,000 Lumens</li>
                                    <li className='mb-0 list-disc text-lg'>Rockville 8“ Dual Speakers with Tripod Stands</li>
                                    <li className='mb-0 list-disc text-lg'>
                                        Rolls Digital FM Transmitter connects your speakers to the
                                        projector
                                    </li>
                                    <li className='mb-0 list-disc text-lg'>Roku Express 4k with voice control</li>
                                    <li className='mb-0 list-disc text-lg'>25'ft. Extension Cord and Waterproof Surge Strip</li>
                                    <li className='mb-0 list-disc text-lg'>
                                        Custom Cedar Equipment Stand with pivoting shelf for
                                        projector
                                    </li>
                                    <li className='mb-0 list-disc text-lg'>Friendly and Professional Installation</li>
                                </ul>
                                <div className="mt-4 flex justify-between items-center prices">

                                    <div className="">
                                        <Link to="/connect" className='bg-orange-500 text-white py-4 px-8 uppercase font-bold rounded duration-300 transition hover:bg-orange-600 no-underline'>Call Today</Link>
                                    </div>
                                    <div className="flex flex-col items-center priceContainer pl-4">
                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                            <span className="hidden sm:inline">Sale Price</span>
                                            <span className="inline sm:hidden">
                                                <br />
                                                Sale Price
                                            </span>
                                        </span>
                                        <span className="text-3xl text-orange-500 flex items-start mt-2">
                                            <span className="text-2xl">$</span>2,999
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center priceContainer">
                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                            <span className="hidden sm:inline">Reg Price</span>
                                            <span className="inline sm:hidden">
                                                <br />
                                                Reg Price
                                            </span>
                                        </span>
                                        <span className="text-3xl text-neutral-500 flex items-start line-through mt-2">
                                            <span className="text-2xl">$</span>3,599
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center priceContainer">
                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                            <span className="hidden sm:inline">Save</span>
                                            <span className="inline sm:hidden">
                                                <br />
                                                Save
                                            </span>
                                        </span>
                                        <span className="text-3xl text-orange-500 flex items-start mt-2">
                                            <span className="text-2xl">$</span>600
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 pl-0 md:pl-6 lg:pl-12 text-center md:text-left xl:pb-0 pb-10">
                                <OptionTwoslider />
                            </div>
                        </div>



                        <ProductSection
                            title="Wired Cinema Specifications"
                            content={
                                <div className="grid gap-8 sm:grid-cols-2 mt-10">
                                    <div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Wooden Frame For Screen
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                4" x 4” Frame Dimensions: 123" Wide by 102" High x 42“
                                                Deep
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 65-75 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 5-Year Limited
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                HD Cinematic Screen
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Cinematic Screen Dimensions: 111” Wide by 70” High
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 1.2 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 1-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                HD Projector
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Bluetooth Capable: No
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Native Resolution: 800 x 480
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Supported Resolutions: 480P, 720P & 1080P
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Contrast Ratio: 2,000:1
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Display Technology: LCD
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Light Source: LED
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Image Brightness/Lumens: 3600
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Ports: USB, Micro SD Card, AV, HDMI, VGA Input, Audio
                                                IN/OUT
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Built-in Speaker: 2 watt / 8 ohm
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Lamp Life: 40,000 hours
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Screen Size Range: 4.9’ feet to 16’ feet away from the
                                                projector
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Projector Dimensions: 7.9” Wide x 5.9” Deep x 3.10” High
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 2.1 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 2-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Off-Grid Battery Station
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Cell Chemistry: Li-ion NMC
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Lifecycles: ≥500 cycles to 80%
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Management System: BMS, Over Voltage & Short Circuit
                                                Protection
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Charge Methods: AC Wall Outlet, 12V Car adaptor
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Full Recharge Time: 5 (HOURS) AC
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Shelf-life: Charge every 3-6 Months
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Operating Usage Temperature: 32-104F
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Certification: FCC, ROHS, UN38.3
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Battery Dimensions: 7.4" Width x 6.7" Height x 4.5"
                                                Depth
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Weight: 3.84 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 2-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Soundbar Speaker
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Wireless Operation Range: 30’ Feet
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Speaker Dimensions: 0.8" Width x 2.4" Height x 2" Depth
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Speaker Weight: 1.6 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 1-Year Limited from Manufacturer
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h3 className="xl:text-35 md:text-2xl text-xl uppercase mb-6">
                                                Projector Stand
                                            </h3>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Projector Stand: Cedar
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Stand Dimensions: 16“ Width x 24” High x 12” Depth
                                            </div>
                                            <div className="mb-2 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Item Weight: 20 Lbs.
                                            </div>
                                            <div className="mb-6 flex items-start text-lg">
                                                <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                Warranty: 2-Year Limited
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />

                    </div>
                    <div className="w-full bg-gray-100 py-9 xl:my-16 my-12 text-center">
                        <h2 className="xl:text-50 lg:text-5xl md:text-4xl text-3xl text-orange-500">How to operate your <span className="text-black">Outdoor Cinema</span></h2>
                    </div>
                    <div className='max-w-7xl mx-auto px-5'>
                        <div className="flex flex-col xl:flex-row xl:mb-16 mb-8">
                            <div className="flex-1 mb-6 xl:mb-0 pr-0 xl:pr-12">
                                <StaticImage src="../../assets/images/screenSetup.png" className="w-full xl:w-auto" />
                            </div>
                            <div className="flex-1 pl-0 xl:pl-12 text-center md:text-left rightContainer">
                                <h3 className="xl:text-35 text-2xl mb-5">
                                    Attaching the Cinematic Screen
                                </h3>
                                <p className="mb-4 max-w-full text-lg">
                                    After your outdoor cinema has been professionally installed in
                                    your backyard, using it is almost as easy as watching
                                    entertainment on your TV in the comfort of your own home. The
                                    cinema frame can be left up all year and never needs to be
                                    broken down; all you have to do is attach the grommet hole
                                    cinematic screen to the inside edge of the frame. The cinema
                                    wooden frame has eye hooks that make it simple to attach the
                                    grommet hole cinematic screen.
                                </p>
                                <p className="mb-4 max-w-full text-lg">
                                    Begin attaching the cinematic screen to one of the top corners
                                    of the wooden frame by using a lightweight folding step ladder
                                    and work your way across. After attaching the top of the
                                    cinematic screen to the horizontal post, secure the bottom of
                                    the screen and then attach the sides. It takes less than 3
                                    minutes to connect the cinematic screen to the frame.
                                </p>
                                <p className="max-w-full text-lg">
                                    When you are finished watching your movies outside for the
                                    evening, remove the cinematic screen from the frame and store
                                    it in the included convenient carrying bag. It's so easy that
                                    even a moose could do it.
                                </p>
                            </div>
                        </div>
                        <div className="xl:mt-12 flex flex-col-reverse xl:flex-row">
                            <div className="flex-1 mt-6 xl:mt-0 pr-0 xl:pr-12">
                                <h3 className="xl:text-35 text-2xl mb-5">
                                    Using the Cinema Components
                                </h3>
                                <p className="mb-4 max-w-full text-lg">
                                    After your cinema package has been professionally installed,
                                    all electronic equipment is kept organized on the custom
                                    (patent pending) cedar projector stand, which never needs to
                                    be disassembled. The electronics are always kept on your
                                    projector stand, much like an entertainment system in your
                                    home. The cinema equipment is not waterproof and should be
                                    brought inside your home once you have finished watching at
                                    the end of the night.
                                </p>
                                <p className="mb-4 max-w-full text-lg">
                                    When you're ready to watch your favorite entertainment
                                    outside, take the lightweight cedar projector stand and all of
                                    the equipment out with you. The projector stand is typically
                                    set up 12'-15' feet away from the screen. After aligning the
                                    projector stand with the screen, turn on the power to the
                                    battery station and projector, fine-tune the projector's focus
                                    for sharpness, and you're ready to watch.
                                </p>
                                <p className="mb-4 max-w-full text-lg">
                                    With the 'wired' outdoor cinema, all you have to do is place
                                    your speakers and stands where you want them and plug the
                                    speaker wires into the Digital FM Transmitter console located
                                    on your projector stand.
                                </p>
                            </div>
                            <div className="flex-1 pl-0 xl:pl-12 text-center md:text-left rightContainer">
                                <StaticImage src="../../assets/images/projectStand.png" className="w-full xl:w-auto" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full bg-gray-100 py-9 xl:my-16 my-12 text-center">
                        <h2 className="xl:text-50 lg:text-5xl md:text-4xl text-3xl text-orange-500">Outdoor Projector <span className="text-black">various connections</span></h2>
                    </div>

                    <div className="mb-20 max-w-7xl mx-auto px-5">
                        <h3 className="xl:text-35 md:text-2xl text-xl mb-6">
                            What you can plug into the projector
                        </h3>
                        <div className="mt-4 various-connections">
                            <div className="mb-6 flex items-start text-lg">
                                <div className='mt-2.5'><StaticImage src="../../assets/images/icons/checkmark.png" className="mr-3 w-5 h-5" width={20} height={20} /></div>
                                <span>
                                    You can connect your DVD Player, Laptop, Tablet, TV,
                                    Smartphone, Video Recorder, Xbox®, Playstation®, Wii®,
                                    Digital FM Transmitter, Digital Tuner, Speakers, and other
                                    devices to the projector's multiple ports on the back.
                                </span>
                            </div>
                            <div className="mb-6 flex items-center text-lg">
                                <div className='mt-1'><StaticImage src="../../assets/images/icons/checkmark.png" className="mr-3 w-5 h-5" width={20} height={20} /></div>
                                <span>
                                    There is 1 AV Port, 1 VGA Port, 1 USB Port, 1 ATV Port, 1
                                    Audio Out Port, 1 HDMI Port, and 1 Memory Card Slot on the
                                    1080p HD Projector.
                                </span>
                            </div>
                            <div className="mb-6 flex items-start text-lg">
                                <div className='mt-2.5'><StaticImage src="../../assets/images/icons/checkmark.png" className="mr-3 w-5 h-5" width={20} height={20} /></div>
                                <span>
                                    Using the included Roku Player, you can watch Netflix, Hulu,
                                    Disney+, HBO Max, Amazon Prime Video, Youtube, ESPN, MLB,
                                    NFL, NBA, and much more. In addition, the Amazon Firestick®,
                                    Google Chromecast®, and Apple TV Box® are all compatible
                                    with the 1080p HD Projector.
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="wrapper mobile md:hidden block">
                    <div className="max-w-7xl px-5 mx-auto">
                        <div className="py-6">
                            <div className="flex flex-wrap items-center text-sm text-lg">
                                <Link
                                    to="/"
                                    className="text-blue-600 sm:text-black cursor-pointer"
                                >
                                    Home
                                </Link>
                                <span className="mx-2">&gt;</span>
                                <span to="#">Timberline Cinema Packages</span>
                                <span className="mx-2">&gt;</span>
                                <span>150" Big Moose</span>
                            </div>
                            <div className="mt-12 flex flex-col-reverse md:flex-row mb-8">
                                <div className="mt-10">
                                    <h1 className="text-4xl text-orange-500 mb-0 relative">
                                        150” Big Moose
                                    </h1>
                                    <h2 className="text-black text-3xl mb-0 relative">
                                        Outdoor Cinema
                                    </h2>
                                    <p className="sm:text-lg text-base mt-3 max-w-full">
                                        Standing at 12’ ft. wide and 10’ ft. high, this massive
                                        viewing screen is for the homeowner who wants the biggest and
                                        best. And perfect for business owners who want to attract more
                                        customers to their place of business with outdoor seating.
                                    </p>
                                    <p className="sm:text-lg text-base mt-3 max-w-full">
                                        The Big Moose outdoor cinema is the elite of all available
                                        packages with a giant screen and an easy setup that allows you
                                        to begin watching in less than 5 minutes. Now, that's
                                        lightning-fast compared to the competition.
                                    </p>
                                    <p className="sm:text-lg text-base mt-3 max-w-full">
                                        Continue learning more about the 150” Big Moose Outdoor Cinema
                                        by clicking on the buttons below with expandable content that
                                        will give you more information on the cinema package,
                                        specifications, and pricing details.
                                    </p>
                                </div>
                                <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                                    <div className="slider-wrapper">
                                        <Slider
                                            {...settingsMain}
                                            asNavFor={nav2}
                                            ref={slider => (setSlider1(slider))}
                                        >
                                            <div>
                                                <StaticImage src='../../assets/images/moosedesktop.png' />
                                            </div>
                                            <div>
                                                <StaticImage src='../../assets/images/lionKing.png' />
                                            </div>

                                            <div>
                                                <StaticImage src='../../assets/images/godzillaScreen.png' />
                                            </div>
                                            <div>
                                                <StaticImage src='../../assets/images/roadHouse.png' />
                                            </div>

                                            <div>
                                                <StaticImage src='../../assets/images/holloween.png' />
                                            </div>
                                            <div>
                                                <StaticImage src='../../assets/images/winter.png' />
                                            </div>
                                        </Slider>
                                        <div className="thumbnail-slider-wrap mt-5 ">
                                            <Slider
                                                {...settingsThumbs}
                                                asNavFor={nav1}
                                                ref={slider => (setSlider2(slider))}>
                                                <div>
                                                    <StaticImage src='../../assets/images/moosedesktop.png' className='border border-neutral-400' />
                                                </div>
                                                <div>
                                                    <StaticImage src='../../assets/images/lionKing.png' className='border border-neutral-400' />
                                                </div>

                                                <div>
                                                    <StaticImage src='../../assets/images/godzillaScreen.png' className='border border-neutral-400' />
                                                </div>
                                                <div>
                                                    <StaticImage src='../../assets/images/roadHouse.png' className='border border-neutral-400' />
                                                </div>

                                                <div>
                                                    <StaticImage src='../../assets/images/holloween.png' className='border border-neutral-400' />
                                                </div>
                                                <div>
                                                    <StaticImage src='../../assets/images/winter.png' className='border border-neutral-400' />
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8">
                                <ProductSection
                                    title="OPTION 1: GO WIRELESS"
                                    content={

                                        <div className="flex flex-col-reverse md:flex-row">
                                            <div className="flex-1 pl-0 md:pl-12 text-center md:text-left">
                                                <h2 className="text-3xl mt-8 mb-4">
                                                    Get the only wireless outdoor cinema on the market today
                                                </h2>
                                                <p className="mb-4 text-left sm:text-lg text-base">
                                                    Get this ground-breaking wireless outdoor movie theater
                                                    and avoid the hassle of running extension cords from
                                                    your home to the cinema equipment. The included off-grid
                                                    battery station powers your cinema equipment, allowing
                                                    you to watch two films before needing to be recharged.
                                                    Unfortunately, due to the extra power consumption, the
                                                    wireless feature does not allow you to connect the
                                                    speakers with stands or the Digital FM Transmitter, as
                                                    shown below.
                                                </p>
                                                <h3 className="text-2xl text-left mb-4">
                                                    Wireless cinema package includes
                                                </h3>
                                                <div className="mb-8 text-left sm:text-lg text-base m-0 p-0">
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Pressure-treated wooden movie frame, which stays up
                                                            year-round
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Wrinkle-free Cinematic Screen with special black
                                                            backing
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>1080p HD Projector with 4,000 Lumens</span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>Bluetooth Sound bar Speaker</span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>Chargeable Off-Grid Battery Station</span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>Roku Express 4k Player with voice control</span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Custom Cedar Equipment Stand, which organizes
                                                            everything
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>Friendly and Professional Installation</span>
                                                    </div>
                                                </div>

                                                <div className="mt-4 flex justify-between prices mb-8">
                                                    <div className="flex flex-col items-center priceContainer">
                                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                                            <span className="inline md:hidden text-center">
                                                                Sale
                                                                <br />
                                                                Price
                                                            </span>
                                                        </span>
                                                        <span className="text-2xl text-orange-500 flex items-start">
                                                            <span className="text-xl">$</span>2,899
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center priceContainer">
                                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                                            <span className="inline md:hidden">
                                                                Reg
                                                                <br />
                                                                Price
                                                            </span>
                                                        </span>
                                                        <span className="text-2xl text-neutral-500 flex items-start line-through">
                                                            <span className="text-xl">$</span>3,499
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center priceContainer">
                                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                                            <span className="inline md:hidden">
                                                                You
                                                                <br />
                                                                Save
                                                            </span>
                                                        </span>
                                                        <span className="text-2xl text-orange-500 flex items-start">
                                                            <span className="text-xl">$</span>600
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex mt-2 mb-10">
                                                    <Link to="tel:2075952960" className='w-full bg-orange-500 text-white py-3 px-6 uppercase font-bold rounded duration-300 transition hover:bg-orange-600 no-underline'>Call Today</Link>
                                                </div>
                                                <ProductSection
                                                    title="SPECIFICATIONS"
                                                    content={
                                                        <div className="grid sm:gap-5 gap-2 sm:grid-cols-2 mt-4">
                                                            <div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Frame System
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        4" x 4” Frame Dimensions: 123" Wide by 102"
                                                                        High x 42“ Deep
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 65-75 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 5-Year Limited
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Cinema Screen
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Cinematic Screen Dimensions: 111” Wide by 70”
                                                                        High
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 1.2 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 1-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        1080p LED Projector
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Bluetooth Capable: No
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Native Resolution: 800 x 480
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Supported Resolutions: 480P, 720P & 1080P
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Contrast Ratio: 2,000:1
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Display Technology: LCD
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Light Source: LED
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Image Brightness/Lumens: 3600
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Ports: USB, Micro SD Card, AV, HDMI, VGA
                                                                        Input, Audio IN/OUT
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Built-in Speaker: 2 watt / 8 ohm
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Lamp Life: 40,000 hours
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Screen Size Range: 4.9’ feet to 16’ feet away
                                                                        from the projector
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Projector Dimensions: 7.9” Wide x 5.9” Deep x
                                                                        3.10” High
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 2.1 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 2-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Battery Station
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Cell Chemistry: Li-ion NMC
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Lifecycles: ≥500 cycles to 80%
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Management System: BMS, Over Voltage & Short
                                                                        Circuit Protection
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Charge Methods: AC Wall Outlet, 12V Car
                                                                        adaptor
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Full Recharge Time: 5 (HOURS) AC
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Shelf-life: Charge every 3-6 Months
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Operating Usage Temperature: 32-104F
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Certification: FCC, ROHS, UN38.3
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Battery Dimensions: 7.4" Width x 6.7" Height x
                                                                        4.5" Depth
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Weight: 3.84 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 2-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Soundbar Speaker
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Wireless Operation Range: 30’ Feet
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Speaker Dimensions: 0.8" Width x 2.4" Height x
                                                                        2" Depth
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Speaker Weight: 1.6 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 1-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Projector Stand
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Projector Stand: Cedar
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Stand Dimensions: 16“ Width x 24” High x 12”
                                                                        Depth
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 20 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 2-Year Limited
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                />
                                            </div>

                                            <div className="flex-1 mt-6">
                                                <OptionOneslider />
                                            </div>
                                        </div>
                                    }
                                />
                            </div>

                            <div className="mb-8">
                                <ProductSection
                                    title="OPTION 2: GO WIRED"
                                    content={
                                        <div className="flex flex-col-reverse">
                                            <div className="flex-1 mt-6 pr-0">
                                                <h2 className="text-3xl mt-6 mb-4">
                                                    Get a backyard outdoor cinema that you can use all year
                                                    long
                                                </h2>
                                                <p className="mb-4 sm:text-lg text-base">
                                                    Get this fantastic backyard outdoor cinema setup and use
                                                    it in any season Mother Nature has in store for you. The
                                                    solid pressure-treated frame with weather-resistant
                                                    hardware was built to stay up all year, making the
                                                    entire cinema setup simple to attach to the cinematic
                                                    screen and begin watching your favorite entertainment
                                                    outside. This package differs from the wireless version
                                                    in that it includes two powerful 8" outdoor speakers
                                                    with tripod stands and a Digital FM Transmitter.
                                                </p>
                                                <h3 className="text-2xl mb-4">
                                                    Wired cinema package includes
                                                </h3>
                                                <div className="m-0 mb-8 p-0">
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Pressure-treated woode movie frame, which stays up
                                                            year-round
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Wrinkle-free Cinematic Screen with special black
                                                            backing
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>1080p HD Projector with 4,000 Lumens</span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Rockville 8“ Dual Powered PA System Speakers with
                                                            Tripod Stands
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Rolls Digital FM Transmitter that connects your
                                                            speakers to the projector
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Roku Express 4k with voice control to access
                                                            Netflix, Hulu, Disney and more
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            25'ft. Med-duty Extension Cord and Waterproof Surge
                                                            Protector Power Strip
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>
                                                            Custom Cedar Equipment Stand with pivoting shelf for
                                                            projector
                                                        </span>
                                                    </div>
                                                    <div className="mb-5 flex items-start sm:text-lg text-base">
                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                        <span>Friendly and Professional Installation</span>
                                                    </div>
                                                </div>
                                                <div className="mt-4 flex justify-between mb-8">
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                                            <span className="inline md:hidden">
                                                                Sale
                                                                <br />
                                                                Price
                                                            </span>
                                                        </span>
                                                        <span className="text-2xl text-orange-500 flex items-start">
                                                            <span className="text-xl">$</span>2,999
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                                            <span className="inline md:hidden">
                                                                Reg
                                                                <br />
                                                                Price
                                                            </span>
                                                        </span>
                                                        <span className="text-2xl text-neutral-500 flex items-start line-through">
                                                            <span className="text-xl">$</span>3,599
                                                        </span>
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                                                            <span className="inline md:hidden">
                                                                You
                                                                <br />
                                                                Save
                                                            </span>
                                                        </span>
                                                        <span className="text-2xl text-orange-500 flex items-start">
                                                            <span className="text-xl">$</span>600
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex mt-2 mb-10 items-center">
                                                    <Link to="tel:2075952960" className='w-full bg-orange-500 text-white py-3 px-6 text-center uppercase font-bold rounded duration-300 transition hover:bg-orange-600 no-underline'>Call Today</Link>
                                                </div>
                                                <ProductSection
                                                    title="SPECIFICATIONS"
                                                    content={
                                                        <div className="grid sm:gap-5 gap-2 sm:grid-cols-2 mt-4">
                                                            <div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Frame System
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        4" x 4” Frame Dimensions: 123" Wide by 102"
                                                                        High x 42“ Deep
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 65-75 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 5-Year Limited
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Cinema Screen
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Cinematic Screen Dimensions: 111” Wide by 70”
                                                                        High
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 1.2 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 1-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        1080p LED Projector
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Bluetooth Capable: No
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Native Resolution: 800 x 480
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Supported Resolutions: 480P, 720P & 1080P
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Contrast Ratio: 2,000:1
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Display Technology: LCD
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Light Source: LED
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Image Brightness/Lumens: 3600
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Ports: USB, Micro SD Card, AV, HDMI, VGA
                                                                        Input, Audio IN/OUT
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Built-in Speaker: 2 watt / 8 ohm
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Lamp Life: 40,000 hours
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Screen Size Range: 4.9’ feet to 16’ feet away
                                                                        from the projector
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Projector Dimensions: 7.9” Wide x 5.9” Deep x
                                                                        3.10” High
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 2.1 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 2-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Battery Station
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Cell Chemistry: Li-ion NMC
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Lifecycles: ≥500 cycles to 80%
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Management System: BMS, Over Voltage & Short
                                                                        Circuit Protection
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Charge Methods: AC Wall Outlet, 12V Car
                                                                        adaptor
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Full Recharge Time: 5 (HOURS) AC
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Shelf-life: Charge every 3-6 Months
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Operating Usage Temperature: 32-104F
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Certification: FCC, ROHS, UN38.3
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Battery Dimensions: 7.4" Width x 6.7" Height x
                                                                        4.5" Depth
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Weight: 3.84 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 2-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Soundbar Speaker
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Wireless Operation Range: 30’ Feet
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Speaker Dimensions: 0.8" Width x 2.4" Height x
                                                                        2" Depth
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Speaker Weight: 1.6 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 1-Year Limited from Manufacturer
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4">
                                                                    <h3 className="text-xl sm:text-2xl mb-3">
                                                                        Projector Stand
                                                                    </h3>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Projector Stand: Cedar
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Stand Dimensions: 16“ Width x 24” High x 12”
                                                                        Depth
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Item Weight: 20 Lbs.
                                                                    </div>
                                                                    <div className="mb-2 flex items-start sm:text-lg text-base">
                                                                        <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                                        Warranty: 2-Year Limited
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                />
                                            </div>
                                            <div className="flex-1 mt-6 text-center">
                                                <OptionTwoslider />
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                            <div className="mb-8">
                                <ProductSection
                                    title="USING THE CINEMA"
                                    content={
                                        <>
                                            <div className="flex flex-col-reverse">
                                                <div className="flex-1 pr-0">
                                                    <h3 className="text-2xl mt-6 mb-4">
                                                        Attaching the cinematic screen
                                                    </h3>
                                                    <p className="mb-4 max-w-full sm:text-lg text-base">
                                                        After your outdoor cinema has been professionally
                                                        installed in your backyard, using it is almost as easy
                                                        as watching entertainment on your TV in the comfort of
                                                        your own home. The cinema frame can be left up all
                                                        year and never needs to be broken down; all you have
                                                        to do is attach the grommet hole cinematic screen to
                                                        the inside edge of the frame. The cinema wooden frame
                                                        has eye hooks that make it simple to attach the
                                                        grommet hole cinematic screen.
                                                    </p>
                                                    <p className="mb-4 max-w-full sm:text-lg text-base">
                                                        Begin attaching the cinematic screen to one of the top
                                                        corners of the wooden frame by using a lightweight
                                                        folding step ladder and work your way across. After
                                                        attaching the top of the cinematic screen to the
                                                        horizontal post, secure the bottom of the screen and
                                                        then attach the sides. It takes less than 3 minutes to
                                                        connect the cinematic screen to the frame.
                                                    </p>
                                                    <p className='max-w-full sm:text-lg text-base mb-0'>
                                                        When you are finished watching your movies outside for
                                                        the evening, remove the cinematic screen from the
                                                        frame and store it in the included convenient carrying
                                                        bag. It's so easy that even a moose could do it.
                                                    </p>
                                                </div>
                                                <div className="flex-1 text-center mt-8">
                                                    <StaticImage src="../../assets/images/screenSetup.png" />
                                                </div>
                                            </div>
                                            <div className="mt-6 flex flex-col-reverse md:flex-row">
                                                <div className="flex-1 mt-6">
                                                    <h3 className="text-2xl mb-4">
                                                        Using the cinema components
                                                    </h3>
                                                    <p className="mb-4 max-w-full sm:text-lg text-base">
                                                        After your cinema package has been professionally
                                                        installed, all electronic equipment is kept organized
                                                        on the custom (patent pending) cedar projector stand,
                                                        which never needs to be disassembled. The electronics
                                                        are always kept on your projector stand, much like an
                                                        entertainment system in your home. The cinema
                                                        equipment is not waterproof and should be brought
                                                        inside your home once you have finished watching at
                                                        the end of the night.
                                                    </p>
                                                    <p className="mb-4 max-w-full sm:text-lg text-base">
                                                        When you're ready to watch your favorite entertainment
                                                        outside, take the lightweight cedar projector stand
                                                        and all of the equipment out with you. The projector
                                                        stand is typically set up 12'-15' feet away from the
                                                        screen. After aligning the projector stand with the
                                                        screen, turn on the power to the battery station and
                                                        projector, fine-tune the projector's focus for
                                                        sharpness, and you're ready to watch
                                                    </p>
                                                    <p className="mb-6 max-w-full sm:text-lg text-base">
                                                        With the 'wired' outdoor cinema, all you have to do is
                                                        place your speakers and stands where you want them and
                                                        plug the speaker wires into the Digital FM Transmitter
                                                        console located on your projector stand.
                                                    </p>
                                                </div>
                                                <div className="flex-1 text-center">
                                                    <StaticImage src="../../assets/images/projectStand.png" />
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </div>

                            <div className="mb-8">
                                <ProductSection
                                    title="VARIOUS CONNECTIONS"
                                    content={
                                        <div>
                                            <h3 className="xl:text-35 text-lg mb-5 font-bold mt-4 product-title">
                                                What you can plug into the projector
                                            </h3>
                                            <div className="mt-4 various-connections">
                                                <div className="mb-6 flex items-start sm:text-lg text-base">
                                                    <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                    <span>
                                                        You can connect your DVD Player, Laptop, Tablet, TV,
                                                        Smartphone, Video Recorder, Xbox®, Playstation®, Wii®,
                                                        Digital FM Transmitter, Digital Tuner, Speakers, and
                                                        other devices to the projector's multiple ports on the
                                                        back.
                                                    </span>
                                                </div>
                                                <div className="mb-6 flex items-start sm:text-lg text-base">
                                                    <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                    <span>
                                                        There is 1 AV Port, 1 VGA Port, 1 USB Port, 1 ATV
                                                        Port, 1 Audio Out Port, 1 HDMI Port, and 1 Memory Card
                                                        Slot on the 1080p HD Projector.
                                                    </span>
                                                </div>
                                                <div className="mb-6 flex items-start sm:text-lg text-base">
                                                    <div><StaticImage src="../../assets/images/icons/checkmark.png" className='mr-3 w-5 h-5' /></div>
                                                    <span>
                                                        Using the included Roku Player, you can watch Netflix,
                                                        Hulu, Disney+, HBO Max, Amazon Prime Video, Youtube,
                                                        ESPN, MLB, NFL, NBA, and much more. In addition, the
                                                        Amazon Firestick®, Google Chromecast®, and Apple TV
                                                        Box® are all compatible with the 1080p HD Projector.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Layout >
    )
}
export const Head = () => <Seo 
title="Outdoor Movie Theaters – Timberline Series Big Moose" 
description="Get the only year-round outdoor movie theater package you don't have to box up after use. Learn more" />
export default BigMooseCinema