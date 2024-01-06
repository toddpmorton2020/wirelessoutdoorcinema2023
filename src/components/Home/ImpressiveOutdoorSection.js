import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// import ImpressiveImage1 from "../../assets/images/fastest-setup-time-695px-x-392px-winter.jpg"
// import ImpressiveImage2 from "../../assets/images/strongest-frame-photo-695px-x-392px-winter.jpg"
// import ImpressiveImage3 from "../../assets/images/outdoor-projector-stand-695px-x-392px-winter.jpg"
// import ImpressiveImage4 from "../../assets/images/year-round-photo-695px-x-392px.jpg"


import StopWatchIcon from "../../assets/images/icons/StopWatch"
import StrongIcon from "../../assets/images/icons/StrongIcon"
import PencilIcon from "../../assets/images/icons/PencilIcon"
import YearRoundIcon from "../../assets/images/icons/YearRoundIcon"


const ImpressiveOutdoorSection = () => {

  const { ImpressiveImage1, ImpressiveImage2, ImpressiveImage3, ImpressiveImage4 } = useStaticQuery(
    graphql`
      query {
        ImpressiveImage1: file(relativePath: {eq: "fastest-setup-time-695px-x-392px-winter.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        ImpressiveImage2: file(relativePath: {eq: "strongest-frame-photo-695px-x-392px-winter.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        ImpressiveImage3: file(relativePath: {eq: "outdoor-projector-stand-695px-x-392px-winter.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        ImpressiveImage4: file(relativePath: {eq: "year-round-photo-695px-x-392px.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
      }
    `
  )

  const gridItems = [
    {
      id: 0,
      img: ImpressiveImage1,
      icon: StopWatchIcon,
      text: "2-minute setup time",
      align: "start",
    },
    {
      id: 1,
      img: ImpressiveImage2,
      icon: StrongIcon,
      text: "Strongest frame system",
      align: "end",
    },
    {
      id: 2,
      img: ImpressiveImage3,
      icon: PencilIcon,
      text: "Custom projector stand",
      align: "start",
    },
    {
      id: 3,
      img: ImpressiveImage4,
      icon: YearRoundIcon,
      text: "Enjoy movies year-round",
      align: "end",
    },
  ]

  return (
    <div className="bg-gray-990 relative text-white pt-16 pb-6 lg:py-24 -mb-0.5"
    id="features"
    >
      <div className="max-w-7xl md:px-5 px-0 mx-auto">
        <div className="mx-auto flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="md:text-center xl:col-span-12 xl:text-xl mb-11 md:px-0 px-5">
            <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold md:leading-none md:pb-5 pb-2">
            Industry-leading outdoor movie theater features
            </h2>

            <h3 className="text-xl md:text-2xl xl:text-35 pb-4 xl:pb-7 text-orange-1000">
              Fastest setup. Strongest frame system. Custom equipment stand. Year-round.
            </h3>

            <p className="sm:text-lg text-base mb-0 max-w-full">
              After researching and testing all of the outdoor movie theaters you can buy online,
              I found four main areas for improvement. My benchmark testing focused on setup time,
              the durability of frame systems, cinema equipment organization, and the ability to
              use year-round in cold climates states like Maine. As a result, all of my Timberline
              Series Outdoor Movie Theaters have the following time-saving and industry-leading features:
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-12 lg:gap-2">
            {gridItems.map(item => {
              const Icon = item.icon
              return (
                <div
                  className="col-span-12 lg:col-span-6 mb-10 lg:mb-0"
                  key={item.id}
                >
                  <div className="text-center h-full relative block">
                    {/* <img
                        src={item.img}
                        alt={item.text}
                        className="grid-image mb-0 w-full"
                      /> */}

                    <GatsbyImage image={getImage(item.img)} alt={item.text} className="grid-image mb-0 w-full" />

                    <div
                      style={{
                        bottom: "1rem",
                      }}
                      className={`bg-black/[.6] flex p-2 absolute lg:hidden items-center gap-2 h-8 ${item.align === "start" ? "pr-8" : "right-0 flex-row-reverse pl-8"
                        }`}
                    >
                      <div>
                        <Icon
                          className={`h-10 ${item.align === "start" ? "mr-1" : "ml-1"
                            }`}
                        />
                      </div>
                      <div className="sm:text-lg text-sm">{item.text}</div>
                    </div>

                    <div
                      className={`absolute w-full lg:flex justify-center hidden large-justify-${item.align} top-1/2 xl:py-24 py-12 lg:my-0`}
                    >
                      <div className="flex flex-row bg-opacity-gray items-center relative h-10 gap-4">
                        <Icon
                          className={`absolute lg:h-10 ${item.align === "start"
                              ? "order-1 left-0 pl-4"
                              : "order-2 right-0 pr-4"
                            }`}
                        />
                        <p
                          className={`sm:text-lg text-base p-3 mb-0 ${item.align === "start"
                              ? "order-2 pl-20"
                              : "order-1 pr-20"
                            }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="text-center h-full relative block lg:hidden">
                      <img
                        src={item.imgM}
                        alt={item.text}
                        className="grid-image relative"
                      />
                      <div
                        className={`relative lg:absolute w-full flex justify-center large-justify-${item.align} lg:top-1/2 lg:pt-16 xl:py-24 my-3 lg:my-0`}
                      >
                        <div className="flex flex-col lg:flex-row bg-opacity-gray items-center relative">
                          <p
                            className={`text-xl xl:text-3xl p-3 ${
                              item.align === "start"
                                ? "lg:order-2 lg:pl-40"
                                : "lg:order-1 lg:pr-40"
                            }`}
                          >
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImpressiveOutdoorSection
