import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import HeaderScroll from "./HeaderScroll"

const HeroSection = ({ page = "" }) => {
  const { HeroImg, TabletHeroImg, MobileHeroImg } = useStaticQuery(
    graphql`
      query {
        HeroImg: file(
          relativePath: {
            eq: "how-to-build-an-outdoor-movie-theater-1920px-x-680px-winter.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        TabletHeroImg: file(
          relativePath: {
            eq: "how-to-build-an-outdoor-movie-theater-1920px-x-680px-winter.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        MobileHeroImg: file(
          relativePath: {
            eq: "mobile-how-to-build-an-outdoor-movie-theater-480x320-winter.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
      }
    `
  )
  return (
    <>
      {page !== "home" && <HeaderScroll />}
      <div
        className={`bg-black relative text-white herosection ${
          page !== "home" ? "sm:top-0 sm:-mt-12" : ""
        }`}
      >
        <div className="hidden lg:block">
          <GatsbyImage
            image={getImage(HeroImg)}
            alt="How to build an outdoor movie theater. Outdoor theater setup in front of a lake in the winter."
            loading="eager"
            className="mx-auto w-full max-w-2400 pt-10 pb-12"
          />
        </div>
        <div className="lg:hidden">
          <div className="sm:block hidden">
            <GatsbyImage
              image={getImage(TabletHeroImg)}
              alt="How to build an outdoor movie theater. Outdoor theater setup in front of a lake in the winter."
              className="mx-auto w-full"
            />
          </div>
          <div className="sm:hidden">
            <GatsbyImage
              image={getImage(MobileHeroImg)}
              alt="How to build an outdoor movie theater. Outdoor theater setup in front of a lake in the winter."
              className="mx-auto w-full"
            />
          </div>
        </div>
        {/* <div class="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="lg:container pb-8 xl:pb-16 mx-auto px-5">
          <div className="lg:absolute xl:mt-16 2xl:pt-4 sm:top-0">
            <div className="relative lg:w-3/5  xl:w-3/5 2xl:w-3/5 z-20 xl:mt-0 lg:mt-20 mt-4 xl:mt-0">
              <p className="[text-shadow:_0_1px_0_rgb(0_0_30_/_80%)] mb-0 font-semibold lg:text-4xl text-2xl sm:text-2xl md:text-5xl md:mb-3 max-w-full">
                Get the only
              </p>
              <p className="[text-shadow:_0_1px_0_rgb(0_0_30_/_80%)] mb-2 font-semibold text-2xl sm:text-2xl lg:text-4xl md:text-5xl md:mb-4 max-w-full text-orange-1000 md:text-white lg:leading-8">
                professional DIY guide on
              </p>
              <h1 className="  text-white md:text-white [text-shadow:_0_1px_0_rgb(0_0_30_/_80%)] max-w-full lg:w-full md:w-4/6 w-4/5 xl:text-70 md:text-5xl lg:text-5xl md:leading-tight text-4xl mb-5 font-semibold lg:leading-8">
                How to build an outdoor movie{" "}
                <span className="relative">
                  theater
                  <sup
                    style={{
                      transform: "translateY(5px)",
                    }}
                    className="pl-1 inline-block lg:text-3xl absolute text-white md:text-white "
                  >
                    ©
                  </sup>
                </span>
              </h1>

              <div className="lg:flex-col-reverse flex-col flex mt-0 lg:mt-8 md:mt-16">
                <div className="hidden md:block">
                  <p className="text-lg  leading-6 sm:text-xl xl:text-3xl md:text-2xl mb-0.5 max-w-full">
                    On sale for $99 (Reg. price $199. 50% off)
                  </p>
                  <p className="text-lg  leading-6 sm:text-xl xl:text-3xl md:text-2xl mb-0 max-w-full">
                    A limited-time offer valued over $3,600
                  </p>
                </div>
                <div>
                <button>
                  <Link
                    to="#"
                    className="lg:mb-6 lg:mt-0 mb-0 text-lg md:text-2xl inline-block px-8 py-2 xl:px-10 xl:py-2 bg-orange-1000 no-underline text-white rounded-md"
                  >
                    Available May 1, 2024
                  </Link>
                </button>
                <div className="block md:hidden mt-4">
                  <p className="text-lg  leading-6 sm:text-xl xl:text-3xl md:text-2xl mb-0.5 max-w-full">
                    On sale for $99 (Reg. $199. 50% off)
                  </p>
                  <p className="text-lg  leading-6 sm:text-xl xl:text-3xl md:text-2xl mb-0 max-w-full">
                    A limited-time offer valued over $3,600
                  </p>
                </div>
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
