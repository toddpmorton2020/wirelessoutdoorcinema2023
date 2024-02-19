import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

const SitemapPage = () => {
  return (
    <Layout bgcolor="bg-gray-100">
      <Breadcrumbs page_title={"Sitemap"} />
      <>
        <div className="md:pb-24 pb-10">
          <div className="max-w-7xl px-5 mx-auto">
            <div className="py-5">
              <div className="md:hidden relative mt-6 mb-6">
                <StaticImage
                  className="w-full h-full object-cover "
                  src="../assets/images/sitemap.png"
                />
              </div>
              <div className="mt-8">
                <h1 className="text-orange-500  xl:text-70 text-orange-500 text-4xl md:text-5xl leading-none font-medium relative mb-0">
                  Site<span className="text-orange-500 sm:text-black">map</span>
                </h1>
              </div>
              <div className="mt-2">
                {/* xl:text-50 text-2xl sm:text-3xl mt-3 */}
                <div className="text-center md:text-left sm:text-3xl text-2xl xl:text-50">
                  <h2>Search Engines Crawl Away</h2>
                </div>
                <div className="mt-6">
                  <div className="hidden sm:block font-bold text-2xl">
                    <h3>Pages</h3>
                  </div>
                  <div className="flex flex-col mt-4">
                    <Link
                      to="/"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      Home
                    </Link>
                    <Link
                      to="/the-story"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      The Story
                    </Link>
                    {/* <Link to="/comparison" className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1">
                                            Cinema Comparison
                                        </Link> */}
                    {/* <Link
                                            to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                                            className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                                        >
                                            96" Jedi Bobcat Wireless Outdoor Cinema
                                        </Link>
                                        <Link
                                            to="/timberline-cinema-packages/120-bella-bear-cinema"
                                            className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                                        >
                                            120" Bella Bear Wireless Outdoor Cinema
                                        </Link> */}
                    <Link
                      to="/Timberline-series/150-big-moose-outdoor-movie-theater/"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      150” Big Moose Outdoor Movie Theater
                    </Link>
                    {/* <Link to="/accessory" className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1">
                                            Outdoor Cinema Accessories
                                        </Link> */}
                    <Link
                      to="/how-to-build-an-outdoor-movie-theater/"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      How To Build an Outdoor Movie Theater
                    </Link>

                    <Link
                      to="/in-the-news"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      In the News
                    </Link>
                    <Link
                      to="/november-30-press-release"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} November 30, 2023 Press Release
                    </Link>
                    <Link
                      to="/march-02-press-release"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} March 2, 2023 Press Release
                    </Link>
                    <Link
                      to="/august-28-press-release"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} August 28, 2022 Press Release
                    </Link>
                    <Link
                      to="/june-30-press-release"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} June 30, 2022 Press Release
                    </Link>
                    <Link
                      to="/october-10-sun-journal-news-article"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} October 10, 2021 News Article
                    </Link>
                    <Link
                      to="/january-04-press-release"
                      className="no-underline  sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} January 04, 2021 Press Release
                    </Link>
                    <Link
                      to="/september-10-press-release"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} September 10, 2020 Press Release
                    </Link>
                    <Link
                      to="/june-25-bridgton-news-article"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} June 25, 2020 Press Release
                    </Link>
                    <Link
                      to="/june-08-press-release"
                      className="no-underline sm:text-lg text-base text-blue-600 hover:text-blue-800 font-normal mb-1"
                    >
                      {">"} June 08, 2020 Press Release
                    </Link>
                    {/* <Link
                      to="https://outdoormovietheater.blog"
                      className="no-underline text-blue-600 sm:text-lg text-base hover:text-blue-800 font-normal mb-1"
                    >
                      Blog
                    </Link> */}
                    <Link
                      to="https://outdoormovietheater.blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline text-blue-600 sm:text-lg text-base hover:text-blue-800 font-normal mb-1"
                    >
                      Blog
                    </Link>

                    <Link
                      to="/faq"
                      className="no-underline text-blue-600 sm:text-lg text-base hover:text-blue-800 font-normal mb-1"
                    >
                      FAQ
                    </Link>
                    <Link
                      to="/connect"
                      className="no-underline text-blue-600 sm:text-lg text-base hover:text-blue-800 font-normal mb-1"
                    >
                      Connect
                    </Link>
                    <Link
                      to="/terms"
                      className="no-underline text-blue-600 sm:text-lg text-base hover:text-blue-800 font-normal mb-1"
                    >
                      Terms
                    </Link>
                    <Link
                      to="/privacy"
                      className="no-underline text-blue-600 sm:text-lg text-base hover:text-blue-800 font-normal mb-1"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      to="/sitemap"
                      className="no-underline text-blue-600 sm:text-lg text-base hover:text-blue-800 font-normal mb-1"
                    >
                      Sitemap
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
export default SitemapPage
