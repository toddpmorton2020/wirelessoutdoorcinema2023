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
                <div className="md:pb-20 pb-12">
                    <div className="max-w-7xl px-5 mx-auto">
                        <div className="pt-5">
                            <div className="mt-8 md:text-left">
                            <h1 className="text-orange-500  xl:text-70 text-orange-500 text-4xl md:text-5xl leading-none font-medium relative mb-0">
                                    <span className="text-black">Latest</span> News
                            </h1>
                            </div>
                            <div className="mt-8 hidden md:flex">
                                <div className="w-7/12 lg:pr-12 pr-6 block">
                                    <div
                                        className="cursor-pointer frame-width"
                                        onClick={() =>
                                            navigate("/november-30-press-release")
                                        }
                                        aria-hidden="true"
                                    >
                                        <StaticImage src="../assets/images/in-the-news-nov30-2023-outdoor-movie-theater-screen-frame-815x443.png" alt="November 30, 2023, press release announcing the new Timberline Free-Standing Screen Frame and Outdoor Movie Theater." />
                                        <div className="bg-white pt-5 px-5 cursor-pointer rounded-b-lg">
                                            <p className="text-gray-600 mb-0 max-w-full text-lg">Press Release</p>
                                            <p className="text-xl leading-tight pt-5 font-bold mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company introduces new Timberline Streamline Free-Standing Screen Frame System
                                            </p>
                                            <p className="text-gray-600 pt-5 pb-5 mb-0 max-w-full text-lg">November 30, 2023</p>
                                        </div>
                                    </div>
                                    <div
                                        className="pt-10 cursor-pointer frame-width"
                                        onClick={() => navigate("/march-02-press-release")}
                                        aria-hidden="true"
                                    >
                                        <StaticImage
                                            src="../assets/images/in-the-news-mar2-2023-outdoor-movie-theater-screen-frame-815x443.png"
                                            alt="March 2, 2023, press release announcing the new Timberline Cemented Screen Frame and Outdoor Movie Theater."

                                        />
                                        <div className="bg-white pt-5 px-5 cursor-pointer rounded-b-lg">
                                            <p className="text-gray-600 mb-0 max-w-full text-lg">Press Release</p>
                                            <p className="text-xl leading-tight pt-5 font-bold mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company unveils new Timberline Cemented Screen Frame System
                                            </p>
                                            <p className="text-gray-600 pt-5 pb-5 mb-0 max-w-full text-lg">March 2, 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 lg:pl-12 pl-6 md:border-l border-gray-400">
                                    <h3 className="xl:text-35 text-3xl font-medium">
                                        News archive
                                    </h3>
                                    <div className="mt-1">
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400 cursor-pointer"
                                            to="/august-28-press-release"
                                        >
                                            <div className="news-archive1 h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-aug28-2022-outdoor-movie-theater-screen-frame-152x143.png"
                                                    alt="August 28, 2022, press release notification of new supports to the Timberline Movable Screen Frame and Outdoor Movie Theater."
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                Wireless Outdoor Cinema Company announces new ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">August 28, 2022</h4>
                                            </div>
                                        </Link>
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400 cursor-pointer"
                                            to="/june-30-press-release"
                                        >
                                            <div className="news-archive1 h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-jun30-2022-outdoor-projector-stand-152x143.png"
                                                    alt="June 30, 2022, press release unveiling the new Timberline Outdoor Movie Theater Projector Stand."
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Wireless Outdoor Cinema Company brings to market ...
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">June 30, 2022</h4>
                                            </div>
                                        </Link>
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400 cursor-pointer"
                                            to="/october-10-sun-journal-news-article"
                                        >
                                            <div className="news-archive1 h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-oct10-2021-todd-morton-founder-woc-152x143.png"
                                                    alt="October 10, 2021, Sun Journal Newspaper interview with Todd Morton, founder of the Wireless Outdoor Cinema Company."
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Sun Journal News Article</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Film buff's inspiration inspires backyard theater business
                                                </h3>
                                                <h4 className="text-gray-600 font-thin">October 10, 2021</h4>
                                            </div>
                                        </Link>
                                        <Link
                                            className="flex items-stretch no-underline py-6 border-b border-gray-400"
                                            to="/january-04-press-release"
                                        >
                                            <div className="news-archive h-full">
                                                <StaticImage
                                                    src="../assets/images/in-the-news-jan4-2021-outdoor-movie-theater-winner-152x143.png"
                                                    alt="January 4, 2021, press release announcing 107.5 Frank FM Fantasy Pro Football Challenge winner of the Outdoor Movie Theater."
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Press Release</h4>
                                                <h3 className="text-gray-800 font-bold press-release-lineHeight">
                                                    Winner announcement for Fastasy Pro Football ...
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
                                                    src="../assets/images/in-the-news-sep10-2020-outdoor-movie-theater-giveaway-152x143.png"
                                                    alt="September 10, 2021, press release announcing Fantasy Pro Football Challenge giveaway of an outdoor movie theater."
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
                                                    src="../assets/images/in-the-news-jun25-2020-todd-morton-founder-152x143.png"
                                                    alt="June 25, 2020, Bridgton News interview with Todd Morton, founder of the Wireless Outdoor Cinema Company."
                                                    className="w-full h-full object-cover rounded"
                                                />
                                            </div>
                                            <div className="ml-6 flex flex-col justify-between text-lg">
                                                <h4 className="text-gray-600">Bridgton News Article</h4>
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
                                                    src="../assets/images/in-the-news-jun8-2020-wireless-outdoor-cinema-company-152x143.png"
                                                    alt="June 08, 2020, press release introducing the Wireless Outdoor Cinema Company."
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
                                    to="/november-30-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/mobile-news-nov30-2023-outdoor-movie-theater-screen-frame-362x204.png" alt="November 30, 2023, press release announcing the new Timberline Free-Standing Screen Frame and Outdoor Movie Theater." className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company introduces new Timberline Free-Standing Screen Frame System
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">November 30, 2023</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/march-02-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/mobile-news-mar2-2023-outdoor-movie-theater-screen-frame-362x204.png" alt="March 2, 2023, press release announcing the new Timberline Cemented Screen Frame and Outdoor Movie Theater." className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company unveils new Timberline Cemented Screen Frame System
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">March 2, 2023</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/august-28-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/mobile-news-aug28-2022-outdoor-movie-theater-screen-frame-362x204.png" alt="August 28, 2022, press release notification of new supports to the Timberline Movable Screen Frame and Outdoor Movie Theater." className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company announces new frame supports to Timberline Series Movable Screen Frame System
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">August 28, 2022</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/june-30-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/mobile-news-jun30-2022-outdoor-projector-stand-362x204.png" alt="June 30, 2022, press release unveiling the new Timberline Outdoor Movie Theater Projector Stand." className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company unveils new Outdoor Movie Theater Projector Stand
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">June 30, 2022</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/october-10-sun-journal-news-article"
                                    className="cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage
                                        src="../assets/images/mobile-news-oct10-2021-todd-morton-founder-woc-362x204.png"
                                        alt="October 10, 2021, Sun Journal Newspaper interview with Todd Morton, founder of the Wireless Outdoor Cinema Company."
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
                                    to="/january-04-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/mobile-news-jan4-2021-outdoor-movie-theater-winner-362x204.png" alt="January 4, 2021, press release announcing 107.5 Frank FM Fantasy Pro Football Challenge winner of the Outdoor Movie Theater." className="w-full" />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company announces winner to the 107.5 Frank FM Fantasy Pro Football Challenge
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 text-lg mb-0">January 4, 2021</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/september-10-press-release"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage
                                        src="../assets/images/mobile-news-sep10-2020-outdoor-movie-theater-giveaway-362x204.png"
                                        alt="September 10, 2021, press release announcing Fantasy Pro Football Challenge giveaway of an outdoor movie theater."
                                        className="news-image-link w-full"
                                    />
                                    <div className="bg-white pt-5 px-3 cursor-pointer rounded-b-lg">
                                        <p className="text-gray-600 text-sm font-semibold mb-0 max-w-full text-lg">
                                            PRESS RELEASE
                                        </p>
                                        <p className="text-xl font-semibold leading-tight pt-1 mb-0 max-w-full text-lg">
                                            Wireless Outdoor Cinema Company partners with 107.5 Frank FM on Fantasy Pro Football Challenge
                                        </p>
                                        <p className="text-gray-600 pt-1 pb-3 mb-0 max-w-full text-lg">September 10, 2020</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/june-25-bridgton-news-article"
                                    className="pt-10 cursor-pointer sm:w-35 w-full no-underline"
                                >
                                    <StaticImage src="../assets/images/mobile-news-jun25-2020-todd-morton-founder-362x204.png" alt="June 25, 2020, Bridgton News interview with Todd Morton, founder of the Wireless Outdoor Cinema Company." className="w-full" />
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
                                    <StaticImage src="../assets/images/mobile-news-jun8-2020-wireless-outdoor-cinema-company-362x204.png" alt="June 08, 2020, press release introducing the Wireless Outdoor Cinema Company." className="w-full" />
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