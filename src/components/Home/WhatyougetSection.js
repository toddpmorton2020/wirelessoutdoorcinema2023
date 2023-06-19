import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { DesignPlanIcon } from "../../assets/images/icons/design-plan-icon"
import { MaterialListIcon } from "../../assets/images/icons/material-list-icon"
import { ToolsNeededIcon } from "../../assets/images/icons/tools-needed-icon"
import { EquipmentListIcon } from "../../assets/images/icons/equipment-list-icon"
import { HowVideoIcon } from "../../assets/images/icons/how-to-video-icon"
import { TipsTechniquesIcon } from "../../assets/images/icons/tips-and-techniques-icon"


const gridItems = [
    {
      id: 0,
      img: DesignPlanIcon,
      title: "Design Plans",
      text:
        "Detailed plans show you how to build the frame and the projector stand.",
      bonus: false,
    },
    {
      id: 1,
      img: MaterialListIcon,
      title: "Material List",
      text: "List of required materials including hardware, fasteners, and wood.",
      bonus: false,
    },
    {
      id: 2,
      img: ToolsNeededIcon,
      title: "Equipment List",
      text:
        "Recommended electronics for wireless and wired systems.",
      bonus: false,
    },
    {
      id: 3,
      img: EquipmentListIcon,
      title: "Required Tools",
      text: "All tools are covered, from essential handheld to power tools.",
      bonus: false,
    },
    {
      id: 4,
      img: HowVideoIcon,
      title: "How-To Videos",
      text: "How to videos on assembling and installing your movie theater.",
      bonus: true,
    },
    {
      id: 5,
      img: TipsTechniquesIcon,
      title: "Tips & Techniques",
      text:
        "Get the most out of your outdoor movie theater with expert advice.",
      bonus: true,
    },

  ]


const WhatyougetSection =() => {

    return(
<div
      className="bg-gray-990 relative text-white pb-12 xl:pb-24"
      id="whatyouget"
    >
      <div className="max-w-7xl md:px-3 px-5 mx-auto">
        <div className="container mx-auto flex flex-col xl:grid xl:grid-cols-12 w-full">
          <div className="col-span-5 md:hidden">
            <StaticImage
              className="mx-auto px-10 xl:px-0 pb-20 mb-4 xl:pb-0 w-full"
              src="../../assets/images/timberline-big-moose-791px-x-755px.png"
              alt=""
            />
          </div>

          <div className="text-center xl:col-span-7 xl:text-left xl:text-xl pt-12 xl:pt-16 ">
            <h2 className="text-2xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Here's what you get</h2>
            <p className="text-white txt-xl font-bold md:text-2xl pb-4 xl:pb-5 mb-0">
            <span className="text-orange-1000 md:leading-none leading-c14">
              Timberline Big Moose
           <span className="text-white"> DIY </span>{" "} Guide.
              </span>
            </p>

            <div className="max-w-xl text-center md:text-justify">
              <p className="text-lg mb-4 ">
              Introducing the only professional DIY guide on how to build an outdoor movie theater, created just for homeowners. Jam-packed with valuable information, this how-to guide contains detailed diagrams, photographs, access to assembly and installation videos, recommended materials, tools, and equipment lists, wireless and wired cinema setups, different frame styles, tips and techniques, and bonus content.               </p>
              <p className="text-lg">
               Get your professional DIY content and video bundle for just $99 (regularly $199, valued at $3,000), available at this price only until September 15, 2023.
              </p>
            </div>
          </div>
          <div className="col-span-5 hidden md:block -mt-10">
            <StaticImage
              className="mx-auto px-10 xl:px-0 md:pb-32 mb-5 xl:pb-0 w-full"
              src="../../assets/images/timberline-big-moose-791px-x-755px.png"
              alt=""
            />
          </div>

          <div className="col-span-12 justify-center grid grid-cols-12 gap-6 mt-4">
            {gridItems.map(item => {
              const Image = item.img
              return (
                <div
                  className="col-span-12 md:col-span-6 xl:col-span-2 mx-auto rollover-svg-item w-full"
                  key={item.id}
                >
                  {item.bonus && (
                    <StaticImage src="../../assets/images/bonus-corner-banner-141px-x-121px.png" className="bonus-banner-image" />
                  )}
                  <div className="border wblock  rounded-md border-grey-theater px-2 text-center h-full flex flex-col justify-start">
                    <div className="flex justify-center">
                      <Image
                        style={{
                          maxWidt: "",
                        }}
                        className="my-3 pb-3 lg:pb-0 md:w-auto lg:h-10 h-16 mx-auto dynamic-svg
          design-plan-svg"
                      />
                    </div>
                    <p className="font-bold text-lg md:txt-2xl mb-3 rollover-color-title">
                      {item.title}
                    </p>
                    <p className="mb-2 text-sm">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    )
}

export default WhatyougetSection