import React from "react";
import { Link, useStaticQuery, graphql} from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import HeaderScroll from "./HeaderScroll";

const HeroSection = () => {
    const { HeroImg, TabletHeroImg, MobileHeroImg } = useStaticQuery(
        graphql`
          query {
            HeroImg: file(relativePath: {eq: "timberline-outdoor-movie-theater-1920px-x-680px.jpg"}) {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            } 
            TabletHeroImg: file(relativePath: {eq: "timberline-outdoor-movie-theater-1920px-x-680px.jpg"}) {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED)
                }
              } 
            MobileHeroImg: file(relativePath: {eq: "mobile-timberline-outdoor-movie-theater-480x240.jpg"}) {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED)
                }
              }           
          }
        `
      )
    return (
        <>
        {/* <HeaderScroll /> */}
            <div className="bg-black relative text-white sm:top-0 ">
                <div className="hidden lg:block">
                <GatsbyImage image={getImage(HeroImg)} alt="" loading="eager" 
                className="mx-auto w-full max-w-2400 pb-6" />               
                </div>
                <div className="lg:hidden">
                <div className="sm:block hidden">
            <GatsbyImage image={getImage(TabletHeroImg)} alt=""
              className="mx-auto w-full" />
          </div>
          <div className="sm:hidden">
            <GatsbyImage image={getImage(MobileHeroImg)} alt=""
              className="mx-auto w-full" />
          </div>
                {/* <GatsbyImage image={getImage(MobileHeroImg)} alt="" loading="eager" 
                className="mx-auto w-full" /> */}
                </div>
                {/* <div class="absolute inset-0 bg-black opacity-50"></div> */}
                <div className="lg:container pb-4 xl:pb-16 mx-auto px-5">
                    <div className="lg:absolute xl:mt-16 2xl:pt-10 sm:top-0">
                        <div className="relative lg:w-3/5 xl:w-2/4 2xl:w-3/6 z-20 mt-8 xl:mt-0">
                            <p className="font-semibold text-xl md:text-3xl mb-0 max-w-full">
                                Get the only <span className="text-orange-1000">DIY</span> on
                            </p>
                            <h1 className="xl::text-6xl lg:text-5xl text-3xl mb-4 font-semibold leading-9 md:leading-none ">
                                <span className="text-orange-1000">How-to build a</span> professional
                                outdoor movie theater
                                <sup
                                    style={{
                                        transform: "translateY(5px)",
                                    }}
                                    className="pl-1 inline-block lg:text-3xl"
                                >
                                    ©
                                </sup>
                            </h1>

                            <div className="lg:flex-col-reverse flex-col flex">
                                <div>
                                    <p className="tet-xl md:text-2xl xl:leading-8 leading-7 mb-0 max-w-full">
                                    DIY guide bundle valued at $3,000
                                    </p>
                                    <p className="tet-xl md:text-2xl xl:leading-8 leading-7 mb-0 max-w-full">
                                    On sale now for $99* (Reg. price $199. 50% off)
                                    </p>
                                </div>
                                <div>
                                    <p className="my-4 text-lg md:text-2xl xl:my-4">
                                        <Link
                                            to="#"
                                            className="px-8 py-1 xl:px-16 xl:py-2 bg-orange-1000 no-underline text-white rounded-md"
                                        >
                                            Get the DIY guide now 
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection