import React from "react";

import { BackyardIcon } from "../../assets/images/icons/backyard-icon"
import { FamilyMovieIcon } from "../../assets/images/icons/family-movie-icon"
import { SportStadiumIcon } from "../../assets/images/icons/sport-stadium-icon"
import { VideoGameConsoleIcon } from "../../assets/images/icons/video-game-console"

import { BackyardIconHover } from "../../assets/images/icons/backyard-icon-hover"
import { FamilyMovieIconHover } from "../../assets/images/icons/family-movie-icon-hover"
import { SportStadiumIconHover } from "../../assets/images/icons/sport-stadium-icon-hover"
import { VideoGameConsoleIconHover } from "../../assets/images/icons/video-game-console-hover"

import PerfectForItem from "./PerfectForItem";

const PerfectForSection = () => {
  const gridItems = [
    {
      id: 0,
      img: BackyardIcon,
      imghover: BackyardIconHover,

      title: "Streaming Shows",
      text: "Stream your favorite shows outside on the apps you watch inside",

    },
    {
      id: 2,
      img: FamilyMovieIcon,
      imghover: FamilyMovieIconHover,
      title: "Movie Night",
      text:
        "Enjoy a blockbuster movie on the big screen with family and friends",
    },
    {
      id: 3,
      img: SportStadiumIcon,
      imghover: SportStadiumIconHover,
      title: "Sporting Events",
      text:
        "Gather all your friends together to watch favorite teams play.",
    },
    {
      id: 4,
      img: VideoGameConsoleIcon,
      imghover: VideoGameConsoleIconHover,
      title: "Video Games",
      text: "Play life-size video games on a massive cinematic screen.",
    },
  ]

  return (
    <div
      className="bg-black relative text-white pt-16 lg:pt-24"
      id="cnemauses"
    >
      <div className="max-w-7xl px-5 mx-auto lg:pb-24 pb-14 border-b border-grey-subnav">
        <div className="mx-auto py-0 xl:py-0 flex flex-col xl:grid xl:grid-cols-12 w-full "></div>
        <div className="flex flex-col-reverse col-span-12 justify-center lg:grid grid-cols-12 gap-6 xl:gap-8 md:px-0">
          <div className="xl:col-span-4 col-span-5 lg:max-w-full md:max-w-2xl max-w-xs mx-auto lg:mt-0 mt-6">
            <div className="grid md:grid-cols-4 gap-6">
              {gridItems.map(item => <PerfectForItem item={item}/>)}
              {/* {gridItems.map(item => {
                const Image = item.img
                return (
                  <div className="orng-overlay col-span-2 gap-2" key={item.id}>
                    <div className="md:border rounded-md border-grey-theater md:mb-0 mb-4 md:p-2 text-center rollover-svg-item">
                      <Image
                        style={{
                          maxWidt: "",
                        }}
                        className="grid-icon mx-auto w-full md:w-auto h-18 p-4 dynamic-svg
          design-plan-svg"
                      />
                      <p className="font-bold text-lg md:txt-2xl mb-3 rollover-color-title text-orng md:text-white">
                        {item.title}
                      </p>
                      <p className="">{item.text}</p>
                    </div>
                  </div>
                )
              })} */}
            </div>
          </div>
          <div className="xl:col-span-8 col-span-7">
            <div className="xl:text-xl">
              <div className="hidden md:block lg:text-left text-center">
                <h2 className="xl:font-50 text-2xl md:text-4xl xl:text-50 font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Outdoor movie theater perfect for</h2>
                <h3 className="xl:font-35 txt-xl md:text-3xl xl:text-35 pb-4 xl:pb-5 text-orange-1000 md:leading-none leading-c14">
                  Homeowners with a backyard who love the outdoors.
                </h3>
              </div>

              <div className="block md:hidden text-center">
                <h2 className="text-3xl font-semibold leading-c18 pb-3">Perfect for</h2>
                <h3 className="txt-xl pb-4 text-orange-1000 leading-c14">
                  Homeowners with a backyard who loves the outdoors.
                </h3>
              </div>
              <p className="text-lg md:txt-2xl mb-4 max-w-full lg:text-left text-center">
                The Timberline Outdoor Movie Theater is designed to be an extension of your living room, allowing you to enjoy your favorite movies, streaming shows, sporting events, and more outside, thanks to a fast and easy setup every time. The cinema equipment stays on the custom projector stand and never has to be broken down or boxed up—just like your entertainment center inside your home.
              </p>

              <p className="text-lg md:txt-2xl max-w-full mb-0 lg:text-left text-center">
                Designed with convenience in mind, the frame system stays up on your property year-round-- just hang the cinematic screen whenever you want to watch movies, enjoy sporting events, stream your favorite shows, or play video games outside. When the nightly entertainment is over, simply pick up the portable projector stand and bring it inside to protect the equipment from moisture and rain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfectForSection