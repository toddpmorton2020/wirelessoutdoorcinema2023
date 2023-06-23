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
                                src="../assets/images/25-june-full.png"
                            />
                        </div>
                        <p className="text-grey-100 max-w-full mb-0 text-base sm:hidden block pt-5">
                            Justin from Lewiston, Maine, was announced the 107.5 Frank Fm Fantasy Pro Football Challenge winner                        </p>
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
                                Justin from Lewiston, Maine, was announced the 107.5 Frank Fm Fantasy Pro Football Challenge winner
                            </h2>
                            <StaticImage src="../assets/images/25June-Full.png" alt="" />
                            <p className="text-neutral-600 max-w-full mb-0 text-lg pt-3">
                                Todd Morton, the Wireless Outdoor Cinema Company owner, was interviewed at his home in Bridgton, Maine, on June 20, 2020.
                            </p>
                        </div>
                        <div className="sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                Todd Morton has had a diverse working career. He has done construction, finish carpentry and built a couple of log homes. And he worked 25 years as an Internet marketer and website designer. Now he hopes to add the Wireless Outdoor Cinema Company to his professional accomplishments.                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                “I want to create an outdoor experience that the entire family will enjoy,” he said.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                Todd has always had a great appreciation for the outdoors and grew up in northern Vermont. His true passions have always been working outdoors and nature. For years, Todd thought about putting up a backyard movie screen for years and started testing various outdoor set ups that turned out to be flimsy or too cumbersome to setup and watch.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                During the winter, Todd continued researching outdoor cinema setups but found most failed to hold up due to uneven ground conditions and wind. “I brainstormed for months how I could set up a sturdy, rugged stationary movie screen frame, that I wouldn’t have to inflate or deflate at the end of the movie and make it look aesthetically clean on my property,” he said.
                            </p>

                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                Todd built a pressure-treated movie screen frame, which can easily be moved by two people. All hardware used on the outdoor wooden frame is weather-resistant galvanized and stainless steel. “This frame is built to last,” he said. The cinematic polyester screens come in three sizes – 96”, 120” and 150” and attach to the frame with grommet holes and stainless steel hooks. To put the screen on the frame takes less time than it does to pop a bag of popcorn in the microwave, Todd said.
                            </p>

                            <p className="max-w-full mb-12 sm:text-lg text-base font-normal pb-5">
                                “You can set up the wireless outdoor cinema anywhere on your property. After watching my first movie outside, I knew other homeowners would love this experience. Being outside in the fresh air seeing the galaxy of stars and moon is incredible, nothing beats the experience,” he said. I envision people watching movies outside with family and friends, having Halloween parties in October, watching the Super Bowl, all you need to stay warm in the cooler months is a good old fashion campfire or a propane heat lamp. And with social distancing, you can spread out lawn chairs and still safely watch a movie, sporting event, play video games together with friends.”
                            </p>


                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                                The HD Wi-Fi projector (which is positioned six to seven feet away from the screen) sets on either a projector stand or a custom-build cedar projector stand with shelves. The off-grid battery station powers the outdoor cinema where there’s no need to run any extension cords out to the electronic components. And the off-grid battery comes with a built-in flashlight to help with finding your way back inside.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                                He offers three packages: 96” Jedi Bobcat, perfect for the ultimate gaming experience, $2,499; the 120” Bella Bear, best for watching movies and streaming your favorite shows, $2,399; and 150” Big Moose, a great option for restaurants and bars with outdoor seating, and other outdoor seating venues such as summer camps, $2,899.
                            </p>
                        </div>
                        <div className="pt-8 sm:text-black text-white">
                            <div className="border-b border-gray-400" />
                            <h2 className="sm:text-31 text-2xl sm:pb-5 pb-4 sm:pt-5 pt-8">
                                Press Contact
                            </h2>
                            <p className="max-w-full mb-0 sm:text-lg text-base">
                                Wireless Outdoor Cinema Company
                                <br />
                                Todd Morton – owner
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