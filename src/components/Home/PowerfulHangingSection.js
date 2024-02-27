import React from "react";
import { useStaticQuery, graphql} from "gatsby"
import {StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import WarnIcon from "../../assets/images/icons/WarnIcon"
import RopeIcon from "../../assets/images/icons/RopeIcon"


const PowerfulHangingSection = () => {
  const { HookImg, StraightImg, StopwatchIcon, HandIcon, GrommetIcon } = useStaticQuery(
    graphql`
      query {
        HookImg: file(relativePath: {eq: "outdoor-projector-screen-manual-pull-down-695x392-winter.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        } 
        StraightImg: file(relativePath: {eq: "outdoor-projector-screen-grommet-hole-695x392-winter.jpg"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: CONSTRAINED)
            }
          } 
          StopwatchIcon: file(relativePath: {eq: "icons/icon-stop-watch-144px-x-98px.png"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FIXED, width:64,height:44)
            }
          }

          HandIcon: file(relativePath: {eq: "icons/icon-hand-144x98.png"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FIXED, width:35,height:28)
            }
          }

          GrommetIcon: file(relativePath: {eq: "icons/icon-grommet-144x98.png"}) {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FIXED, width:35,height:28)
            }
          }
          
          
      }
    `
  )
    return (
      <div id="screens" className="bg-black text-white pt-16 lg:pt-24">
        <div className="max-w-7xl md:px-5 px-0 lg:pb-24 pb-16 mx-auto border-b border-grey-subnav">
          <div className="md:px-0 px-5">
            <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold pb-3 mb-0">Outdoor projector screen options</h2>
            <h3 className="text-xl xl:text-35 md:text-2xl pb-4 xl:pb-5 text-orange-1000">
            Use a manual or electric projector screen or a grommet hole cinematic screen.
            </h3>
            <div>
              <p className="mb-6 max-w-full sm:text-lg text-base">
              The outdoor projector screen you choose will dramatically impact the visual quality you'll experience when watching your favorite entertainment outside. There are many options when selecting your outdoor projector screen online, and I've provided two screens that will give you excellent viewing quality. You can use a manual or electric projector screen or a grommet hole cinematic screen. 
              </p>
                 
              <p className="sm:text-lg text-base max-w-full mb-11">
                <WarnIcon className="h-4 mr-2 -mt-2 inline-flex" />
                Learn which outdoor projector screens are the best to use and the screens you should avoid — all provided in the DIY guide.
              </p>
            </div>
          </div>
          <div className="md:grid grid-cols-12 gap-2">
            <div className="col-span-6 mb-11 md:mb-0 relative hidden md:block">
              {" "}
              <GatsbyImage image={getImage(HookImg)} alt="Manual pull-down outdoor projector screen setup on a Timberline Outdoor Movie Theater Screen Frame."  
                className="mx-auto z-10 w-full" />
              <div
                style={{
                  bottom: "8%",
                }}
                className="px-3 absolute flex items-center z-20 left-0 bg-black/[.5] h-8"
              >
                
                <GatsbyImage image={getImage(HandIcon)} alt=""
                className="mx-auto w-16" />
                
                <span className="sm:text-lg text-sm">Manual pull-down projector screen</span>
              </div>
            </div>
            <div className="col-span-6 mb-11 md:mb-0 relative block md:hidden">
              {" "}
              <div>
              <GatsbyImage image={getImage(HookImg)} alt="Manual pull-down outdoor projector screen setup on a Timberline Outdoor Movie Theater Screen Frame."  
                className="mx-auto z-10 w-full" />
                </div>
                <div className="flex pt-2 mt-2 items-center justify-center">
                
                <GatsbyImage image={getImage(HandIcon)} alt=""
                className="w-16" />
                
                <span className="sm:text-lg text-sm">Manual pull-down projector screen</span>
              </div>

            </div>




            <div className="col-span-6 relative hidden md:block">
              {" "}
              
              <GatsbyImage image={getImage(StraightImg)} alt="Grommet hole outdoor projection screen setup on a Timberline Outdoor Movie Theater Screen Frame." 
                className="mx-auto z-10 w-full" />
              <div
                style={{
                  bottom: "8%",
                }}
                className="px-3 absolute flex items-center z-20 right-0 bg-black/[.5] h-8"
              >
                <span className="sm:text-lg text-sm">Cinematic grommet hole screen</span>
                <GatsbyImage image={getImage(GrommetIcon)} alt="Cinematic grommet hole screen"
                className="mx-auto w-16"/>
              </div>
            </div>
            <div className="col-span-6 relative block md:hidden">
              {" "}
              
              <GatsbyImage image={getImage(StraightImg)} alt="Grommet hole outdoor projection screen setup on a Timberline Outdoor Movie Theater Screen Frame." 
                className="mx-auto z-10 w-full" />
                <div className="flex pt-2 items-center mt-2  justify-center">
                <GatsbyImage image={getImage(GrommetIcon)} alt="Cinematic grommet hole screen"
                className="w-16 mr-2"/>
                <span className="sm:text-lg text-sm">Cinematic grommet hole screen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default PowerfulHangingSection