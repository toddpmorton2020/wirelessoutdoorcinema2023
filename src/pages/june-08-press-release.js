import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const June08PressRelease = () => {
    return (
        <Layout bgcolor="sm:bg-white bg-grey-10">
            <Breadcrumbs />
            <div className="pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <p className="text-grey-100 pt-6 mb-0 max-w-full text-base">
                                Press Release | June 25, 2020
                            </p>
                            <h2 className="text-3xl pt-5 text-white font-extrabold pb-3">
                                Introducing the Wireless Outdoor Cinema Company
                            </h2>
                        </div>
                        <div className="sm:hidden relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/8-june-full.png"
                            />
                        </div>
                        <p className="text-grey-100 max-w-full mb-0 text-base sm:hidden block pt-5">
                            Justin from Lewiston, Maine, was announced the 107.5 Frank Fm Fantasy Pro Football Challenge winner                        </p>
                        <div className="sm:block hidden py-5">
                            <p className="sm:text-lg text-base text-neutral-600  max-w-full mb-0">Press Release</p>
                            <p className="sm:text-lg text-base text-neutral-600  max-w-full mb-0">June 25, 2020</p>

                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl xl:text-50 font-semibold">
                                Introducing the Wireless Outdoor Cinema Company
                            </h2>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="sm:pt-4 sm:text-lg text-base font-normal pb-6">
                                Providing homeowners and businesses with a unique wireless outdoor movie experience
                            </h2>
                            <StaticImage src="../assets/images/8June-Full.png" alt="" />
                            <p className="text-neutral-600  max-w-full mb-0 text-lg pt-3">
                                Property of the Wireless Outdoor Cinema Company located in Bridgton, Maine.
                            </p>
                        </div>
                        <div className="sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                <strong>BRIDGTON, MAINE – June 8, 2020 – The Wireless Outdoor Cinema Company  </strong>today announced the unveiling of the new line of Outdoor Cinema Packages for homeowners and businesses throughout New England. The Wireless Outdoor Cinema provides a year-round, weather-resistant, pressure-treated wooden frame system that comes with a removable cinematic screen, a 1080p LED Projector, Off-Grid Battery Station, and a Wireless Surround Bar Speaker. The Wireless Outdoor Cinema offers a new way for homeowners to enjoy their backyards year-round, under the stars and moon watching their favorite movie, TV show, sporting event, or playing video games on a larger-than-life screen.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                “After I built and set up my first Wireless Outdoor Cinema on my property, I knew immediately other homeowners would love this outdoor experience as much as I do,” said Todd Morton, owner of the Wireless Outdoor Cinema Company. “The cinema setup looks impressive on your property with its 4” x 4“ pressure-treated framing system for the screen, and comes with an easy setup to start watching your favorite movie, show, or use your Xbox, PlayStation, or Wii to game under the stars and moon.”
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                <strong>
                                    Features and benefits of the Wireless Outdoor Cinema include:
                                </strong>
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                                • Enjoy outdoor evenings year-round watching movies with nature and friends
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                                • Movie screen frames are built with pressure-treated wood, weather-resistant hardware and stays up on your property without the hassle of breaking them down
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                                • 1080p LED Projector allows you to connect to your smartphone, tablet, laptop, DVD Player, Roku, Amazon Fire TV Stick, Google Chromecast Stick, Xbox, PlayStation, Wii, and Speakers
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                                • Wireless with no dragging out extension cords and tripping over them at night
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                The Wireless Outdoor Cinema packages will be available starting June 15, 2020, with the 96” Jedi Bobcat Wireless Outdoor Cinema base package starting at $2,499. For more information on the complete line of cinema packages please visit: www.wirelessoutdoorcinema.com
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 press-text">
                                <strong>About The Wireless Outdoor Cinema Company</strong>{" "}
                                <br />Located in Bridgton, a resort area in Maine’s scenic Lakes Region, The Wireless Outdoor Cinema Company brings the finest quality craftsmanship of traditional Maine woodworking to the outdoor movie theater experience. Since 2020, Founder Todd Morton has been constructing outdoor movie theater solutions that bring big-screen Hollywood entertainment to homeowners and businesses – year-round. Designed to be intuitive with fast and easy set-up, the cinema packages vary by screen size, and all include a pressure-treated frame, a cinematic screen, 1080p LED projector, sound system, Roku 4k media player, and a light-weight custom cedar wood projector and equipment stand.
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
export default June08PressRelease