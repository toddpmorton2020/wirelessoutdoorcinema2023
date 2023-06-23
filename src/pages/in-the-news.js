import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const IntheNewsPage = () => {
    return (
        <Layout bgcolor="bg-gray-100">
            <>
                <Breadcrumbs />
                <div className="pb-20">
                    <div className="max-w-7xl px-5 mx-auto">
                        <div className="pt-5">
                            <div className="mt-8 md:text-left">
                                <h1 className="text-orange-500  xl:text-70 text-orange-500 text-4xl md:text-5xl leading-none font-medium relative mb-0">
                                    <span className="text-black">Latest</span> News
                                </h1>
                            </div>
                            <div className="mt-8 hidden md:flex">
                                <div className="w-7/12 pr-12 block">
                                    <div
                                        className="cursor-pointer frame-width"
                                        onClick={() =>
                                            navigate("/october-10-sun-journal-news-article")
                                        }
                                        aria-hidden="true"
                                    >
                                        <StaticImage src="../assets/images/in-the-news-main-lp-todd.png" alt="" />
                                        <div className="bg-white pt-5 px-5 cursor-pointer rounded-b-lg">
                                            <p className="text-gray-600 mb-0 max-w-full text-lg">News Article</p>
                                            <p className="text-xl leading-tight pt-5 font-bold mb-0 max-w-full text-lg">
                                                Film buff's inspiration inspires backyard theater business
                                            </p>
                                            <p className="text-gray-600 pt-5 pb-5 mb-0 max-w-full text-lg">October 10, 2021</p>
                                        </div>
                                    </div>
                                    <div
                                        className="pt-10 cursor-pointer frame-width"
                                        onClick={() => navigate("/august-28-press-release")}
                                        aria-hidden="true"
                                    >
                                        <StaticImage
                                            src="../assets/images/in-the-news-frame-system-main.png"
                                            alt=""

                                        />
                                        <div className="bg-white pt-5 px-5 cursor-pointer rounded-b-lg">
                                            <p className="text-gray-600 mb-0 max-w-full text-lg">Press Release</p>
                                            <p className="text-xl leading-tight pt-5 font-bold mb-0 max-w-full text-lg">
                                                Wireless Outdoor Cinema Company unveils new Timberline
                                                Outdoor Cinema Series Frame System
                                            </p>
                                            <p className="text-gray-600 pt-5 pb-5 mb-0 max-w-full text-lg">August 28, 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 md:pl-12 md:border-l border-gray-400">
                                    <h1 className="news-archive-heading leading-none font-medium">
                                        News archive
                                    </h1>
                                    <div className="mt-1">
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400 cursor-pointer"
                                            to="/august-28-press-release"
                                        >
                                            <div className="news-archive2 h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-frame.png"
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Introducing the Timberline Outdoor Cinema Series ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">
                                                    August 28, 2021
                                                </h4>
                                            </div>
                                        </Link>
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400 cursor-pointer"
                                            to="/june-30-press-release"
                                        >
                                            <div className="news-archive1 h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-projector-stand.png"
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Wireless Outdoor Cinema Company brings to market ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">June 30, 2021</h4>
                                            </div>
                                        </Link>
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400"
                                            to="/january-04-press-release"
                                        >
                                            <div className="news-archive h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-jan4-winner.png"
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Winner Announcement for Fastasy Pro Football ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">
                                                    January 4, 2021
                                                </h4>
                                            </div>
                                        </Link>
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400"
                                            to="/september-10-press-release"
                                        >
                                            <div className="news-archive h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-binnie-media.png"
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    107.5 Frank FM Fantasy Pro Football Challenge ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">
                                                    September 10, 2020
                                                </h4>
                                            </div>
                                        </Link>
                                        <Link
                                            to="/june-25-bridgton-news-article"
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400"
                                        >
                                            <div className="news-archive3 h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-todd.png"
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Bridgton News</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Bring Movies and Gaming Outdoors ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">June 25, 2020</h4>
                                            </div>
                                        </Link>
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400"
                                            to="/june-08-press-release"
                                        >
                                            <div className="news-archive4 h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-june8-image.png"
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Introducing the Wireless Outdoor Cinema ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">June 8, 2020</h4>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex flex-col items-center md:hidden">
                                <Link
                                    to="/october-10-sun-journal-news-article"
                                    className="cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage
                                        src="../assets/images/todd-morton-mobile-lp.png"
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            NEWS ARTICLE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Film buff's inspiration inspires backyard theater business
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">October 10, 2021</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/august-28-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/28-aug.png" alt="" className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Introducing the new Timberline Outdoor Cinema Series
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">August 28, 2021</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/june-30-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/30-june.png" alt="" className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company brings to market first
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">June 30, 2021</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/january-04-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/04-jan.png" alt="" className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Winner announcement of Fantasy Pro Football Challenge
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 text-lg">January 4, 2021</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/september-10-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage
                                        src="../assets/images/10-sept.png"
                                        alt=""
                                        className="news-image-link w-full"
                                    />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            107.5 Frank FM Fantasy Pro Football Challenge
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">September 10, 2020</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/june-25-bridgton-news-article"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/25-june.png" alt="" className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            BRIDGTON NEWS
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Bring movies and gaming outdoors
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">June 25, 2020</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/june-08-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/08-june.png" alt="" className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Introducing the Wireless Outdoor Cinema Company
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">June 8, 2020</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Layout>
    )
}
export default IntheNewsPage