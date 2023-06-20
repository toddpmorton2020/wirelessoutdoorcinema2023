import React from "react";
import { StaticImage } from "gatsby-plugin-image";


const BannerCalloutSection = () => {
    return (
      <div className="callout bg-gray-990 relative py-9 text-white hidden md:block">
        <div className="max-w-7xl mx-auto grid grid-cols-12 w-full gap-4 px-5">
          <div className="col-span-1">
            <StaticImage
              src="../../assets/images/icon-pdf-download-play-button-107px-x-99px.png"
              alt=""
              className="mt-2 xl:mt-0 "
            />
          </div>
          <div className="col-span-7 flex flex-col">
            <p className="text-xxs sm:text-xs md:text-lg xl:text-2xl lg:text-2xl font-semibold mb-0 max-w-full">
              <span className="text-orange-1000">Get the</span> only DIY{" "}
              <span className="text-orange-1000">on how-to build a professional</span>
            </p>
            <p className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-0">
              Outdoor Movie Theater
            </p>
          </div>
          <div className="col-start-9 col-span-4 lg:col-start-9 lg:col-span-3 flex flex-col justify-start text-center">
            <p className="text-xxs sm:text-xs md:text-base lg:text-2xl xl:text-3xl mb-3">
              Now only $99*
            </p>
            <a
              href="#"
              className="px-8 py-1 xl:py-2 xl:px-16 flex-0 bg-orange-1000 rounded-md leading-6 text-white no-underline text-lg md:text-xl"
            >
              Get the DIY now
            </a>
          </div>
        </div>
      </div>
    )
  }

 export default BannerCalloutSection 