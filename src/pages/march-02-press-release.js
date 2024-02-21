import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const Mar02PressRelease = () => {
    return (
        <Layout bgcolor="sm:bg-white bg-grey-10">
            <Breadcrumbs page_title={"March 2 Press Release"} />
            <div className="pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <p className="text-grey-100 pt-6 text-base max-w-full mb-0">
                                Press Release | March 2, 2023
                            </p>                          
                            <h2 className="text-3xl pt-5 text-white font-extrabold pb-3">
                            Wireless Outdoor Cinema Company unveils new Timberline Cemented Screen Frame
                            </h2>
                        </div>
                        <div className="sm:hidden full-bleed-mobile relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/mobile-news-mar-02-23-outdoor-movie-theater-cemented-frame-414x327.jpg" alt="March 2, 2023, news announcement of a new Outdoor Movie Theater Screen Frame that gets cemented into the ground."
                            />
                        </div>
                        <p className="text-grey-100 max-w-full mb-0 text-base sm:hidden block pt-5">
                        The new Timberline Cemented Screen Frame set up onsite at the home of the Wireless Outdoor Cinema Company.
                        </p>
                        <div className="sm:block hidden py-5">
                            <p className="sm:text-lg text-base text-neutral-600  max-w-full mb-0">Press Release</p>
                            <p className="sm:text-lg text-base text-neutral-600 max-w-full mb-0">March 2, 2023</p>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl xl:text-50 font-semibold">
                            Wireless Outdoor Cinema Company unveils new Timberline Cemented Screen Frame
                            </h2>
                        </div>
                        <div className="hidden sm:block">
                            <p className="sm:pt-4 pb-6 sm:text-lg text-base font-normal mb-0 max-w-full">
                            The new screen frame is designed for homeowners who can dig into the ground
                        </p>
                            <StaticImage src="../assets/images/news-march-02-2023-outdoor-movie-theater-cemented-frame-853x619.png" alt="March 2, 2023, news announcement of a new Outdoor Movie Theater Screen Frame System that gets cemented into the ground." />
                            <p className="max-w-full mb-0 sm:text-lg text-base pt-3 text-neutral-600">
                            The new Timberline Cemented Screen Frame set up onsite at the home of the Wireless Outdoor Cinema Company.
                            </p>
                        </div>
                        <div className="sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                <strong>BRIDGTON, MAINE – March 2, 2023 – The Wireless Outdoor Cinema Company, </strong>a premier provider of complete outdoor movie theater solutions for homeowners, today announced the availability of the new Timberline Cemented Screen Frame. The cemented screen frame has a sleek and aesthetic design and was made to be cemented into the ground.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                            The Timberline Cemented Screen Frame is built from 4” x 4” pressure-treated wood with dimensions of 12 ft wide by 10 ft high, comes with timber frame weather-resistance hardware and has the strongest screen frame available.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                            "I designed the new Timberline Cemented Screen Frame to give homeowners a different option than the Movable Screen Frame," said Todd Morton, owner of the Wireless Outdoor Cinema Company. "The new screen frame has a clean, stylish design, takes up less space than the Movable Screen Frame, and looks great in your backyard as long as you can dig into the ground.”
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                <strong>
                                Timberline Cemented Screen Frame Features:
                                </strong>
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                            <li> Strongest screen frame available and built from pressure-treated wood and weather-resistant hardware
                            </li>
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                            <li> Multiple screen hanging options where you can hang a manual pull-down projection screen or a cinematic grommet hole screen
                            </li>
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                            <li> Fastest projector screen setup time of 2-3 minutes, allowing you to start watching movies almost immediately
                            </li>
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                            The new Timberline Cemented Screen Frame is now available for purchase. It comes with a choice of a manual pull-down projection screen or a cinematic grommet hole screen, wired or wireless cinema equipment options, and a custom projector stand.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                                <strong>About The Wireless Outdoor Cinema Company</strong>{" "}
                                <br /> Located in Bridgton, a resort area in Maine’s scenic Lakes Region, the Wireless Outdoor Cinema Company brings the finest quality craftsmanship of traditional Maine woodworking to the outdoor movie theater experience. Since 2020, Founder Todd Morton has been constructing outdoor movie theater solutions that bring big-screen Hollywood entertainment to homeowners – year-round in the privacy of their backyards. The outdoor movie theaters are designed to be intuitive with a fast and easy set-up; cinema packages come in both wireless or wired and include a pressure-treated wooden screen frame system, cinematic screen, 1080p LED projector, sound system, Roku 4k media player, rechargeable battery station, and a custom lightweight wooden projector and equipment stand.
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
                                className="sm:text-lg sm:text-black text-white text-base no-underline"
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

export const Head = () => <Seo 
title="Get the new Cemented Outdoor Movie Theater Screen Frame" 
description="The Wireless Outdoor Cinema Company announced their new Timberline Cemented Screen Frame today. Read now." />
export default Mar02PressRelease