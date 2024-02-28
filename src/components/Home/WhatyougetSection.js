import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import { DesignPlanIcon } from "../../assets/images/icons/design-plan-icon"
import { MaterialListIcon } from "../../assets/images/icons/material-list-icon"
import { ToolsNeededIcon } from "../../assets/images/icons/tools-needed-icon"
import { EquipmentListIcon } from "../../assets/images/icons/equipment-list-icon"
import { HowVideoIcon } from "../../assets/images/icons/how-to-video-icon"
import { TipsTechniquesIcon } from "../../assets/images/icons/tips-and-techniques-icon"
import { VideoIconSvg } from "../../assets/images/icons/videoIcon"

import { DesignPlanIconHover } from "../../assets/images/icons/design-plan-icon-hover"
import { MaterialListIconHover } from "../../assets/images/icons/material-list-icon-hover"
import { ToolsNeededIconHover } from "../../assets/images/icons/tools-needed-icon-hover"
import { EquipmentListIconHover } from "../../assets/images/icons/equipment-list-icon-hover"
import { HowVideoIconHover } from "../../assets/images/icons/how-to-video-icon-hover"
import { TipsTechniquesIconHover } from "../../assets/images/icons/tips-and-techniques-icon-hover"
import { VideoIconSvgHover } from "../../assets/images/icons/VideoIcon-hover"

// import { TimberMovableOutdoorSmall } from "../../assets/images/timberline-movable-outdoor-movie-theater-337px-x-216px.jpg"
// import { TimberMovableOutdoorLarge } from "../../assets/images/timberline-movable-outdoor-movie-theater-1200px-x-675px.jpg"

import WhatyougetItem from "./WhatyougetItem"

