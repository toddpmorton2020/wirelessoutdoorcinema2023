import React from "react";
import { useStaticQuery, graphql} from "gatsby"
import {StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import WarnIcon from "../../assets/images/icons/WarnIcon"
import RopeIcon from "../../assets/images/icons/RopeIcon"


const PowerfulHangingSection = () => {
  const { HookImg, StraightImg, StopwatchIcon} = useStaticQuery(
    graphql`
      query {
        HookImg: file(relativePath: {eq: "hook-style-screen.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        } 
        StraightImg: file(relativePath: {eq: "straight-line-screen.jpg"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          } 
          StopwatchIcon: file(relativePath: {eq: "icons/icon-stop-watch-144px-x-98px.png"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FIXED, width:64,height:44)
            }
          } 
          
          
      }
    `
  )
    return (
      <div id="screens" className="bg-black text-white pt-16 lg:pt-24">
        <div className="max-w-7xl md:px-5 px-0 lg:pb-24 pb-16 mx-auto border-b border-grey-subnav">
          <div className="md:px-0 px-5">
            <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold pb-3 mb-0">Cinematic screen-hanging methods</h2>
            <h3 className="text-xl xl:text-35 md:text-2xl pb-4 xl:pb-5 text-orange-1000">
            Hang the screen directly with hooks, or use rope for a straight-line look.
            </h3>
            <div>
              <p className="mb-6 max-w-full sm:text-lg text-base">
              The cinematic screen allows you to hang it from the frame system using two different methods: 
              </p>
              <ol className="list-decimal ml-8">
                <li className="sm:text-lg text-base mb-4">Hanging with screw hooks through the screen’s grommet holes, which are attached to the
                   inside of the frame system.</li>
            <li className="sm:text-lg text-base mb-4">Running a black nylon cord (supplied with the screen), through the grommet holes attached
               to the screen, and tying off to the side posts.</li>
              </ol>            

              <p className="sm:text-lg text-base max-w-full mb-11">
                <WarnIcon className="h-4 mr-2 -mt-2 inline-flex" />
                There are many options when buying your outdoor cinematic screen, as they are available in many 
                different materials and sizes. The DIY guide covers which screens to stay away from, and which 
                are the best ones to use. You’ll also need to make exact calculations in order to hang the screen 
                correctly.  These are included with the manual and instructions.
              </p>
            </div>
          </div>
          <div className="md:grid grid-cols-12 gap-2">
            <div className="col-span-6 mb-11 md:mb-0 relative">
              {" "}
              <GatsbyImage image={getImage(HookImg)} alt=""  
                className="mx-auto z-10 w-full" />
              <div
                style={{
                  bottom: "8%",
                }}
                className="px-3 absolute flex items-center z-20 left-0 bg-black/[.5] h-8"
              >
                
                <GatsbyImage image={getImage(StopwatchIcon)} alt=""
                className="mx-auto w-16" />
                
                <span className="sm:text-lg text-sm">Quick hanging method with hooks</span>
              </div>
            </div>
            <div className="col-span-6 relative">
              {" "}
              
              <GatsbyImage image={getImage(StraightImg)} alt="" 
                className="mx-auto z-10 w-full" />
              <div
                style={{
                  bottom: "8%",
                }}
                className="px-3 absolute flex items-center z-20 right-0 bg-black/[.5] h-8"
              >
                <span className="sm:text-lg text-sm">Straight line method with rope</span>
                <RopeIcon className="h-9 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default PowerfulHangingSection