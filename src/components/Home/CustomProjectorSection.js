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
        ProjectorstandImage: file(relativePath: { eq: "timberline-projector-stand-1398px-x-658px.jpg" }) {
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
        MobileProjectorstandImage: file(relativePath: {eq: "mobile-projector-stand-480px-460px.jpg"}) {
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
      className="bg-black relative text-white border-grey-subnav pt-16 pb-12 lg:py-24"
      id="projectorstand"
    >
      <div className="max-w-7xl px-5 mx-auto">
        <div className="">
          <div className="text-left xl:col-span-12 xl:text-xl mb-11">
            <h2 className="hidden md:block xl:text-50 md:text-4xl font-semibold md:leading-none md:pb-3">
              Timberline custom projector stand built just for you
            </h2>

            <h2 className="md:hidden text-3xl md:text-4xl font-semibold pb-3">
              <span className="block text-xl"> Timberline </span>
              Custom projector stand built just for you
            </h2>
            <h3 className="mb-0 text-xl xl:text-35 md:text-2xl pb-4 xl:pb-5 text-orange-1000">
              The only projector stand designed specifically for your outdoor movie theater setup.
            </h3>
            <p className="sm:text-lg text-base mb-4 max-w-full">
              The Timberline custom project stand was designed because one size does not fit all.
              Every homeowner has a different property landscape and unique cinema equipment needs.
              To ensure that the projector casts your preferred entertainment at the right height
              and level, the projector stand must be aligned perfectly with the cinematic screen.
            </p>
            <p className="sm:text-lg text-base max-w-full mb-0">
              <WarnIcon className="h-4 mr-2 -mt-1 inline-flex" />
              Several calculations need to be made when building your custom projector stand to
              ensure that it aligns correctly with the screen and landscape of your property.
              All of the measurements are covered in the DIY guide.
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="sm:block hidden">
            <GatsbyImage image={getImage(TabletProjectorstandImage)} alt=""
              className="mx-auto w-full" />
          </div>
          <div className="sm:hidden">
            <GatsbyImage image={getImage(MobileProjectorstandImage)} alt=""
              className="mx-auto w-full" />
          </div>
          <div className="lg:mt-0 mt-10">
            <h2 className="text-3xl md:text-4xl font-semibold md:leading-none md:pb-3 pb-2">Custom projector stand</h2>
            <h3 className="text-xl md:text-2xl pb-4 xl:pb-5 text-orange-1000">
              A light-weight portable entertainment center
            </h3>
            <ul className="m-0 p-0">
              {gridItems.map((item, index) => {
                const Image = item.img
                return (
                  <li
                    className={`flex items-center mb-4 gap-3 ${index === 0 ? "mt-4" : ""
                      }`}
                    key={item.id}
                  >
                    <div>
                    <Image className="white-svg h-8 p-1" />
                    </div>
                    <span className="ml-2 font-bold sm:text-lg text-base">{item.text}</span>
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
          <div className="reltive w-fill mx-auto  flex justify-end h-full">
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

        {/* <div
            className="projectorstand mx-auto w-full relative hidden lg:block"           
          >
            <div className="reltive w-fill mx-auto  flex justify-end">
              <div className="block text-left py-2 pb-16 p-10 bg-blck-size-128 bg-black/[.6]">
                <div>
                  <h3 className="text-3xl">Projector Stand </h3>
                  <h4 className="text-2xl">Solid wood. Easy to build. </h4>
  
                  <ul className="text-xl m-0 p-0 ">
                    {gridItems.map(item => {
                      const Image = item.img
                      return (
                        <li className="flex items-center my-4 gap-3" key={item.id}>
                          <Image className="white-svg p-0 h-8 pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                          <span className="ml-2">{item.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default CustomProjectorSection