const WhatyougetSection = () => {
  const [activeImage, setActiveImage] = useState("gatsby")
  const {
    MooseImg,
    BonusImg,
    Photo1Small,
    Photo1Large,
    MobilePhoto1Small,
    MobilePhoto1Large,
    Photo2Small,
    Photo2Large,
    MobilePhoto2Small,
    MobilePhoto2Large,
    Photo3Small,
    Photo3Large,
    MobilePhoto3Small,
    MobilePhoto3Large,
    Photo4Small,
    Photo4Large,
    MobilePhoto4Small,
    MobilePhoto4Large,
  } = useStaticQuery(
    graphql`
      query {
        MooseImg: file(
          relativePath: { eq: "timberline-big-moose-791px-x-755px.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }
        BonusImg: file(
          relativePath: { eq: "icons/icon-red-corner-bonus.png" }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FIXED, width: 60, height: 52)
          }
        }

        Photo1Small: file(
          relativePath: {
            eq: "timberline-movable-outdoor-movie-theater-337px-x-216px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 200)
          }
        }

        Photo1Large: file(
          relativePath: {
            eq: "timberline-movable-outdoor-movie-theater-1200px-x-675px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        MobilePhoto1Small: file(
          relativePath: {
            eq: "mobile-timberline-movable-outdoor-movie-theater-480x320.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 200)
          }
        }

        MobilePhoto1Large: file(
          relativePath: {
            eq: "mobile-timberline-movable-outdoor-movie-theater-640x360.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        Photo2Small: file(
          relativePath: {
            eq: "timberline-cemented-outdoor-movie-theater-337px-x-216px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 200)
          }
        }

        Photo2Large: file(
          relativePath: {
            eq: "timberline-cemented-outdoor-movie-theater-1200px-x-675px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        MobilePhoto2Small: file(
          relativePath: {
            eq: "mobile-timberline-cemented-outdoor-movie-theater-480x320.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 200)
          }
        }
        MobilePhoto2Large: file(
          relativePath: {
            eq: "mobile-timberline-cemented-outdoor-movie-theater-640x360.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        Photo3Small: file(
          relativePath: {
            eq: "timberline-free-standing-outdoor-movie-theater-337px-x-216px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 200)
          }
        }

        Photo3Large: file(
          relativePath: {
            eq: "timberline-free-standing-outdoor-movie-theater-1200px-x-675px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        MobilePhoto3Small: file(
          relativePath: {
            eq: "mobile-timberline-free-standing-outdoor-movie-theater-480x320.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 200)
          }
        }
        MobilePhoto3Large: file(
          relativePath: {
            eq: "mobile-timberline-free-standing-outdoor-movie-theater-640x360.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        Photo4Small: file(
          relativePath: {
            eq: "timberline-outdoor-projector-stand-337px-x-216px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 250)
          }
        }

        Photo4Large: file(
          relativePath: {
            eq: "timberline-outdoor-projector-stand-1200px-x-675px.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
          }
        }

        MobilePhoto4Small: file(
          relativePath: {
            eq: "mobile-timberline-outdoor-projector-stand-480x320.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, height: 250)
          }
        }

        MobilePhoto4Large: file(
          relativePath: {
            eq: "mobile-timberline-outdoor-projector-stand-640x360.jpg"
          }
        ) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: CONSTRAINED)
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
      text: "Complete design plans on how to build everything.",
      bonus: false,
    },
    {
      id: 124,
      img: EquipmentListIcon,
      imghover: EquipmentListIconHover,
      title: "Required Tools",
      text: "All tools are covered, from essential handheld to power tools.",
      bonus: false,
    },
    {
      id: 125,
      img: MaterialListIcon,
      imghover: MaterialListIconHover,
      title: "Building Material List",
      text: "List of all materials including hardware, fasteners, and wood.",
      bonus: false,
    },
    {
      id: 126,
      // img: HowVideoIcon,
      img: VideoIconSvg,
      // imghover: HowVideoIconHover,
      // imghover: VideoIconSvgHover,
      title: "How-To Videos",
      text: "Watch how to build, assemble, and install your outdoor theater.",
      bonus: true,
    },
    {
      id: 127,
      img: ToolsNeededIcon,
      imghover: ToolsNeededIconHover,
      title: "Cinema Equipment List",
      text: "Recommended electronics for wireless and wired systems.",
      bonus: false,
    },
    {
      id: 128,
      img: TipsTechniquesIcon,
      imghover: TipsTechniquesIconHover,
      title: "Tips & Techniques",
      text: "Avoid costly mistakes and pitfalls with expert advice.",
      bonus: true,
    },
  ]

  const mobileGridItems = [
    {
      id: 123,
      img: DesignPlanIcon,
      imghover: DesignPlanIconHover,
      title: "Design Plans",
      text: "Complete design plans on how to build everything.",
      bonus: false,
    },
    {
      id: 124,
      img: MaterialListIcon,
      imghover: MaterialListIconHover,
      title: "Material List",
      text: "List of all materials including hardware, fasteners, and wood.",
      bonus: false,
    },
    {
      id: 125,
      // img: EquipmentListIcon,
      // imghover: EquipmentListIconHover,
      img: ToolsNeededIcon,
      imghover: ToolsNeededIconHover,
      title: "Required Tools",
      text: "All tools are covered, from essential handheld to power tools.",
      bonus: false,
    },
    {
      id: 126,
      img: EquipmentListIcon,
      imghover: EquipmentListIconHover,
      title: "Equipment List",
      text: "Recommended electronics for wireless and wired systems.",
      bonus: false,
    },
    {
      id: 127,
      img: HowVideoIcon,
      // img: VideoIconSvg,
      imghover: HowVideoIconHover,
      // imghover: VideoIconSvgHover,
      title: "How-To Videos",
      text: "Watch how to build, assemble, and install your outdoor theater.",
      bonus: true,
    },
    {
      id: 128,
      img: TipsTechniquesIcon,
      imghover: TipsTechniquesIconHover,
      title: "Tips & Techniques",
      text: "Avoid costly mistakes and pitfalls with expert advice.",
      bonus: true,
    },
  ]

  const [modalImage, setModalImage] = useState(null)

  const closeModal = () => {
    setModalImage(null)
  }

  const imageDetails = [
    {
      id: 1,
      name: "Timberline Movable Frame and Equipment Setup",
      listPrice: "$3,499.00",
      smallImage: Photo1Small,
      largeImage: Photo1Large,
      mobileSmallImage: MobilePhoto1Small,
      mobileLargeImage: MobilePhoto1Large,
    },
    {
      id: 2,
      name: "Timberline Cemented Frame and Equipment Setup",
      listPrice: "$3,499.00",
      smallImage: Photo2Small,
      largeImage: Photo2Large,
      mobileSmallImage: MobilePhoto2Small,
      mobileLargeImage: MobilePhoto2Large,
    },
    {
      id: 3,
      name: "Timberline Free-Standing Frame and Equipment Setup",
      listPrice: "$3,599.00",
      smallImage: Photo3Small,
      largeImage: Photo3Large,
      mobileSmallImage: MobilePhoto3Small,
      // mobileLargeImage: MobilePhoto3Large, ===> not working
      mobileLargeImage: Photo3Large,
    },
    {
      id: 4,
      name: "Timberline Custom Outdoor Projector Stand",
      listPrice: "$299.00",
      smallImage: Photo4Small,
      largeImage: Photo4Large,
      mobileSmallImage: MobilePhoto4Small,
      mobileLargeImage: MobilePhoto4Large,
    },
  ]

  return (
    <div
      className="bg-gray-990 relative text-white pb-14 lg:pb-24 lg:pt-0 pt-16 -mb-0.5"
      id="whatyouget"
    >
      <div className="max-w-7xl px-5 mx-auto hidden md:block">
        <div className="flex flex-col lg:grid lg:grid-cols-12 w-full lg:gap-8">
          {/* <div className="col-span-5 lg:hidden sm:max-w-2xl mx-auto">
            <GatsbyImage
              image={getImage(MooseImg)}
              alt=""
              className="mx-auto px-10 xl:px-0 pb-20 mb-4 xl:pb-0 w-full"
            />
          </div> */}

          <div className="text-center xl:col-span-12 lg:col-span-6 lg:text-left xl:text-xl pt-6 lg:pt-24">
            <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold leading-c18 md:leading-none md:pb-3 pb-2">
              Here's what you get
            </h2>
            <h3 className="text-xl md:text-2xl xl:text-35 pb-4 xl:pb-5 mb-0 text-orange-1000">
              You’ll receive all 4 DIY Guides for just $99 (A bundle value over
              $3,600).
            </h3>

            <div>
              <p className="sm:text-lg text-base mb-4 max-w-full">
                Introducing the only complete DIY guide on how to build a
                professional outdoor movie theater. Take the guesswork and pain
                from trying to figure out how to enjoy your favorite
                entertainment outside by using this professional DIY guide
                designed to help you succeed in putting together your dream
                outdoor movie theater.
              </p>
              <p className="sm:text-lg text-base max-w-full mb-0">
                You will receive all four DIY guides in .pdf format and get
                video access to learn how to build, assemble, and install your
                new outdoor theater setup.{" "}
              </p>
            </div>
          </div>
          {/* <div className="xl:col-span-5 lg:col-span-6 hidden lg:block lg:-mt-10">
            <GatsbyImage image={getImage(MooseImg)} alt=""
              className="mx-auto mb-5 xl:pb-0 w-full" />
          </div> */}
          <div className="col-span-12">
            <div className="flex w-full justify-between">
              {imageDetails.map(image => (
                <div
                  key={image.id}
                  className="justify-center"
                  style={{ width: "305px" }}
                >
                  <button  onClick={() => setModalImage(image.largeImage)}>
                    <GatsbyImage
                      image={getImage(image.smallImage)}
                      style={{
                        height: "200px",
                        width: "300px",
                        margin: "auto",
                       
                      }}
                      alt=""
                    />
                  </button>
                  {/* {modalImage && modalImage.name === image.largeImage && (
            <div
              className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75"
              onClick={closeModal}
            >
              <button className="absolute top-0 right-0 m-4 text-white" onClick={closeModal}>
                Close
              </button>
              <div className="max-w-4xl mx-auto">
                <GatsbyImage image={getImage(modalImage)} alt="" />
              </div>
            </div>
          )} */}
                  <div className="text-center mt-3 text-lg px-4">
                    <p className="font-semibold" style={{ marginBottom: 0 }}>
                      {image.name}
                    </p>
                    <p className="mb-0"> {image.listPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {modalImage && (
            <div
              className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75"
              onClick={() => setModalImage(null)}
            >
              <button
                className="absolute top-[20px] right-[20px] m-4 text-white"
                onClick={() => setModalImage(null)}
              >
                Close
              </button>
              <div className="max-w-4xl m-auto">
                <GatsbyImage image={getImage(modalImage)} alt="" />
              </div>
            </div>
          )}

          <div className="border w-full rounded-xl px-5 col-span-12 justify-center grid grid-cols-12 lg:mt-4 mt-10 xl:max-w-full md:max-w-lg mx-auto">
            <div className="col-span-12 justify-center grid grid-cols-12 lg:mt-4 mt-10 xl:max-w-full md:max-w-lg mx-auto mb-8">
              <h3 className="col-span-12 text-lg md:text-xl xl:text-3xl mb-4 p-4">
                You’ll get all the resources you need to
                <span className="text-orange-1000">
                  {" "}
                  build an professional outdoor movie theater:
                </span>
              </h3>
              {gridItems.map(item => (
                <WhatyougetItem item={item} />
              ))}
            </div>
          </div>
          <div className="col-span-6 mt-6 ">
            <button className="bg-orange-1000 sm:text-lg text-base  text-white py-2 px-10 rounded-lg">
              Available May 1, 2024
            </button>
            <div className="mt-6">
              <p className=" sm:text-lg text-base  mb-0">
                On sale now for $99 (Reg. price $199. 50% off).
              </p>
              <p className="sm:text-lg text-base mb-0">
                This limited-time offer, valued at $3,600, expires September 30,
                2024.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view version----------------------------> */}
      <div className="max-w-7xl mx-auto block md:hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-12 w-full lg:gap-8">
          <div className="text-center xl:col-span-12 lg:col-span-6 lg:text-left xl:text-xl pt-0 md:pt-6 lg:pt-16 px-2">
            <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold leading-c18 md:leading-none md:pb-3 pb-2">
              Here's what you get
            </h2>
            <h3 className="text-xl md:text-2xl xl:text-35 pb-4 xl:pb-5 mb-0 text-orange-1000 px-5">
              You’ll receive all 4 DIY Guides for just $99 (A bundle value over
              $3,600).
            </h3>

            <div className="px-2">
              <p className="sm:text-lg text-base mb-4 max-w-full">
                Introducing the only complete DIY guide on how to build a
                professional outdoor movie theater. Take the guesswork and pain
                from trying to figure out how to enjoy your favorite
                entertainment outside by using this professional DIY guide
                designed to help you succeed in putting together your dream
                outdoor movie theater.
              </p>
              <p className="sm:text-lg text-base max-w-full mb-0">
                You will receive all four DIY guides in .pdf format and get
                video access to learn how to build, assemble, and install your
                new outdoor theater setup.{" "}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-8">
            {imageDetails.map(image => (
              <div key={image.id} >
                <button
                  onClick={() => setModalImage(image.mobileLargeImage)}
                  style={{ width: "100%", height: "320px" }}
                >
                  <GatsbyImage
                    image={getImage(image.mobileSmallImage)}
                    className="w-[100%] h-[320px] cursor-pointer md:object-cover"
                    alt=""
              
                    style={{
                      width: "100%",
                      height: "100%",
                      
                     
                    }}
                  />
                </button>
                {/* {modalImage && modalImage.name === image.largeImage && (
                  <div
                    className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75"
                    onClick={closeModal}
                  >
                    <div className="max-w-4xl mx-auto">
                      <GatsbyImage image={getImage(modalImage)} alt="" />
                    </div>
                    <button className="m-4 text-white" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                )} */}
                <div className="text-center mt-4 text-lg px-6">
                  <p
                    style={{
                      marginBottom: 0,
                      fontSize: "18px",
                      lineHeight: "18px",
                    }}
                    className="font-bold "
                  >
                    {image.name}
                  </p>
                  <p className="text-[#bbb9b9] md:mb-0">{image.listPrice}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ==========================mobile================================= */}

          {modalImage && (
            <div
              className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-75"
              onClick={() => setModalImage(null)}
            >
              <button
                className="absolute top-0 right-0 m-4 text-white"
                onClick={() => setModalImage(null)}
              >
                Close
              </button>
              <div className="max-w-md mx-auto">
                <GatsbyImage
                  image={getImage(modalImage)}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          )}

          <div className="md:border  w-full rounded-xl mb-0 px-6 col-span-12 justify-center grid grid-cols-12 lg:mt-4 xl:max-w-full md:max-w-lg mx-auto ">
            <div className="col-span-12 justify-center grid grid-cols-12 lg:mt-4 mt-2 xl:max-w-full md:max-w-lg mx-auto mb-2 ">
              <div className="col-span-12 mb-4 p-4 text-center">
                <h3 className="text-lg md:text-xl xl:text-3xl  text-orange-1000">
                  You’ll get all the resources you need
                </h3>
                <h3> to build an outdoor movie theater:</h3>
              </div>
              {mobileGridItems.map(item => (
                <WhatyougetItem item={item} />
              ))}
            </div>
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
          <div className="mt-2 md:mt-6 w-full flex flex-col items-center px-5">
            <button className="bg-orange-1000 text-lg font-bold text-base text-white py-2 w-[86%] rounded-lg">
              Available May 1, 2024
            </button>
            <div className="mt-6 text-center">
              <p className="text-lg  leading-6 sm:text-xl xl:text-3xl md:text-2xl mb-0.5 max-w-full">
                On sale now for $99 (Reg. $199. 50% off)
              </p>
              <p className="text-lg  leading-6 sm:text-xl xl:text-3xl md:text-2xl mb-0 max-w-full">
                A limited-time offer valued over $3,600
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatyougetSection
