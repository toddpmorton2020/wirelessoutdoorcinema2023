import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const Sept10PressRelease = () => {
    return (
        <Layout bgcolor="sm:bg-white bg-grey-10">
            <Breadcrumbs />
            <div className="pb-12">
                <div className="pt-5 overflow-hidden">
                    <div className="max-w-3xl px-5 mx-auto">
                        <div className="sm:hidden block text-center">
                            <p className="text-grey-100 pt-6 text-base mb-0 max-w-full">
                                Press Release | September 10, 2020
                            </p>
                            <h2 className="text-3xl pt-5 text-white font-extrabold pb-3">
                            Wireless Outdoor Cinema Company partners with Binnie Media on Fantasy Pro Football Challenge
                            </h2>
                        </div>
                        <div className="sm:hidden relative mt-6 bg-center">
                            <StaticImage
                                className="w-full "
                                src="../assets/images/mobile-news-sept-10-2020-outdoor-movie-theater-giveaway-414x327.jpg" alt="September 10, 2020, the Wireless Outdoor Cinema announces outdoor movie theater giveaway with 107.5 Frank FM."
                            />                            
                        </div>
                        <p className="text-grey-100 max-w-full mb-0 text-base sm:hidden block pt-5">
                            The winner of the 107.5 Frank FM Fantasy Pro Football Challenge will receive the 150" Big Moose Wireless Outdoor Movie Theater package with installation                        </p>
                        <div className="sm:block hidden py-5">
                            <p className="sm:text-lg text-base text-neutral-600 max-w-full mb-0">Press Release</p>
                            <p className="sm:text-lg text-base text-neutral-600 max-w-full mb-0">September 10, 2020</p>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="text-4xl xl:text-50 font-semibold">
                                Wireless Outdoor Cinema Company partners with 107.5 Frank FM on Fantasy Pro Football Challenge
                            </h2>
                        </div>
                        <div className="hidden sm:block">
                            <h2 className="sm:pt-4 text-xl font-normal pb-6">
                                The winner of the 107.5 Frank FM Fantasy Pro Football Challenge will receive the 150" Big Moose Wireless Outdoor Movie Theater package with installation                            </h2>
                            <StaticImage src="../assets/images/news-sept-10-2020-outdoor-movie-theater-giveaway-challenge-853x619.png" alt="September 10, 2020, the Wireless Outdoor Cinema announces outdoor movie theater giveaway with 107.5 Frank FM." />
                            <p className="text-neutral-600 max-w-full mb-0 sm:text-lg pt-3 text-base">
                                The Fantasy Pro Football Challenge begins September 10, 2020, and the winner will be announced over the radio and contacted through phone on January 4, 2021.
                            </p>
                        </div>
                        <div className="sm:pt-10 pt-6 sm:text-black text-white">
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                <strong>BRIDGTON, MAINE – September 10, 2020 – The Wireless Outdoor Cinema Company </strong>today announced the partnership with Binnie Media on running a promotional giveaway for 107.5 Frank FM Fantasy Pro Football Challenge. The Wireless Outdoor Cinema Company will give away their 150” Big Moose Outdoor Movie Theater package to the winner of the Fantasy Pro Football Challenge.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                The Pro Football Challenge will start on September 10, 2020, and the person who accumulates the most points throughout the Pro Football Challenge will win the 150” Big Moose Outdoor Movie Theater package at the end of the scheduled Pro Football season.                                </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                The 107.5 Frank FM Pro Football Challenge contest works by determining which Pro Football teams will win each week and by how many points. Participants who are the closest to guessing what Pro Football teams win each week and by the final score will get points that will be tallied up week-over-week until the season ends. Then, the person who receives the most points wins the giveaway contest.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                "I'm excited about this opportunity to work with Jon Sundberg, VP Sales, of Binnie Media, and giveaway my 150" Big Moose Outdoor Movie Theater package," said Todd Morton, owner of the Wireless Outdoor Cinema Company." "Maine is full of football fans, and to allow one of these enthusiasts to watch the Super Bowl on the 150" Big Moose Outdoor Movie Theater, would give them an incredible experience."                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base font-normal pb-5">
                                "We love partnering with innovative local companies that offer unique products. The Wireless Outdoor Cinema Company checks all those boxes," said Jon Sundberg, VP Sales of Binnie Media. "The contest will have a ton of entries given how attractive this prize is, and our contest winner will be nothing short of ecstatic to not only win it but have The Wireless Outdoor Cinema Company set it up in their backyard."                            </p>

                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                                <strong>About Binnie Media</strong>{" "}
                                <br />Media is Maine and New Hampshire’s largest privately owned and locally managed media company. Between radio, digital, and outdoor advertising mediums, Binnie Media engages with over 1.5 million people every week.
                            </p>
                            <p className="max-w-full mb-0 sm:text-lg text-base pb-5">
                                <strong>About The Wireless Outdoor Cinema Company</strong>{" "}
                                <br /> Located in Bridgton, a resort area in Maine’s scenic Lakes Region, the Wireless Outdoor Cinema Company brings the finest quality craftsmanship of traditional Maine woodworking to the outdoor movie theater experience. Since 2020, Founder Todd Morton has been constructing outdoor movie theater solutions that bring big-screen Hollywood entertainment to homeowners – year-round in the privacy of their backyards. The outdoor movie theaters are designed to be intuitive with a fast and easy set-up; cinema packages come in both wireless or wired and include a pressure-treated wooden screen frame system, cinematic screen, 1080p LED projector, sound system, Roku 4k media player, rechargeable battery station, and a custom lightweight wooden projector and equipment stand.
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

export default Sept10PressRelease