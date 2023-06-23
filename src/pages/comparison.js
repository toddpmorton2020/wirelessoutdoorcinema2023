import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Breadcrumbs from "../components/Elements/breadcrumbs"

import PlusIcon from "../assets/images/icons/plus.png"
import MinusIcon from "../assets/images/icons/minus.png"


const ComparisonPage = () => {
        const [open, setOpen] = useState(false)
        const [open1, setOpen1] = useState(false)
        const [open2, setOpen2] = useState(false)
        let arrowClassName = "w-4 transition-transform transform duration-300"
        if (!open) arrowClassName += " -rotate-90"
        else arrowClassName += " rotate-0"
        let answerClassName = "transform duration-300 overflow-hidden"
        if (open) answerClassName += " open-ps"
        else answerClassName += " closed-ps pb-0"
      
        let arrowClassName1 = "w-4 transition-transform transform duration-300"
        if (!open1) arrowClassName1 += " -rotate-90"
        else arrowClassName1 += " rotate-0"
        let answerClassName1 = "transform duration-300 overflow-hidden"
        if (open1) answerClassName1 += " open-ps"
        else answerClassName1 += " closed-ps pb-0"
      
        let arrowClassName2 = "w-4 transition-transform transform duration-300"
        if (!open2) arrowClassName2 += " -rotate-90"
        else arrowClassName2 += " rotate-0"
        let answerClassName2 = "transform duration-300 overflow-hidden"
        if (open2) answerClassName2 += " open-ps"
        else answerClassName2 += " closed-ps pb-0"
    return (
        <Layout>
            <Breadcrumbs />
            <div className="mt-12">
          <div>
            <div className="max-w-7xl px-5 mx-auto">
             <div className="">
                <h1 className="xl:text-70 md:text-5xl sm:text-4xl text-3xl privacy-heading text-center mt-6 mb-1">
                  <span className="text-orange-500">Compare</span> Timberline
                  Outdoor Cinemas
                </h1>
                <h2 className="xl:text-50 text-3xl sm:block hidden hide text-center max-w-full">
                  Get help choosing which cinema is best for you.{" "}
                  <span
                    className="text-blu-100 cursor-pointer"
                    onClick={() => navigate("/connect")}
                  >
                    Connect.
                  </span>
                </h2>
              </div>
              <div className="hidden lg:grid grid-cols-3 gap-5 lg:pt-16 hide pt-8 lg:space-x-4 text-center items-center">
                <div>
                  <StaticImage
                    src="../assets/images/jedi-bobcat.png"
                    alt=""
                    className="mx-auto"
                  />
                  <h2 className="py-6 text-31 font-medium mb-0">
                    <span className="text-orange-1000 mb-0">96" Jedi Bobcat</span>
                    <br /> Outdoor Gaming <br />
                    Cinema
                  </h2>
                  <hr className="mx-12 border-gray-500" />
                  <p className="text-2xl pb-6 mb-0 max-w-full">Just $2,499</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/96-jedi-bobcat-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                </div>
                <div className="lg:pt-0 pt-8">
                  <StaticImage
                    src="../assets/images/bella-bear.png"
                    alt=""
                   
                    className="mx-auto"
                  />
                  <h2 className="py-6 text-31 font-medium mb-0">
                    <span className="text-purple-1000">120” Bella Bear</span>
                    <br />
                    Backyard Outdoor <br />
                    Cinema
                  </h2>
                  <hr className="mx-12 border-gray-500" />
                  <p className="text-2xl pb-6 mb-0 max-w-full">Starting at $2,399*</p>
                  <button
                    className="text-2xl text-white bg-purple-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/120-bella-bear-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                </div>
                <div className="lg:pt-0 pt-8">
                  <StaticImage
                    src="../assets/images/big-moose.png"
                    alt=""
                  
                    className="mx-auto"
                  />
                  <h2 className="py-6 text-31 font-medium mb-0">
                    <span className="text-orange-1000">150” Big Moose</span>
                    <br /> Premium Outdoor <br />
                    Cinema
                  </h2>
                  <hr className="mx-12 border-gray-500" />
                  <p className="text-2xl pb-6 mb-0 max-w-full">Starting at $2,899*</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/150-big-moose-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                </div>
              </div>
              <div className="lg:hidden text-center pt-6">
                <div>
                  <StaticImage
                    src="../assets/images/mobile-jedi-bobcat-compare-396x356.png"
                    alt=""
                    className="mx-auto"
                  />
                  <h2 className="py-6 text-31 font-medium mb-0">
                    <span className="text-orange-1000">96" Jedi Bobcat</span>
                    <br /> Outdoor Gaming <br />
                    Cinema
                  </h2>
                  <hr className="mx-1 border-gray-500" />
                  <p className="text-3xl mb-4 max-w-full">Just $2,499</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/96-jedi-bobcat-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                  
                  <div className="hidden sm:block mt-4">
                    <div className="pt-6 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Wooden Frame</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className=" text-23">
                          <p className="mb-0 text-lg max-w-full">8’ ft. Wide Frame</p>
                          <br />
                          <p className="mb-0 text-lg max-w-full">Actual size: 87.5” High x 96” Wide</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Cinematic Screen
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            96” Diagonal Screen
                            <br />
                            <br />
                            Actual size: 47” High x 84” Wide
                            <br />
                            <br />
                            Wrinkle-free, double layer cinematic screen with
                            black backing to prevent light transmission
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Wired Option</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Wired option is only available for the Jedi Bobcat
                            Outdoor Gaming Cinema
                            <br />
                            <br />
                            With the wired gaming cinema, your options below
                            will be identified as wired, and you won’t be able
                            to use any of the wireless options below due to
                            power consumption limitations on the Battery
                            Station
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Projector</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            HD 1080p LED Projector with 4,000 Lumens
                            Brightness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Speakers</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Wired option only: Rockville 8” Dual Powered PA
                            System Speakers with Tripod Stands
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Digital FM Transmitter
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p  className="mb-0 text-lg max-w-full">
                            Wired option only: Rolls Digital FM Transmitter
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Digital FM Tuner
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Roku 4k Player
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Roku Express 4k player with voice control to
                            access movies and apps
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Battery Station
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Wireless option only: chargeable off-grid battery
                            station
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Projector Stand
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Comes with wireless and wired options: Custom,
                            light-weight cedar wood projector and equipment
                            stand
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Miscellaneous
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Wired Option Only: 25’ ft. green extension cord
                            and waterproof surge protector power strip
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 pb-6 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Installation</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Comes with wireless and wired options:
                            professional and friendly installation of frame,
                            projector stand, equipment setup, review on how to
                            use, and testing to ensure everything works
                            properly{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block sm:hidden py-1 mt-6 mb-4 mx-auto rounded-md border border-orange-1000 text-left">
                    <div className="">
                      <div
                        className="w-full "
                        onClick={() => setOpen(!open)}
                      >
                        <h2 className={`text-2xl text-orange-1000 flex-grow text-center py-1.5  ${open ? 'minusicon' : 'plusicon'} `}>
                          What's included?
                        </h2>
                        {/* <img
                          src={open ? 'PlusIcon' : 'MinusIcon'}
                          className="w-4 sm:w-8 md:w-auto md:h-5 cursor-pointer sm:pl-4 ml-4 sm:ml-0"
                        /> */}
                      </div>
                    </div>
                    <div className={answerClassName}>
                      <div className="pt-6 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Wooden Frame</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">8’ ft. Wide Frame</p>
                            <br />
                            <p className="mb-0 text-base max-w-full">Actual size: 87.5” High x 96” Wide</p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Cinematic Screen
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              96” Diagonal Screen
                              <br />
                              <br />
                              Actual size: 47” High x 84” Wide
                              <br />
                              <br />
                              Wrinkle-free, double layer cinematic screen with
                              black backing to prevent light transmission
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Wired Option</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired option is only available for the Jedi Bobcat
                              Outdoor Gaming Cinema
                              <br />
                              <br />
                              With the wired gaming cinema, your options below
                              will be identified as wired, and you won’t be able
                              to use any of the wireless options below due to
                              power consumption limitations on the Battery
                              Station
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Projector</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              HD 1080p LED Projector with 4,000 Lumens
                              Brightness
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Speakers</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired option only: Rockville 8” Dual Powered PA
                              System Speakers with Tripod Stands
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Digital FM Transmitter
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired option only: Rolls Digital FM Transmitter
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Digital FM Tuner
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                          </div>
                        </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Roku 4k Player
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Roku Express 4k player with voice control to
                              access movies and apps
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Battery Station
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wireless option only: chargeable off-grid battery
                              station
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Projector Stand
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Comes with wireless and wired options: Custom,
                              light-weight cedar wood projector and equipment
                              stand
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Miscellaneous
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired Option Only: 25’ ft. green extension cord
                              and waterproof surge protector power strip
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 pb-6 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Installation</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Comes with wireless and wired options:
                              professional and friendly installation of frame,
                              projector stand, equipment setup, review on how to
                              use, and testing to ensure everything works
                              properly{" "}
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <StaticImage
                    src="../assets/images/mobile-bella-bear-compare-396x356.png"
                    alt=""                   
                    className="mx-auto"
                  />
                  <h2 className="py-6 text-31 font-medium mb-0">
                    <span className="text-purple-1000 ">120” Bella Bear</span>
                    <br />
                    Backyard Outdoor <br />
                    Cinema
                  </h2>
                  <hr className="mx-1 border-gray-500 mb-0" />
                  <p className="sm:text-3xl text-2xl py-6 mb-0 max-w-full">Starting at $2,399*</p>
                  <button
                    className="text-2xl text-white bg-purple-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/120-bella-bear-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                  <div className="hidden sm:block mt-4">
                    <div className=" pt-6 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Wooden Frame</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">10’ ft. Wide Frame</p>
                          <br />
                          <p className="mb-0">Actual size: 87.5” High x 120” Wide</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Cinematic Screen
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            120” Diagonal Screen
                            <br />
                            <br />
                            Actual size: 72” High x 105” Wide
                            <br />
                            <br />
                            Wrinkle-free, double layer cinematic screen with
                            black backing to prevent light transmission
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Wireless or Wired Option
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            This cinema allows you to choose from either
                            Wireless or Wired packages
                            <br />
                            <br />
                            If you select a wireless cinema, your options
                            below will be identified as wireless, and you
                            won’t be able to use any of the wired options due
                            to power consumption limitations on the Battery
                            Station
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Projector</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            HD 1080p LED Projector with 4,000 Lumens
                            Brightness
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Speakers</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <p className=" mb-0 text-lg max-w-full">
                          Wireless option: Avantree Bluetooth Soundbar Speaker
                          <br />
                          <br />
                          Wired option: Rockville 8” Dual Powered PA System
                          Speakers with Tripod Stands
                        </p>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Digital FM Transmitter
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Wired option only: Rolls Digital FM Transmitter
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h1 className="text-31 text-font pb-5 mb-0">
                        Digital FM Tuner
                      </h1>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Roku 4k Player
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Roku Express 4k player with voice control to
                            access movies and apps
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Battery Station
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Wireless option only: chargeable off-grid battery
                            station
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Projector Stand
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className=" ">
                          <p className="mb-0 text-lg max-w-full">
                            Comes with wireless and wired options: Custom,
                            light-weight cedar wood projector and equipment
                            stand
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Miscellaneous
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Wired Option Only: 25’ ft. green extension cord
                            and waterproof surge protector power strip
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8 pb-6  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Installation</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <div className="">
                          <p className="mb-0 text-lg max-w-full">
                            Comes with wireless and wired options:
                            professional and friendly installation of frame,
                            projector stand, equipment setup, review on how to
                            use, and testing to ensure everything works
                            properly{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block sm:hidden py-1 mt-6 mb-4 border border-purple-1000 mx-auto rounded-md text-left">
                    <div className="">                    
                      <div
                        className="w-full "
                        onClick={() => setOpen1(!open1)}
                      >
                        <h2 className={`text-2xl text-purple-1000 flex-grow text-center py-1.5  ${open1 ? 'minusicon' : 'plusicon'} `}>
                          What's included?
                        </h2>
                        {/* <img
                          src={open ? 'PlusIcon' : 'MinusIcon'}
                          className="w-4 sm:w-8 md:w-auto md:h-5 cursor-pointer sm:pl-4 ml-4 sm:ml-0"
                        /> */}
                      </div>
                    </div>
                    <div className={answerClassName1}>
                      <div className="px-4 pt-6 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Wooden Frame</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">10’ ft. Wide Frame</p>
                            <br />
                            <p className="text-base max-w-full mb-0">Actual size: 87.5” High x 120” Wide</p>
                          </div>
                      </div>
                      <div className="px-4 pt-8 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Cinematic Screen
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              120” Diagonal Screen
                              <br />
                              <br />
                              Actual size: 72” High x 105” Wide
                              <br />
                              <br />
                              Wrinkle-free, double layer cinematic screen with
                              black backing to prevent light transmission
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Wireless or Wired Option
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              This cinema allows you to choose from either
                              Wireless or Wired packages
                              <br />
                              <br />
                              If you select a wireless cinema, your options
                              below will be identified as wireless, and you
                              won’t be able to use any of the wired options due
                              to power consumption limitations on the Battery
                              Station
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h1 className="text-2xl pb-5 mb-0">Projector</h1>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                          <p className="text-base max-w-full mb-0">
                              HD 1080p LED Projector with 4,000 Lumens
                              Brightness
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Speakers</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                          <p className="mb-0 text-base max-w-full">
                            Wireless option: Avantree Bluetooth Soundbar Speaker
                            <br />
                            <br />
                            Wired option: Rockville 8” Dual Powered PA System
                            Speakers with Tripod Stands
                          </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Digital FM Transmitter
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired option only: Rolls Digital FM Transmitter
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Digital FM Tuner
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="text-base max-w-full mb-0">Wired option only: Rolls Digital FM Tuner</p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h1 className="text-2xl pb-5 mb-0">
                          Roku 4k Player
                        </h1>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0">
                              Roku Express 4k player with voice control to
                              access movies and apps
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Battery Station
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wireless option only: chargeable off-grid battery
                              station
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Projector Stand
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Comes with wireless and wired options: Custom,
                              light-weight cedar wood projector and equipment
                              stand
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Miscellaneous
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired Option Only: 25’ ft. green extension cord
                              and waterproof surge protector power strip
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 pb-6 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Installation</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Comes with wireless and wired options:
                              professional and friendly installation of frame,
                              projector stand, equipment setup, review on how to
                              use, and testing to ensure everything works
                              properly{" "}
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <StaticImage
                    src="../assets/images/mobile-big-moose-compare-396x356.png"
                    alt=""
                    className="mx-auto"
                  />
                  <h2 className="py-6 text-31 font-medium mb-0">
                    <span className="text-orange-1000 mb-0">150” Big Moose</span>
                    <br /> Premium Outdoor <br />
                    Cinema
                  </h2>
                  <hr className="mx-1 border-gray-500 mb-0" />
                  <p className="sm:text-3xl text-2xl py-6 mb-0 max-w-full">Starting at $2,899*</p>
                  <button
                    className="text-2xl text-white bg-orange-1000 rounded-md px-10 py-1"
                    onClick={() =>
                      navigate(
                        "/timberline-cinema-packages/150-big-moose-cinema"
                      )
                    }
                  >
                    Learn more
                  </button>
                  <div className="hidden sm:block mt-4">
                    <div className=" pt-6 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Wooden Frame</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">12’ ft. Wide Frame</p>
                          <br />
                          <p className="mb-0 text-lg max-w-full">Actual size: 120” High x 150” Wide</p>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Cinematic Screen
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            150” Diagonal Screen
                            <br />
                            <br />
                            Actual size: 74” High x 131” Wide
                            <br />
                            <br />
                            Wrinkle-free, double layer cinematic screen with
                            black backing to prevent light transmission
                          </p>
                      </div>
                    </div>
                    <div className="pt-8  text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Wireless or Wired Option
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            This cinema allows you to choose from either
                            Wireless or Wired packages
                            <br />
                            <br />
                            If you select a wireless cinema, your options
                            below will be identified as wireless, and you
                            won’t be able to use any of the wired options due
                            to power consumption limitations on the Battery
                            Station
                          </p>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Projector</h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            HD 1080p LED Projector with 4,000 Lumens
                            Brightness
                          </p>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">Speakers</h2>
                      <hr class="border-gray-500 mb-0" />
                      <div className="pt-5">
                        <p className=" text-23 mb-0">
                          Wireless option: Avantree Bluetooth Soundbar Speaker
                          <br />
                          <br />
                          Wired option: Rockville 8” Dual Powered PA System
                          Speakers with Tripod Stands
                        </p>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Digital FM Transmitter
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            Wired option only: Rolls Digital FM Transmitter
                          </p>
                        </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Digital FM Tuner
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Roku 4k Player
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            Roku Express 4k player with voice control to
                            access movies and apps
                          </p>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Battery Station
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            Wireless option only: chargeable off-grid battery
                            station
                          </p>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h2 className="text-31 text-font pb-5 mb-0">
                        Projector Stand
                      </h2>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            Comes with wireless and wired options: Custom,
                            light-weight cedar wood projector and equipment
                            stand
                          </p>
                      </div>
                    </div>
                    <div className="pt-8 text-left">
                      <h1 className="text-31 text-font pb-5 mb-0">
                        Miscellaneous
                      </h1>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            Wired Option Only: 25’ ft. green extension cord
                            and waterproof surge protector power strip
                          </p>
                      </div>
                    </div>
                    <div className="pt-8 pb-6 text-left">
                      <h1 className="text-31 text-font pb-5 mb-0">Installation</h1>
                      <hr className="border-gray-500 mb-0" />
                      <div className="pt-5">
                          <p className="mb-0 text-lg max-w-full">
                            Comes with wireless and wired options:
                            professional and friendly installation of frame,
                            projector stand, equipment setup, review on how to
                            use, and testing to ensure everything works
                            properly{" "}
                          </p>
                      </div>
                    </div>
                  </div>
                  <div className="block sm:hidden py-1 mt-6 mb-4 mx-auto rounded-md border-orange-1000 border text-left">
                    <div className="">                     
                      <div
                        className="w-full "
                        onClick={() => setOpen2(!open2)}
                      >
                        <h2 className={`text-2xl text-orange-1000 flex-grow text-center py-1.5  ${open2 ? 'minusicon' : 'plusicon'} `}>
                          What's included?
                        </h2>
                        {/* <img
                          src={open ? 'PlusIcon' : 'MinusIcon'}
                          className="w-4 sm:w-8 md:w-auto md:h-5 cursor-pointer sm:pl-4 ml-4 sm:ml-0"
                        /> */}
                      </div>
                      
                    </div>
                    <div className={answerClassName2}>
                      <div className="px-4 pt-6 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Wooden Frame</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">12’ ft. Wide Frame</p>
                            <br />
                            <p className="mb-0">Actual size: 120” High x 150” Wide</p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Cinematic Screen
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              150” Diagonal Screen
                              <br />
                              <br />
                              Actual size: 74” High x 131” Wide
                              <br />
                              <br />
                              Wrinkle-free, double layer cinematic screen with
                              black backing to prevent light transmission
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Wireless or Wired Option
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              This cinema allows you to choose from either
                              Wireless or Wired packages
                              <br />
                              <br />
                              If you select a wireless cinema, your options
                              below will be identified as wireless, and you
                              won’t be able to use any of the wired options due
                              to power consumption limitations on the Battery
                              Station
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Projector</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              HD 1080p LED Projector with 4,000 Lumens
                              Brightness
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Speakers</h2>
                        <hr class="border-gray-500 mb-0" />
                        <div className="pt-5">
                          <p className="mb-0 text-base max-w-full">
                            Wireless option: Avantree Bluetooth Soundbar Speaker
                            <br />
                            <br />
                            Wired option: Rockville 8” Dual Powered PA System
                            Speakers with Tripod Stands
                          </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Digital FM Transmitter
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired option only: Rolls Digital FM Transmitter
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Digital FM Tuner
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h1 className="text-2xl pb-5 mb-0">
                          Roku 4k Player
                        </h1>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Roku Express 4k player with voice control to
                              access movies and apps
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Battery Station
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wireless option only: chargeable off-grid battery
                              station
                            </p>
                          </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Projector Stand
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Comes with wireless and wired options: Custom,
                              light-weight cedar wood projector and equipment
                              stand
                            </p>
                        </div>
                      </div>
                      <div className="pt-8 px-4 text-left">
                        <h2 className="text-2xl pb-5 mb-0">
                          Miscellaneous
                        </h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Wired Option Only: 25’ ft. green extension cord
                              and waterproof surge protector power strip
                            </p>
                          </div>
                        </div>
                      <div className="pt-8 px-4 pb-6 text-left">
                        <h2 className="text-2xl pb-5 mb-0">Installation</h2>
                        <hr className="border-gray-500 mb-0" />
                        <div className="pt-5">
                            <p className="mb-0 text-base max-w-full">
                              Comes with wireless and wired options:
                              professional and friendly installation of frame,
                              projector stand, equipment setup, review on how to
                              use, and testing to ensure everything works
                              properly{" "}
                            </p>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 mb-6">
                  <p className="text-left mb-0 text-lg max-w-full">
                    * Starting price for wireless option on 120" Bella Bear and
                    150" Big Moose Cinemas.
                  </p>
                </div>
              </div>
              <div className="pt-20 pb-10 hidden lg:block">
                <div className="">
                  <h2 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Wooden Frame size</h2>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-5 text-lg max-w-full">8’ ft. Wide Frame</p>
                      <p className="mb-0 text-lg max-w-full">Actual size: 87.5” High x 96” Wide</p>
                    </div>
                    <div className="">
                      <p className="mb-5 text-lg max-w-full">10’ ft. Wide Frame</p>
                      <p className="mb-0">Actual size: 87.5” High x 120” Wide</p>
                    </div>
                    <div className="">
                      <p className="mb-5 text-lg max-w-full">12’ ft. Wide Frame</p>
                      <p className="mb-0">Actual size: 120” High x 150” Wide</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Cinematic Screen size</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="comparison-col lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        96” Diagonal Screen
                        <br />
                        <br />
                        Actual size: 47” High x 84” Wide
                        <br />
                        <br />
                        Wrinkle-free, double layer cinematic screen with black
                        backing to prevent light transmission
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        120” Diagonal Screen
                        <br />
                        <br />
                        Actual size: 72” High x 105” Wide
                        <br />
                        <br />
                        Wrinkle-free, double layer cinematic screen with black
                        backing to prevent light transmission
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        150” Diagonal Screen
                        <br />
                        <br />
                        Actual size: 74” High x 131” Wide
                        <br />
                        <br />
                        Wrinkle-free, double layer cinematic screen with black
                        backing to prevent light transmission
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Wireless or Wired Option</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className=" ">
                      <p className="mb-0 text-lg max-w-full">
                        Wired option is only available for the Jedi Bobcat
                        Outdoor Gaming Cinema
                        <br />
                        <br />
                        With the wired gaming cinema, your options below will be
                        identified as wired, and you won’t be able to use any of
                        the wireless options below due to power consumption
                        limitations on the Battery Station
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        This cinema allows you to choose from either Wireless or
                        Wired packages
                        <br />
                        <br />
                        If you select a wireless cinema, your options below will
                        be identified as wireless, and you won’t be able to use
                        any of the wired options due to power consumption
                        limitations on the Battery Station
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        This cinema allows you to choose from either Wireless or
                        Wired packages
                        <br />
                        <br />
                        If you select a wireless cinema, your options below will
                        be identified as wireless, and you won’t be able to use
                        any of the wired options due to power consumption
                        limitations on the Battery Station
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h2 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Projector</h2>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">HD 1080p LED Projector with 4,000 Lumens Brightness</p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">HD 1080p LED Projector with 4,000 Lumens Brightness</p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">HD 1080p LED Projector with 4,000 Lumens Brightness</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Speakers</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Wired option only: Rockville 8” Dual Powered PA System
                        Speakers with Tripod Stands
                      </p>
                    </div>
                    <p className=" mb-0 text-lg max-w-full">
                      Wireless option: Avantree Bluetooth Soundbar Speaker
                      <br />
                      <br />
                      Wired option: Rockville 8” Dual Powered PA System Speakers
                      with Tripod Stands
                    </p>
                    <p className=" mb-0 text-lg max-w-full">
                      Wireless option: Avantree Bluetooth Soundbar Speaker
                      <br />
                      <br />
                      Wired option: Rockville 8” Dual Powered PA System Speakers
                      with Tripod Stands
                    </p>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Digital FM Transmitter</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Transmitter</p>
                    </div>
                    <div className=" ">
                      <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Transmitter</p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Transmitter</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Digital FM Tuner</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">Wired option only: Rolls Digital FM Tuner</p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Roku Express 4k Player</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Roku Express 4k player with voice control to access
                        movies and apps
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Roku Express 4k player with voice control to access
                        movies and apps
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Roku Express 4k player with voice control to access
                        movies and apps
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Battery Station</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Wireless option only: chargeable off-grid battery
                        station
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Wireless option only: chargeable off-grid battery
                        station
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Wireless option only: chargeable off-grid battery
                        station
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Projector Stand</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Comes with wireless and wired options: Custom,
                        light-weight cedar wood projector and equipment stand
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Comes with wireless and wired options: Custom,
                        light-weight cedar wood projector and equipment stand
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Comes with wireless and wired options: Custom,
                        light-weight cedar wood projector and equipment stand
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:text-4xl text-31 pb-5 mb-0">Miscellaneous</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Wired Option Only: 25’ ft. green extension cord and
                        waterproof surge protector power strip
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Wired option only: 25’ ft. green extension cord and
                        waterproof surge protector power strip
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Wired option only: 25’ ft. green extension cord and
                        waterproof surge protector power strip
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <h1 className="xl:text-50 lg:Text-4xl text-31 pb-5 mb-0">Professional Installation</h1>
                  <hr class="border-gray-500 mb-0" />
                  <div className="lg:flex lg:space-x-16 xl:space-x-32 pt-5">
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Comes with wireless and wired options: professional and
                        friendly installation of frame, projector stand,
                        equipment setup, review on how to use, and testing to
                        ensure everything works properly{" "}
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Comes with wireless and wired options: professional and
                        friendly installation of frame, projector stand,
                        equipment setup, review on how to use, and testing to
                        ensure everything works properly{" "}
                      </p>
                    </div>
                    <div className="">
                      <p className="mb-0 text-lg max-w-full">
                        Comes with wireless and wired options: professional and
                        friendly installation of frame, projector stand,
                        equipment setup, review on how to use, and testing to
                        ensure everything works properly{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-16">
                  <p className="mb-0 text-lg max-w-full">
                    * Starting price for the Bella Bear and Big Moose Timberline
                    Outdoor Cinemas are the wireless package option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </Layout>
    )
}

export default ComparisonPage