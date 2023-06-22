import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const Sept10PressRelease = () => {
    return (
        <Layout>
            <Breadcrumbs />
            <div className="sm:bg-white bg-grey-10 pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <h3 className="text-grey-100 pt-6 grey-text-spacing">
                                Press Release | September 10, 2020
                            </h3>

                            <h1 className="press-release-heading text-4xl pt-5 text-white font-extrabold pb-3">
                            Wireless Outdoor Cinema Company Partners with Binnie Media on Fantasy Pro Football Challenge
                            </h1>
                        </div>
                        <div className="sm:hidden full-bleed-mobile relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/10-sep-full.png"
                            />
                            
                        </div>
                        <p className="text-grey-100 image-text-press max-w-full mb-0 text-sm sm:hidden block pt-5">
                            The winner of the 107.5 Frank FM Fantasy Pro Football Challenge will receive the 150" Big Moose Wireless Outdoor Cinema package with installation                        </p>
                        <div className="press-release-padding sm:block hidden py-5">
                            <p className="text-xl image-text-color max-w-full mb-0">Press Release</p>
                            <p className="text-xl image-text-color max-w-full mb-0">September 10, 2020</p>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl font-semibold press-release-padding press-line-height hide">
                                Wireless Outdoor Cinema Company Partners with Binnie Media on Pro Football Challenge
                            </h2>
                        </div>
                        <div className="hidden sm:block press-release-padding">
                            <h2 className="sm:pt-4 text-xl font-normal pb-6">
                                The winner of the 107.5 Frank FM Fantasy Pro Football Challenge will receive the 150" Big Moose Wireless Outdoor Cinema package with installation                            </h2>
                            <StaticImage src="../assets/images/10Sep-Full.png" alt="" />
                            <p className="image-text-color max-w-full mb-0 image-text-press-1 text-sm pt-3 text-grey-100 sm:text-gray-700">
                                The Fantasy Pro Football Challenge begins September 10, 2020, and the winner will be announced over the radio and contacted through phone on January 4, 2021.
                            </p>
                        </div>
                        <div className="press-release-padding sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                <strong>BRIDGTON, MAINE – September 10, 2020 – The Wireless Outdoor Cinema Company </strong>today announced the partnership with Binnie Media on running a promotional giveaway for 107.5 Frank FM Fantasy Pro Football Challenge. The Wireless Outdoor Cinema Company will give away their premier 150” Big Moose Outdoor Cinema package to the winner of the Fantasy Pro Football Challenge.
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                The Pro Football Challenge will start on September 10, 2020, and the person who accumulates the most points throughout the Pro Football Challenge will win the 150” Big Moose Outdoor Cinema package at the end of the scheduled Pro Football season.                                </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                The 107.5 Frank FM Pro Football Challenge contest works by determining which Pro Football teams will win each week and by how many points. Participants who are the closest to guessing what Pro Football teams win each week and by the final score will get points that will be tallied up week-over-week until the season ends. Then, the person who receives the most points wins the giveaway contest.
                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                "I'm excited about this opportunity to work with Jon Sundberg, VP Sales, of Binnie Media, and giveaway my 150" Big Moose Outdoor Cinema," said Todd Morton, owner of the Wireless Outdoor Cinema Company." "Maine is full of football fans, and to allow one of these fans to watch the Super Bowl on the 150" Big Moose Outdoor Cinema, would give them an incredible experience."                            </p>
                            <p className="max-w-full mb-0 sm:text-xl text-base press-text font-normal pb-5">
                                "We love partnering with innovative local companies that offer unique products. The Wireless Outdoor Cinema Company checks all those boxes," said Jon Sundberg, VP Sales of Binnie Media. "The contest will have a ton of entries given how attractive this prize is, and our contest winner will be nothing short of ecstatic to not only win it but have The Wireless Outdoor Cinema Company set it up in their backyard."                            </p>

                            <p className="max-w-full mb-0 sm:text-xl text-base pb-5 press-text">
                                <strong>About Binnie Media</strong>{" "}
                                <br />Media is Maine and New Hampshire’s largest privately owned and locally managed media company. Between radio, digital, and outdoor advertising mediums, Binnie Media engages with over 1.5 million people every week.
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

export default Sept10PressRelease