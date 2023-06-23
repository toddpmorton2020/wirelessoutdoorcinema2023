import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const Aug28PressRelease = () => {
    return (
        <Layout bgcolor="sm:bg-white bg-grey-10">
            <Breadcrumbs />
            <div className="pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <p className="text-grey-100 pt-6 text-base max-w-full mb-0">
                                Press Release | August 28, 2021
                            </p>                          
                            <h2 className="text-3xl pt-5 text-white font-extrabold pb-3">
                            Wireless Outdoor Cinema Company Introduces its New Timberline Series Frame System Built to Withstand Fall and Winter Weather
                            </h2>
                        </div>
                        <div className="sm:hidden full-bleed-mobile relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/28-aug-full.png"
                            />
                        </div>
                        <p className="text-grey-100 max-w-full mb-0 text-base sm:hidden block pt-5">
                            Interview with Kathryn Skelton from the Sun Journal and Todd
                            Morton, owner of the Wireless Outdoor Cinema Company
                        </p>
                        <div className="sm:block hidden py-5">
                            <p className="sm:text-lg text-base text-neutral-600  max-w-full mb-0">Press Release</p>
                            <p className="sm:text-lg text-base text-neutral-600 max-w-full mb-0">August 28, 2021</p>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl xl:text-50 font-semibold">
                                Wireless Outdoor Cinema Company Introduces its New Timberline Series Frame System Built to Withstand Fall and Winter Weather
                            </h2>
                        </div>
                        <div className="hidden sm:block">
                            <p className="sm:pt-4 pb-6 sm:text-lg text-base font-normal mb-0 max-w-full">
                                New and improved frame system with added stability supports to the base and weather-resistance post and beam hardware
                            </p>
                            <StaticImage src="../assets/images/28Aug-Full.png" alt="" />
                            <p className="max-w-full mb-0 sm:text-lg text-base pt-3 text-neutral-600">
                                The new Timberline Outdoor Cinema Series frame system provides additional base support and durable weather-resistant post and beam hardware.
                            </p>
                        </div>
                        <div className="sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                <strong>BRIDGTON, MAINE – August 28, 2021 – The Wireless Outdoor Cinema Company, </strong>a premier provider of complete outdoor movie theater solutions for homeowners and businesses, today announced the availability of the new Timberline Outdoor Cinema Series. The new reinforced frame system is included with the purchase of each of the three Timberline option packages: the 96” Jedi Bobcat Outdoor Gaming Cinema ($2,499); the 120” Bella Bear Backyard Outdoor Cinema (starting at $2,399); and the 150” Big Moose Premium Outdoor Cinema (starting at $2,899).
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                The more stable new frame system, that supports the cinematic screen, can withstand strong wind gusts, rain storms and snow. There’s no need to break it down, deflate or shove back into a box since it is designed to remain outdoors year-round. The new frame features newly added front bottom 45-degree angle supports and new heavy-duty post and beam weather-resistant hardware. Customers who previously purchased an outdoor cinema package will receive the new frame system.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                “The Timberline Outdoor Cinema’s new reinforced wood frame system can handle any weather Mother Nature throws at it, making it the ideal outdoor backyard cinema no matter where you live,” said Todd Morton, owner of the Wireless Outdoor Cinema Company. “I’m thrilled to bring this quality woodworking craftsmanship that Maine is known for, to customers. This new frame design will last as long as your outside deck attached to your home will.”
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                <strong>
                                    The Timberline Outdoor Cinema Series Frame System provides the following additional benefits:
                                </strong>
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                                • Made from pressure-treated wood that is naturally resistant to rot, decay, and insects
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                                • It’s inside hook screws where the grommet hole cinematic screen attaches allows for the fastest setup time in just minutes
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5 sm:ml-8 ml-2">
                                • While sturdy, the frame is also moveable, allowing for placement anywhere on the property at any time
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                                The new frame systems are now available and included with all
                                new purchases of the Timberline Outdoor Cinemas. All of the
                                outdoor cinema frame systems built prior for clients will
                                receive the new additions to their frame.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                                <strong>About The Wireless Outdoor Cinema Company</strong>{" "}
                                <br /> Located in Bridgton, a resort area in Maine’s scenic Lakes Region, The Wireless Outdoor Cinema Company brings the finest quality craftsmanship of traditional Maine woodworking to the outdoor movie theater experience. Since 2020, Founder Todd Morton has been constructing outdoor movie theater solutions that bring big-screen Hollywood entertainment to homeowners and businesses – year-round. Designed to be intuitive with fast and easy set-up, the cinema packages vary by screen size, and all include a pressure-treated frame, a cinematic screen, 1080p LED projector, sound system, Roku 4k media player, and a light-weight custom cedar wood projector and equipment stand.
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
export default Aug28PressRelease