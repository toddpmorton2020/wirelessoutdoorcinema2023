import React from "react";
import PencilIcon from "../../assets/images/icons/PencilIcon"
import ArrowIcon from "../../assets/images/icons/ArrowIcon"
import WarnIcon from "../../assets/images/icons/WarnIcon"
import ElectronicsIcon from "../../assets/images/icons/Electronics"
import LightWeightIcon from "../../assets/images/icons/LightWeight"
import LumberIcon from "../../assets/images/icons/LumberIcon"
import PaintIcon from "../../assets/images/icons/PaintIcon"
import HouseIcon from "../../assets/images/icons/HouseIcon"

import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const CustomProjectorSection = () => {

  const { ProjectorstandImage, TabletProjectorstandImage, MobileProjectorstandImage } = useStaticQuery(
    graphql`
      query {
        ProjectorstandImage: file(relativePath: { eq: "timberline-outdoor-projector-stand-1398px-x-658px-winter.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1398) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        } 
        TabletProjectorstandImage: file(relativePath: {eq: "timberline-projector-stand-1398px-x-658px.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }  
        MobileProjectorstandImage: file(relativePath: {eq: "mobile-timberline-outdoor-projector-stand-480x460-winter.jpg"}) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        } 
        
       }
    `
  )

  const imageData = ProjectorstandImage.childImageSharp.fluid


  const gridItems = [

    {
      id: 0,
      img: PencilIcon,
      text: "Custom-built for your equipment",
    },
    {
      id: 1,
      img: ArrowIcon,

      text: "A portable entertainment center",
    },
    {
      id: 2,
      img: ElectronicsIcon,
      text: "Electronics always stay on the stand",
    },
    {
      id: 3,
      img: LightWeightIcon,
      text: "Light-weight and easy to carry",
    },
    {
      id: 4,
      img: LumberIcon,
      text: "Attractive solid wood projector stand",
    },
    {
      id: 5,
      img: PaintIcon,
      text: "Apply polyurethane or stain to protect",
    },
    {
      id: 7,
      img: HouseIcon,
      text: "Store inside when not using",
    },
  ]

  return (
    <div
      className="bg-black relative text-white pt-16 pb-12 lg:py-24 -mb-0.5"
      id="projectorstand"
    >
      <div className="max-w-7xl md:px-5 px-0 mx-auto">
        <div className="">
          <div className="text-left xl:col-span-12 xl:text-xl mb-11 md:px-0 px-5">
            <h2 className="hidden md:block xl:text-50 md:text-4xl font-semibold md:pb-4">
              Custom outdoor movie theater projector stand 
            </h2>

            <h2 className="md:hidden text-3xl md:text-4xl font-semibold pb-3">
              <span className="block text-xl"> Timberline </span>
              Custom projector stand built just for you
            </h2>
            <h3 className="mb-0 text-xl xl:text-35 md:text-2xl xl:leading-10 pb-4 xl:pb-5 text-orange-1000">
            The only outdoor projector stand designed just for your backyard.
            </h3>
            <p className="sm:text-lg text-base mb-4 max-w-full">
            The Timberline custom outdoor projector stand solves the challenge of correctly getting the projector at the proper height to cast your entertainment onto the cinematic screen using multiple calculations. No outdoor projector stands are available online because manufacturers know one size does not meet everyone's requirements due to different landscaped backyards and theater setups.
            </p>
            <p className="sm:text-lg text-base max-w-full mb-0">
              <WarnIcon className="h-4 mr-2 -mt-1 inline-flex" />
              The formula I developed calculates the perfect height the projector needs to be set at, regardless of your backyard landscape — the detailed calculations are in the DIY guide.
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="sm:block hidden">
            <GatsbyImage image={getImage(TabletProjectorstandImage)} alt="Timberline Custom Outdoor Projector Stand set up in the winter."
              className="mx-auto w-full" />
          </div>
          <div className="sm:hidden">
            <GatsbyImage image={getImage(MobileProjectorstandImage)} alt="Timberline Custom Outdoor Projector Stand set up in the winter."
              className="mx-auto w-full" />
          </div>
          <div className="lg:mt-0 mt-8 md:px-0 px-5">
            <h2 className="text-3xl md:text-4xl font-semibold md:leading-none md:pb-3 pb-2">Custom projector stand</h2>
            <h3 className="text-xl md:text-2xl pb-4 xl:pb-5 text-orange-1000">
              A light-weight portable entertainment center.
            </h3>
            <ul className="m-0 p-0">
              {gridItems.map((item, index) => {
                const Image = item.img
                return (
                  <li
                    className={`flex items-center mb-5 gap-3 ${index === 0 ? "mt-5" : ""
                      }`}
                    key={item.id}
                  >
                    <div className="w-8 h-7">
                    <Image className="white-svg" />
                    </div>
                    <span className="ml-2 sm:text-lg text-base">{item.text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <BackgroundImage
          Tag="section"
          className='mx-auto w-full relative hidden lg:block projectorstand'
          fluid={imageData}
        >
          <div className="reltive w-fill mx-auto flex justify-end h-full">
            <div className="block text-left pt-5 pb-10 px-10 bg-blck-size-128 bg-black/[.6]">
              <div>
                <h3 className="text-4xl">Projector Stand </h3>
                <h4 className="sub_heading text-3xl mb-4 mt-1">Solid wood. Easy to build. </h4>

                <ul className="text-xl m-0 p-0 ">
                  {gridItems.map(item => {
                    const Image = item.img
                    return (
                      <li className="flex items-center mb-5 gap-4" key={item.id}>
                        <Image className="white-svg p-0 h-8 pb-3 lg:pb-0 lg:w-10 lg:ml-0" />
                        <span className="text-lg">{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </div>
  )
}

export default CustomProjectorSection