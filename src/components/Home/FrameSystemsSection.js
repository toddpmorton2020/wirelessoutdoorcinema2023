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
    const { FrameImg1, FrameImg2,FrameImg3 } = useStaticQuery(
        graphql`
          query {
            FrameImg1: file(relativePath: {eq: "timberline-movable-screen-frame-outdoor-theater-1617x750-winter.jpg"}) {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: CONSTRAINED)
              }
            } 
            FrameImg2: file(relativePath: {eq: "timberline-cemented-screen-frame-outdoor-theater-1617x750-winter.jpg"}) {
                childImageSharp {
                  gatsbyImageData(quality: 100, layout: CONSTRAINED)
                }
              } 
              
            FrameImg3: file(relativePath: {eq: "timberline-free-standing-frame-outdoor-theater-1617x750-winter.jpg"}) {
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
                        <h2 className="text-3xl md:text-4xl xl:text-50 font-semibold md:leading-none md:pb-3 pb-2">Most durable outdoor movie theater screen frames</h2>
                        <h3 className="text-xl md:text-2xl xl:text-35 pb-4 xl:pb-5 text-orange-1000">
                        Introducing the Timberline Cemented, Movable, and Free-Standing Frames.
                        </h3>
                        <p className="sm:text-lg text-base md:mb-0 mb-1 max-w-full">
                        Every homeowner has a different landscape on their property, and the Timberline Cemented, Movable, and Free-Standing Screen Frames solve every challenge when installing a backyard movie theater. Use the Cemented Screen Frame for flat lawns or uneven backyards where you can dig into the ground. Choose the Movable Screen Frame if you have a flat lawn and want the flexibility to move the frame anywhere on your property. Use the Timberline Free-Standing Screen Frame for uneven backyards or if you have ledge stone and can’t dig into the ground.
                        </p>
                        <br></br>
                        <p className="mb-0 sm:text-lg text-base max-w-full">
                                <WarnIcon className="h-4 mr-2 -mt-1 inline-flex" />
                                When building any of the Timberline Series Outdoor Movie Theater Frame Systems, you must follow the exact instructions covered in the DIY guide to avoid costly mistakes, pitfalls, and potential injury.
                            </p>
                    </div>
                  
                    <div className="md:grid flex flex-col-reverse items-stretch lg:gap-4 grid-cols-12 pb-10 xl:mb-10 relative">
                    <div className="lg:col-span-4 md:col-span-5 lg:mt-0 mt-4 md:text-left text-center md:px-0 px-5">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold md:pb-3 pb-2">Cemented Screen Frame</h2>
                                <h3 className="text-xl lg:text-3xl md:text-2xl pb-4 xl:pb-5 mb-0 max-w-full text-orange-1000">
                                    Perfect for diggable lawns.
                                </h3>
                            </div>
                            <p className="mb-4 sm:text-lg text-base max-w-full">
                            The Timberline Series Cemented Screen Frame has a clean and aesthetic appearance and can be installed in the most challenging areas on a property, as long as you can dig at least 26" down into the ground.
                            </p>
                            <p className="mb-4 sm:text-lg text-base max-w-full">
                            Just dig two holes into the ground roughly 30" in diameter, position the screen frame into the dug holes, and pour the cement.
                            </p>
                            </div>
                        <div className="lg:col-span-8 md:col-span-7 text-center">
                            <GatsbyImage image={getImage(FrameImg2)} alt="Timberline Cemented Screen Frame and Wired Outdoor Movie Theater setup in the winter."
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
                     
                    </div>
                    <div className="md:grid lg:gap-10 gap-4 items-stretch grid-cols-12 pb-10 xl:mb-10 relative">
                      
                        <div className="lg:col-span-8 md:col-span-7">
                            <GatsbyImage image={getImage(FrameImg1)} alt="Timberline Movable Screen Frame and Wired Outdoor Movie Theater setup in the winter."
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
                        <div className="lg:col-span-4 md:col-span-5 md:text-left text-center lg:mt-0 mt-6 md:px-0 px-5">
                            <h2 className="text-3xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Movable Screen Frame</h2>
                            <h3 className="text-xl lg:text-3xl md:text-2xl pb-4 xl:pb-5 mb-0 max-w-full text-orange-1000">
                                Great for flat lawns.
                            </h3>
                            <p className="mb-4 sm:text-lg text-base max-w-full">
                            The Timberline Series Movable Screen Frame looks great and is versatile, allowing you to position the system anywhere on your property as long as you have a flat lawn. The Movable Screen Frame is the best-selling outdoor movie theater among customers in New England.
                            </p>
                            <p className="mb-4 sm:text-lg text-base max-w-full">This movable screen frame makes a great compliment if you own a pool or hot tub. You can even load the frame onto a trailer and take it to your next outdoor event.   </p>
                           </div>
                    </div>
                 

                    <div className="md:grid flex flex-col-reverse items-stretch lg:gap-4 grid-cols-12  xl:mt-10 relative">
                        <div className="lg:col-span-4 md:col-span-5 md:text-left text-center lg:mt-0 mt-6 md:px-0 px-5">
                            <h2 className="text-3xl md:text-4xl font-semibold leading-c18 md:leading-none md:pb-3 pb-2 leading-9">Free-Standing Screen Frame
</h2>
                            <h3 className="text-xl lg:text-3xl md:text-2xl pb-4 xl:pb-5 mb-0 max-w-full text-orange-1000">
                            Ideal for any backyard 
                            </h3>
                            <p className="mb-4 sm:text-lg text-base max-w-full">
                            The Timberline Series Free-Standing Screen Frame has an attractive decorative look and was designed for homeowners who can't dig into the ground due to ledge stone and other obstacles or whose lawn is uneven                            </p>
                            <p className="mb-4 sm:text-lg text-base max-w-full">The base boxes have inside pressure-treated 4" x 4" supports that hold the frame in place, making it secure. This frame system is also movable.  </p>
                           </div>
                        <div className="lg:col-span-8 md:col-span-7">
                            <GatsbyImage image={getImage(FrameImg3)} alt="Timberline Movable Screen Frame and Wired Outdoor Movie Theater setup in the winter."
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
                </div>
            </div>
        </div>
    )
}

export default FrameSystemsSection