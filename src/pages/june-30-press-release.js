import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const June30PressRelease = () => {
    return (
        <Layout>
            <Breadcrumbs />
            <div className="sm:bg-white bg-grey-10 pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <h3 className="text-grey-100 pt-6 grey-text-spacing">
                                Press Release | June 30, 2021
                            </h3>

                            <h1 className="press-release-heading text-4xl pt-5 text-white font-extrabold pb-3">
                                Wireless Outdoor Cinema Company Brings to Market the First Outdoor Cinema Projector Stand                            </h1>
                        </div>
                        <div className="sm:hidden full-bleed-mobile relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/30-june-full.png"
                            />
                        </div>
                        <p className="text-grey-100 image-text-press max-w-full mb-0 text-sm sm:hidden block pt-5">
                            After a year of product development and testing, the Wireless Outdoor Cinema Company introduces the first outdoor projector stand to the retail market
                        </p>
                        <div className="press-release-padding sm:block hidden py-5">
                            <p className="text-xl image-text-color max-w-full mb-0">Press Release</p>
                            <p className="text-xl image-text-color max-w-full mb-0">June 30, 2021</p>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl font-semibold press-release-padding press-line-height hide">
                                Wireless Outdoor Cinema Company Brings to Market the First Outdoor Cinema Projector Stand                            </h2>
                        </div>
                        <div className="hidden sm:block press-release-padding">
                            <h2 className="sm:pt-4 text-xl font-normal pb-6">
                                After a year of product development and testing, the Wireless Outdoor Cinema Company introduces the first outdoor projector stand to the retail market                            </h2>
                            <StaticImage src="../assets/images/30June-Full.png" alt="" />
                            <p className="image-text-color max-w-full mb-0 image-text-press-1 text-sm pt-3 text-grey-100 sm:text-gray-700">
                                The new Outdoor Projector Stand organizes all cinema electronics on a lightweight, easy-to-carry cedar wood stand.
                            </p>
                        </div>
                        <div className="press-release-padding sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                <strong>BRIDGTON, MAINE – June 30, 2021 – The Wireless Outdoor Cinema Company </strong>today announced the unveiling of the new Outdoor Cinema Projector and Equipment Stand for homeowners and businesses who have or want an outdoor movie theater setup. The Outdoor Projector Stand is the first one introduced into the marketplace.
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                The projector and equipment stand allows you to organize your Projector, Media Player, DVD player, Tuner, Transmitter, Gaming Console, and other equipment on the various shelves located on the stand. The projector stand is made from lightweight 5/4” thick cedar wood and acts as an entertainment center that you would have inside your home. The cinema components stay organized on the projector stand, and you never have to break it down or remove any of the equipment after watching a movie outside.                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                "When I searched the internet last year to find a projector stand to go with my wireless outdoor cinemas, there were no options other than flimsy tripod projector stands," said Todd Morton, owner of the Wireless Outdoor Cinema Company. "The tripod projector stands available online only have enough space to hold the projector and no other cinema equipment. After a year of designing, building, and testing various outdoor projector stands in my woodshop, I came up with my latest design that I now include with all my outdoor cinemas."                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                <strong>
                                    Features and benefits of the Wireless Outdoor Cinema include:
                                </strong>
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 sm:ml-8 ml-2 indent press-text">
                                • Organizes all of your cinema equipment making it easy and fast to start watching your favorite entertainment outside
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 sm:ml-8 ml-2 indent press-text">
                                • Light weight and easy to carry
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 sm:ml-8 ml-2 indent press-text">
                                • Made from cedar wood that is naturally resistant to rot, decay and insect attacks
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 sm:ml-8 ml-2 indent press-text">
                                • Looks beautiful and will last for years
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 press-text">
                            The Outdoor Cinema Projector and Equipment Stand will be available to purchase online worldwide starting November 1, 2021 on the Wireless Outdoor Cinema Company’s website at: www.wirelessoutdoorcinema.com
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 press-text">
                                <strong>About The Wireless Outdoor Cinema Company</strong>{" "}
                                <br /> Located in Bridgton, a resort area in Maine’s scenic Lakes Region, The Wireless Outdoor Cinema Company brings the finest quality craftsmanship of traditional Maine woodworking to the outdoor movie theater experience. Since 2020, Founder Todd Morton has been constructing outdoor movie theater solutions that bring big-screen Hollywood entertainment to homeowners and businesses – year-round. Designed to be intuitive with fast and easy set-up, the cinema packages vary by screen size, and all include a pressure-treated frame, a cinematic screen, 1080p LED projector, sound system, Roku 4k media player, and a light-weight custom cedar wood projector and equipment stand.
                            </p>
                       </div>
                        <div className="press-release-padding pt-8 sm:text-black text-white">
                            <div className="border-b border-gray-400" />
                            <h2 className="sm:text-31 text-2xl sm:pb-5 pb-4 sm:pt-5 pt-8 press-contact">
                                Press Contact
                            </h2>
                            <p className="max-w-full mb-0 sm:text-xl text-base contact-det">
                                Wireless Outdoor Cinema Company
                                <br />
                                Todd Morton – owner
                            </p>
                            <Link
                                className="text-blue-600 sm:text-xl text-base contact-det no-underline font-normal"
                                to="mailto:todd@wirelessoutdoorcinema.com"
                            >
                                todd@wirelessoutdoorcinema.com
                            </Link>
                            <br />
                            <Link
                                className="sm:text-xl text-black text-base contact-det no-underline"
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
export default June30PressRelease