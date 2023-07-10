import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import WarnIcon from "../../assets/images/icons/WarnIcon"
import MovableIcon from "../../assets/images/icons/MovableIcon"
import SturdyIcon from "../../assets/images/icons/SturdyIcon"
import YearRoundIcon from "../../assets/images/icons/YearRoundIcon"
import AffordableIcon from "../../assets/images/icons/Affordable"
import PermanentIcon from "../../assets/images/icons/PermanetIcon"
import BuiltIcon from "../../assets/images/icons/BuiltIcon"
import FireIcon from "../../assets/images/icons/FireIcon"
import BudgetIcon from "../../assets/images/icons/BudgetIcon"

const FrameSystemsSection = () => {
    const { FrameImg1, FrameImg2 } = useStaticQuery(
        graphql`
          query {
            FrameImg1: file(relativePath: {eq: "timberline-movable-frame-1617px-x-750px.jpg"}) {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            } 
            FrameImg2: file(relativePath: {eq: "timberline-streamline-frame-1617px-x-750px.jpg"}) {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED)
                }
              }           
          }
        `
    )

    return (
        <div
            className="bg-gray-990 text-white  border-grey-subnav py-16 lg:py-24"
            id="framesystems"
        >
            <div className="max-w-7xl md:px-5 px-0 mx-auto">
                <div className="">
                    <div className="text-center md:text-left xl:text-xl mb-11 md:px-0 px-5">
                        <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold md:leading-none md:pb-3 pb-2">Durable and long-lasting frame systems</h2>
                        <h3 className="text-xl md:text-2xl xl:text-35 pb-4 xl:pb-5 text-orange-1000">
                            Introducing the Timberline Movable and Streamline Frame Systems.
                        </h3>
                        <p className="sm:text-lg text-base md:mb-0 mb-10 max-w-full">
                            Everyone homeowner has a different landscape on their property, and the Timberline Movable and
                            Streamline Frame System was developed to address every challenge when installing a backyard movie
                            theater. Choose the Movable Frame System if you have a flat lawn and want the flexibility to move
                            the frame anywhere on your property to enjoy your favorite entertainment. The Streamline Frame
                            System was created for uneven landscapes and backyards with ledge stone and other obstacles.
                            It is designed to be secured firmly in your preferred spot for movie-watching.
                        </p>
                    </div>
                    <div className="md:grid flex flex-col-reverse items-stretch lg:gap-4 grid-cols-12 pb-10 xl:mb-10 relative">
                        <div className="lg:col-span-4 md:col-span-5 md:text-left text-center lg:mt-0 mt-6 md:px-0 px-5">
                            <h2 className="text-3xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Movable Frame</h2>
                            <h3 className="text-xl lg:text-3xl md:text-2xl pb-4 xl:pb-5 mb-0 max-w-full text-orange-1000">
                                Perfect for flat lawns.
                            </h3>
                            <p className="mb-4 sm:text-lg text-base max-w-full">
                                Versatile, allowing homeowners to position the system anywhere on the property.
                            </p>
                            <p className="mb-4 sm:text-lg text-base max-w-full">Made from pressure-treated wood and weather-resistance hardware.   </p>
                            <p className="mb-0 sm:text-lg text-base max-w-full">
                                <WarnIcon className="h-4 mr-2 -mt-1 inline-flex" />
                                Before you start building the Movable Frame System, you need to make exact calculations
                                in order for the cinematic screen to fit correctly in the frame opening. You’ll find all the
                                details you need in the how-to manual.
                            </p>
                        </div>
                        <div className="lg:col-span-8 md:col-span-7">
                            <GatsbyImage image={getImage(FrameImg1)} alt=""
                                className="mx-auto w-full" />

                            <div className="py-3 flex md:px-0 px-3 justify-around text-center sm:gap-0 gap-2">
                                <div>
                                    <MovableIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />

                                    <p className="md:text-lg sm:text-base text-sm mb-0">Movable</p>
                                </div>
                                <div>
                                    <SturdyIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />
                                    <p className="md:text-lg sm:text-base text-sm mb-0">Sturdy</p>
                                </div>
                                <div>
                                    <YearRoundIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />
                                    <p className="md:text-lg sm:text-base text-sm mb-0">Year-round</p>
                                </div>
                                <div>
                                    <AffordableIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />
                                    <p className="md:text-lg sm:text-base text-sm mb-0">Affordable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:grid lg:gap-10 gap-4 items-stretch grid-cols-12 relative">
                        <div className="lg:col-span-8 md:col-span-7 text-center">
                            <GatsbyImage image={getImage(FrameImg2)} alt=""
                                className="mx-auto w-full" />

                            <div className="bg-gray-990 md:px-0 px-3 py-3 flex justify-around sm:gap-0 gap-2">
                                <div>
                                    <PermanentIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />

                                    <p className="md:text-lg sm:text-base text-sm mb-0">Permanent</p>
                                </div>
                                <div>
                                    <FireIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />
                                    <p className="md:text-lg sm:text-base text-sm mb-0">Attractive</p>
                                </div>
                                <div>
                                    <BuiltIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />

                                    <p className="md:text-lg sm:text-base text-sm mb-0">Built-to-last</p>
                                </div>
                                <div>
                                    <BudgetIcon className="w-full h-7 sm:h-8 xl:h-12 p-1" />

                                    <p className="md:text-lg sm:text-base text-sm mb-0">Low-cost</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 md:col-span-5 lg:mt-0 mt-4 md:text-left text-center md:px-0 px-5">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold md:pb-0 pb-2">Streamline Frame</h2>
                                <h3 className="text-xl lg:text-3xl md:text-2xl pb-4 xl:pb-5 mb-0 max-w-full text-orange-1000">
                                    Ideal for any backyard.
                                </h3>
                            </div>
                            <p className="mb-4 sm:text-lg text-base max-w-full">
                                The Timberline Streamline Frame System looks great and can be installed
                                in the most challenging areas on a property.
                            </p>

                            <p className="mb-4 sm:text-lg text-base max-w-full">
                                You can dig into the ground and cement the posts. If you have ledge stone and other
                                obstacles and can’t dig, use plywood form boxes, place the posts in the boxes, and
                                pour the cement. After, remove the plywood and add a classic look of brick or stone.

                            </p>
                            <p className="sm:text-lg text-base mb-0 max-w-full">
                                <WarnIcon className="h-4 mr-2 -mt-1 inline-flex" />
                                The Streamline Frame System’s installation instructions are covered in the how-to manual.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrameSystemsSection