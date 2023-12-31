import React from "react";
import { Link } from "gatsby";
import PlayIcon from "../../assets/images/icons/PlayIcon"


const VideoSection = () => {
  return (
    <div className="bg-black pt-9 xl:pt-10 xl:pb-36 lg:pb-24 pb-16">
      <div className="max-w-5xl mx-auto md:px-5 px-0">
        <div className="flex lg:flex-col flex-col-reverse how-to">
          <div className="lg:pb-11 text-white lg:pt-0 pt-11 md:px-0 px-5">
            <h2 className="xl:text-50 text-2xl lg:text-5xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2 md:block hidden">
            Introducing the Timberline Series 
            </h2>
            <h2 className="text-3xl font-semibold pb-2 md:hidden">
              <span className="text-xl block">Timberline</span>
              Outdoor Movie Theater
            </h2>
            <h3 className="xl:text-35 text-xl md:text-2xl pb-4 xl:pb-5 mb-0 text-orange-1000 ">
            Enjoy your favorite shows outside in the fresh air.
            </h3>
            <p className="mb-0 max-w-full sm:text-lg text-base">
            This revolutionary outdoor movie theater has the fastest setup time, the most durable frame system, never has to be broken down, and is built to be used year-round. Transform your backyard into an entertainment destination.
 
            </p>
            <Link to="https://wirelessoutdoorcinema.com/homePageVideo.mp4#t=0.1" className="no-underline flex items-center">
              <PlayIcon className="h-4 mr-2 " />
              <span className="text-blue-500 mb-0 sm:text-lg text-base">Watch to learn more.</span>
              </Link>
          </div>
          <div className="responsive-video h-full video-adjusted">
            <video
              controls={true}
              playsInline={false}
              id="mobile_vid"
              className="w-full h-full mx-auto"
              style={{
                maxWidth: "1280px",
                maxHeight: "720px",
                objectFit: "cover",
              }}
            >
              <source src="https://wirelessoutdoorcinema.com/homePageVideo.mp4#t=0.1" type="video/mp4" />

            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoSection