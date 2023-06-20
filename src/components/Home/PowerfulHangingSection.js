import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import WarnIcon from "../../assets/images/icons/WarnIcon"
import RopeIcon from "../../assets/images/icons/RopeIcon"


const PowerfulHangingSection = () => {
    return (
      <div className="bg-black text-white pt-12 xl:pt-24">
        <div className="max-w-7xl px-5 xl:pb-24 pb-12 mx-auto border-b border-grey-subnav">
          <div>
            <h2 className="text-2xl md:text-4xl xl:text-50 font-semibold pb-3 mb-0">Cinematic screen-hanging methods</h2>
            <h3 className="txt-xl xl:text-35 md:text-2xl pb-4 xl:pb-5 text-orange-1000">
            Hang the screen directly with hooks, or use rope for a straight-line look.
            </h3>
            <div>
              <p className="mb-4 max-w-full text-lg">
              The cinematic screen allows you to hang it from the frame system using two different methods: 
              </p>
              <ol className="list-decimal ml-8">
                <li className="text-lg mb-0">Hanging with screw hooks through the screen’s grommet holes, which are attached to the
                   inside of the frame system</li>
            <li className="text-lg mb-0">Running a black nylon cord (supplied with the screen), through the grommet holes attached
               to the screen, and tying off to the side posts.</li>
              </ol>            

              <p className="mb-11 text-lg max-w-full mb-11">
                <WarnIcon className="h-4 mr-2 -mt-2 inline-flex" />
                There are many options when buying your outdoor cinematic screen, as they are available in many 
                different materials and sizes. The DIY guide covers which screens to stay away from, and which 
                are the best ones to use. You’ll also need to make exact calculations in order to hang the screen 
                correctly.  These are included with the manual and instructions.
              </p>
            </div>
          </div>
          <div className="md:grid grid-cols-12 gap-2">
            <div className="col-span-6  mb-3 md:mb-0 relative">
              {" "}
              <StaticImage className="mx-auto z-10 w-full" src="../../assets/images/hook-style-screen.jpg" alt="" />
              <div
                style={{
                  bottom: "8%",
                }}
                className="px-3 absolute flex items-center z-20 left-0 bg-black/[.5]"
              >
                <StaticImage
                  className="mx-auto w-16"
                  src="../../assets/images/icons/icon-stop-watch-144px-x-98px.png"
                  alt=""
                />
                <span>Quick hanging method with hooks</span>
              </div>
            </div>
            <div className="col-span-6 relative">
              {" "}
              <StaticImage
                className="mx-auto w-full z-10"
                src="../../assets/images/straight-line-screen.jpg"
                alt=""
              />
              <div
                style={{
                  bottom: "8%",
                }}
                className=" px-3 absolute flex items-center  z-20 right-0 bg-black/[.5]"
              >
                <span>Straight line method with rope</span>
                <RopeIcon className="md:h-10 h-6 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default PowerfulHangingSection