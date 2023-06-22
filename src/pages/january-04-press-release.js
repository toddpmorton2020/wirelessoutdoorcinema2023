import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const Jan04PressRelease = () => {
    return (
        <Layout>
            <Breadcrumbs />

            <div className="sm:bg-white bg-grey-10 pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <h3 className="text-grey-100 pt-6 grey-text-spacing">
                                Press Release | January 04, 2021
                            </h3>

                            <h1 className="press-release-heading text-4xl pt-5 text-white font-extrabold pb-3">
                            Winner announcement of Fantasy Pro Football Challenge                            </h1>
                        </div>
                        <div className="sm:hidden full-bleed-mobile relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/04-jan-full.png"
                            />
                        </div>
                        <p className="text-grey-100 image-text-press max-w-full mb-0 text-sm sm:hidden block pt-5">
                            Justin from Lewiston, Maine, was announced the 107.5 Frank Fm Fantasy Pro Football Challenge winner                        </p>
                        <div className="press-release-padding sm:block hidden py-5">
                            <p className="text-xl image-text-color max-w-full mb-0">Press Release</p>
                            <p className="text-xl image-text-color max-w-full mb-0">January 04, 2021</p>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl font-semibold press-release-padding press-line-height hide">
                                Wireless Outdoor Cinema Company Announces Winner to the 107.5 Frank FM Fantasy Football Challenge
                            </h2>
                        </div>
                        <div className="hidden sm:block press-release-padding">
                            <h2 className="sm:pt-4 text-xl font-normal pb-6">
                                Justin from Lewiston, Maine, was announced the 107.5 Frank Fm Fantasy Pro Football Challenge winner
                            </h2>
                            <StaticImage src="../assets/images/4Jan-Full.png" alt="" />
                            <p className="image-text-color max-w-full mb-0 image-text-press-1 text-sm pt-3 text-grey-100 sm:text-gray-700">
                                The Wireless Outdoor Cinema 150" Premium Big Moose package was installed at Justin's home in Lewiston, Maine, in May 2021.                            </p>
                        </div>
                        <div className="press-release-padding sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                <strong>BRIDGTON, MAINE – January 4, 2021 – The Wireless Outdoor Cinema Company </strong>today announced the winner of the promotional giveaway for the 107.5 Frank FM Fantasy Pro Football Challenge. The Pro Football Challenge started on September 10, 2020. The person who accumulates the most points throughout the end of the Pro Football Challenge will win the 150” Big Moose Outdoor Cinema package at the end of the scheduled Pro Football season.
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                107.5 Frank FM (one of the radio stations owned by Binnie Media) announced today over the air on and on their website that Justin from Lewiston, Maine was selected as the Pro Football Challenge winner who received the overall most points from the Pro Football season, which ended January 3, 2021. The Wireless Outdoor Cinema Company will reach out to Justin this week to schedule his new 150” Big Moose Wireless Outdoor Cinema installation.</p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                "When I called Justin to confirm he was the winner to the 150" Big Moose Wireless Outdoor Cinema package, he was excited about the news and couldn't wait to use it," said Todd Morton, owner of the Wireless Outdoor Cinema Company. "Providing an opportunity for people to win one of my premier wireless outdoor cinemas is exciting and a great way to bring families and friends together to watch their favorite entertainment outside on a massive 12' widescreen."
                            </p>
                           
                           
                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 press-text">
                                <strong>About Binnie Media</strong>{" "}
                                <br /> Binnie Media is Maine and New Hampshire’s largest privately owned and locally managed media company. Between radio, digital, and outdoor advertising mediums, Binnie Media engages with over 1.5 million people every week.
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
export default Jan04PressRelease