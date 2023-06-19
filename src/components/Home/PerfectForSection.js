import React from "react";

import { BackyardIcon } from "../../assets/images/icons/backyard-icon"
import { FamilyMovieIcon } from "../../assets/images/icons/family-movie-icon"
import { SportStadiumIcon } from "../../assets/images/icons/sport-stadium-icon"
import { VideoGameConsoleIcon } from "../../assets/images/icons/video-game-console"



const PerfectForSection = () => {
  const gridItems = [
    {
      id: 0,
      img: (
        <BackyardIcon className="grid-icon mx-auto w-full md:w-auto h-16 md:h-18 p-4" />
      ),
      title: "Streaming Shows",
      text: "Stream your favorite shows outside on the apps you watch inside",
    },
    {
      id: 2,
      img: (
        <FamilyMovieIcon className="grid-icon  mx-auto w-full md:w-auto h-24 md:h-18 p-4" />
      ),
      title: "Movie Night",
      text:
        "Enjoy a blockbuster movie on the big screen with family and friends",
    },
    {
      id: 3,
      img: (
        <SportStadiumIcon className="grid-icon mx-auto w-full md:w-auto h-18 md:h-18 p-4" />
      ),
      title: "Sporting Events",
      text:
        "Gather all your friends together to watch favorite teams play.",
    },
    {
      id: 4,
      img: (
        <VideoGameConsoleIcon className="grid-icon mx-auto w-full md:w-auto h-18 md:h-18 p-4" />
      ),
      title: "Video Games",
      text: "Play life-size video games on a massive cinematic screen.",
    },
  ]

  return (
    <div
      className="bg-black relative text-white pt-12 xl:pt-24"
      id="cnemauses"
    >
      <div className="max-w-7xl md:px-3 px-5 mx-auto xl:pb-24 pb-10 border-b border-grey-subnav">
        <div className="mx-auto py-0 xl:py-0 flex flex-col xl:grid xl:grid-cols-12 w-full "></div>
        <div className="flex flex-col-reverse col-span-12 justify-center lg:grid grid-cols-12 gap-6 xl:gap-10 md:px-0">
          <div className="col-span-4">
            <div className="grid md:grid-cols-4 gap-3">
              {gridItems.map(item => (
                <div className="orng-overlay col-span-2 gap-2" key={item.id}>
                  <div className="md:border rounded-md border-grey-theater md:mb-0 mb-4 md:p-2 text-center rollover-svg-item">
                    {item.img}
                    <p className="font-bold text-lg md:txt-2xl mb-3 rollover-color-title text-orng md:text-white">
                      {item.title}
                    </p>
                    <p className="">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-8">
            <div className="xl:text-xl pb-3">
              <div className="hidden md:block">
                <h2 className="xl:font-50 text-2xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Outdoor movie theater perfect for</h2>
                <h3 className="xl:font-35 txt-xl md:text-3xl pb-4 xl:pb-5 text-orange-1000 md:leading-none leading-c14">
                  Homeowners with a backyard who love the outdoors.
                </h3>
              </div>

              <div className="block md:hidden">
                <h2 className="xl:font-50 text-2xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Perfect for</h2>
                <h3 className="xl:font-35 txt-xl md:text-2xl pb-4 xl:pb-5 text-orange-1000 md:leading-none leading-c14">
                  Homeowners with a backyard who loves the outdoors.
                </h3>
              </div>
              <p className="text-lg md:txt-2xl  mb-4 max-w-full">
                The Timberline Outdoor Movie Theater is designed to be an extension of your living room, allowing you to enjoy your favorite movies, streaming shows, sporting events, and more outside, thanks to a fast and easy setup every time. The cinema equipment stays on the custom projector stand and never has to be broken down or boxed up—just like your entertainment center inside your home.
              </p>

              <p className="text-lg md:txt-2xl max-w-full">
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