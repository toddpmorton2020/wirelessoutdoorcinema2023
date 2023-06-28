import React, { useState } from "react";
import { Link, useStaticQuery, graphql} from "gatsby"
import {StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import { DesignPlanIcon } from "../../assets/images/icons/design-plan-icon"
import { MaterialListIcon } from "../../assets/images/icons/material-list-icon"
import { ToolsNeededIcon } from "../../assets/images/icons/tools-needed-icon"
import { EquipmentListIcon } from "../../assets/images/icons/equipment-list-icon"
import { HowVideoIcon } from "../../assets/images/icons/how-to-video-icon"
import { TipsTechniquesIcon } from "../../assets/images/icons/tips-and-techniques-icon"


import { DesignPlanIconHover } from "../../assets/images/icons/design-plan-icon-hover"
import { MaterialListIconHover } from "../../assets/images/icons/material-list-icon-hover"
import { ToolsNeededIconHover } from "../../assets/images/icons/tools-needed-icon-hover"
import { EquipmentListIconHover } from "../../assets/images/icons/equipment-list-icon-hover"
import { HowVideoIconHover } from "../../assets/images/icons/how-to-video-icon-hover"
import { TipsTechniquesIconHover } from "../../assets/images/icons/tips-and-techniques-icon-hover"

import WhatyougetItem from './WhatyougetItem'
const WhatyougetSection = () => {
  const [activeImage, setActiveImage] = useState("gatsby");
  const { MooseImg, BonusImg} = useStaticQuery(
    graphql`
      query {
        MooseImg: file(relativePath: {eq: "timberline-big-moose-791px-x-755px.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        } 
        BonusImg: file(relativePath: {eq: "icons/icon-red-corner-bonus.png"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width:60, height:52)
          }
        } 
                
      }
    `
  )

  const gridItems = [
    {
      id: 123,
      img: DesignPlanIcon,
      imghover: DesignPlanIconHover,
      title: "Design Plans",
      text:
        "Detailed plans show you how to build the frame and the projector stand.",
      bonus: false,
    },
    {
      id: 124,
      img: MaterialListIcon,
      imghover: MaterialListIconHover,
      title: "Material List",
      text: "List of required materials including hardware, fasteners, and wood.",
      bonus: false,
    },
    {
      id: 125,
      img: ToolsNeededIcon,
      imghover: ToolsNeededIconHover,
      title: "Equipment List",
      text:
        "Recommended electronics for wireless and wired systems.",
      bonus: false,
    },
    {
      id: 126,
      img: EquipmentListIcon,
      imghover: EquipmentListIconHover,
      title: "Required Tools",
      text: "All tools are covered, from essential handheld to power tools.",
      bonus: false,
    },
    {
      id: 127,
      img: HowVideoIcon,
      imghover: HowVideoIconHover,
      title: "How-To Videos",
      text: "How to videos on assembling and installing your movie theater.",
      bonus: true,
    },
    {
      id: 128,
      img: TipsTechniquesIcon,
      imghover: TipsTechniquesIconHover,
      title: "Tips & Techniques",
      text:
        "Get the most out of your outdoor movie theater with expert advice.",
      bonus: true,
    },

  ]


  return (
    <div
      className="bg-gray-990 relative text-white pb-12 lg:pb-24 lg:pt-0 pt-16"
      id="whatyouget"
    >
      <div className="max-w-7xl px-5 mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 w-full lg:gap-8">
          <div className="col-span-5 lg:hidden sm:max-w-2xl mx-auto">
          <GatsbyImage image={getImage(MooseImg)} alt="" 
                className="mx-auto px-10 xl:px-0 pb-20 mb-4 xl:pb-0 w-full" />            
          </div>

          <div className="text-center xl:col-span-7 lg:col-span-6 lg:text-left xl:text-xl pt-10 lg:pt-16 ">
            <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Here's what you get</h2>
            <h3 className="text-xl md:text-2xl xl:text-35 pb-4 xl:pb-5 mb-0 text-orange-1000">
              Timberline Big Moose
              <span className="text-white"> DIY </span>{" "} Guide.
            </h3>

            <div className="lg:max-w-xl text-center lg:text-justify">
              <p className="sm:text-lg text-base mb-4 max-w-full">
                Introducing the only professional DIY guide on how to build an outdoor movie theater, created just for homeowners. Jam-packed with valuable information, this how-to guide contains detailed diagrams, photographs, access to assembly and installation videos, recommended materials, tools, and equipment lists, wireless and wired cinema setups, different frame styles, tips and techniques, and bonus content.               </p>
              <p className="sm:text-lg text-base max-w-full mb-0">
                Get your professional DIY content and video bundle for just $99 (regularly $199, valued at $3,000), available at this price only until September 15, 2023.
              </p>
            </div>
          </div>
          <div className="xl:col-span-5 lg:col-span-6 hidden lg:block lg:-mt-10">
          <GatsbyImage image={getImage(MooseImg)} alt="" 
                className="mx-auto mb-5 xl:pb-0 w-full" />            
          </div>

          <div className="col-span-12 justify-center grid grid-cols-12 gap-6 lg:mt-4 mt-11 xl:max-w-full md:max-w-lg mx-auto">
          {gridItems.map(item => <WhatyougetItem item={item}/>)}
            {/* {gridItems.map(item => {
              const Image = item.img
              return (
                <div
                  className="col-span-12 md:col-span-6 xl:col-span-2 mx-auto rollover-svg-item w-full"
                  key={item.id}
                >
                  {item.bonus && (
                     <GatsbyImage image={getImage(BonusImg)} alt="" 
                     className="bonus-banner-image" />
                  )}
                  <div className="border wblock  rounded-md border-grey-theater px-2 text-center h-full flex flex-col justify-start">
                    <div className="flex justify-center">

                      


              <div>
              <Image
                        style={{
                          maxWidt: "",
                        }}                        
                        className="my-3 pb-3 lg:pb-0 md:w-auto lg:h-10 h-16 mx-auto dynamic-svg
          design-plan-svg"
                      />
              </div>


                    </div>
                    <p className="font-bold text-lg md:txt-2xl mb-3 rollover-color-title">
                      {item.title}
                    </p>
                    <p className="mb-2 text-sm">{item.text}</p>
                  </div>
                </div>
              )
            })} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatyougetSection