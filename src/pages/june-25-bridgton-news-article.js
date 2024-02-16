import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const June25PressRelease = () => {
    return (
        <Layout bgcolor="sm:bg-white bg-grey-10">
            <Breadcrumbs />
            <div className="pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <p className="text-grey-100 pt-6 mb-0 max-w-full text-base">
                                BRIDGTON NEWS | June 25, 2020
                            </p>
                            <p className="text-grey-100 mb-0 max-w-full text-base">
                                By Wayne E. Rivet – Staff Writer for the Bridgton News
                            </p>
                            <h2 className="text-3xl pt-5 text-white font-extrabold pb-3">
                                Bring Movies and Gaming Outdoors
                            </h2>
                        </div>
                        <div className="sm:hidden relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/mobile-news-june25-2020-wireless-outdoor-cinema-interview-414x327.jpg" alt="June 25, 2020, Bridgton Newspaper interview with Todd Morton, founder of the Wireless Outdoor Cinema Company."
                            />
                        </div>
                        <p className="text-grey-100 max-w-full mb-0 text-base sm:hidden block pt-5">
                        Make your favorite outdoor spot …an outdoor movie theater. Todd Morton has started a new company, the Wireless Outdoor Cinema Company.                        </p>
                        <div className="sm:block hidden py-5">
                            <p className="sm:text-lg text-base text-neutral-600 max-w-full mb-0">BRIDGTON NEWS</p>
                            <p className="sm:text-lg text-base text-neutral-600 max-w-full mb-0">June 25, 2020</p>
                            <p className="sm:text-lg text-base pt-5 text-neutral-600 mb-0 max-w-full">
                                By Wayne E. Rivet – Staff Writer for the Bridgton News
                            </p>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl xl:text-50 font-semibold">
                                Bring Movies and Gaming Outdoors
                            </h2>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="sm:pt-4 text-xl font-normal pb-6">
                            Make your favorite outdoor spot …an outdoor movie theater. Todd Morton has started a new company, the Wireless Outdoor Cinema Company
                            </h2>
                            <StaticImage src="../assets/images/news-june-25-20-wireless-outdoor-cinema-company-interview-853x619.png" alt="June 25, 2020, Bridgton Newspaper interview with Todd Morton, founder of the Wireless Outdoor Cinema Company." />
                            <p className="text-neutral-600 max-w-full mb-0 text-lg pt-3">
                            Todd Morton, founder of the Wireless Outdoor Cinema Company, was interviewed at his home in Bridgton, Maine, on June 20, 2020.
                            </p>
                        </div>
                        <div className="sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                            Todd Morton has had a diverse working career. He has done construction, finish carpentry and built a couple of log homes. And he worked 25 years as an Internet marketer. Now he hopes to add the Wireless Outdoor Cinema Company to his professional accomplishments.                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                “I want to create an outdoor experience that the entire family will enjoy,” he said.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                            Todd has always had a great appreciation for the outdoors and grew up in northern Vermont. His true passions have always been woodworking and being outdoors with nature. For years, Todd thought about putting up a backyard outdoor movie theater and started testing various outdoor setups that turned out to be flimsy or too cumbersome to set up and watch.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                            During the winter, Todd continued researching outdoor movie theater setups but found most did not hold up due to uneven ground conditions and wind. “I brainstormed for months how I could set up an outdoor movie theater in my backyard that I wouldn’t have to inflate, deflate, or package up at the end of the night after watching a movie,” he said.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                            Todd built a movable pressure-treated screen frame system, which two people can easily move. All hardware used on the outdoor wooden frame is weather-resistant galvanized and stainless steel. “This frame is built to last,” he said. The cinematic screen size is 150” diagonal and attaches to the frame with grommet holes and screw hooks. To put the cinematic screen on the frame system and get the cinema setup takes less time than it does to pop a bag of popcorn in the microwave, Todd said.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                            “You can set up the movable wireless outdoor movie theater anywhere on your property where it is flat. After watching my first movie outside, I knew other homeowners would love this experience. Being outside in the fresh air and seeing the stars and moon is incredible; nothing beats the experience,” he said. I envision people watching movies outside with family and friends during the summer months, having Halloween parties in October, and watching the Super Bowl in the winter; all you need to stay warm in the cooler months is a good old-fashioned campfire or a propane heat lamp.”
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                            The 1080p HD Wi-Fi projector (positioned six to eight feet from the projector screen) is placed on a custom wooden projector stand. The rechargeable battery station powers the entire outdoor cinema, where there’s no need to run extension cords out to the electronic components.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                            He currently offers the 150” Big Moose Outdoor Movie Theater, perfect for watching movies and streaming your favorite shows on a 12’ widescreen for $2,899.
                            </p>
                        </div>
                        <div className="pt-8 sm:text-black text-white">
                            <div className="border-b border-gray-400" />
                            <h3 className="sm:text-31 text-2xl sm:pb-5 pb-4 sm:pt-5 pt-8">
                                Press Contact
                            </h3>
                            <p className="max-w-full mb-0 sm:text-lg text-base">
                                Wireless Outdoor Cinema Company
                                <br />
                                Todd Morton – founder
                            </p>
                            <Link
                                className="text-blue-600 sm:text-lg text-base no-underline font-normal"
                                to="mailto:todd@wirelessoutdoorcinema.com"
                            >
                                todd@wirelessoutdoorcinema.com
                            </Link>
                            <br />
                            <Link
                                className="sm:text-lg sm:text-black text-white text-base contact-det no-underline"
                                to="tel:207-647-8759"
                            >
                                (207) 647-8759
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}
export default June25PressRelease