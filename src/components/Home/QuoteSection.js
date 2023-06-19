import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const QuoteSection = () => {
    return (
        <div className="bg-black relative text-white border-grey-subnav md:pb-12 pb-8">
        <StaticImage
          className="mx-auto w-full hidden md:block max-w-2400 mb-4 lg:pb-24"
          src="../../assets/images/timberline-outdoor-movie-theater-quote-1920px-x-680px.jpg"
          alt=""
        />
        <StaticImage
          className="mx-auto w-full md:hidden max-w-2400 mb-4"
          src="../../assets/images/quote-photo-480px-420px.jpg"
          alt=""
        />
  
        <div className="max-w-7xl mx-auto w-full px-5">
          <div className="flex flex-col lg:hidden">
            <div className="block col-span-12 mb-5 text-center relative">
              <p className="text-lg relative quote-todd mb-0 max-w-full">
              My wireless outdoor movie theaters take less time to set up and start watching than it does to pop a bag of popcorn.
              </p>
              <StaticImage
                src="../../assets/images/mobile-quote-signature.png"
                alt=""
                className="w-full px-10 mx-auto mt-5 md:hidden"
              />
            </div>
          </div>
          <div className="block h-full max-w-7xl">
            <div className="absolute max-w-7xl mx-auto w-full mt-8 top-0 hidden lg:grid grid-cols-12">
              <div className="flex flex-col col-start-7 col-span-6 text-center ">
                <p className="text-2xl xl:text-3xl quote-todd mb-0 max-w-full">
                My wireless outdoor movie theaters take less time to set up and start watching than it does to pop a bag of popcorn
                </p>

                <StaticImage
                  src="../../assets/images/todd-morton-founder-signature-743px-x-87px.png"
                  alt=""
                  className="w-4/5 mx-auto mt-5 hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default QuoteSection