import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import BatteryIcon from "../../assets/images/icons/BatteryIcon"
import HeadphonesIcon from "../../assets/images/icons/HeadphoneIcon"
import StreamingIcon from "../../assets/images/icons/StreamingIcon"
import DvdIcon from "../../assets/images/icons/DVDIcon"
import SmartPhoneIcon from "../../assets/images/icons/SmartPhone"
import CablesIcon from "../../assets/images/icons/CableIcon"
import HeadPhoneWirelessIcon from "../../assets/images/icons/HeadphonesWirelessIcon"
import LaptopIcon from "../../assets/images/icons/LaptopIcon"

import { TunerIcon } from "../../assets/images/icons/tuner-icon"
import { ConsoleIcon } from "../../assets/images/icons/video-game-console-icon"


const PowerfulCinemaSection = () => {
    const gridItems = [
      {
        id: 0,
        img: BatteryIcon,
        text: "Off-Grid Battery Stations",
      },
      {
        id: 1,
        img: HeadphonesIcon,
        text: "Bluetooth Speakers",
      },
      {
        id: 2,
        img: StreamingIcon,
  
        text: "Streaming Devices",
      },
      {
        id: 3,
        img: DvdIcon,
        text: "DVD Players ",
      },
      {
        id: 4,
        img: SmartPhoneIcon,
        text: "Cast movies from your IOS or Android",
      },
      {
        id: 5,
        img: CablesIcon,
        text: <>HDMI, USB, VGA & Audio</>,
      },
    ]
  
    const gridItems2 = [
      {
        id: 0,
        img: HeadphonesIcon,
        text: "External Speakers",
      },
      {
        id: 1,
        img: StreamingIcon,
        text: "Streaming Devices",
      },
      {
        id: 2,
        img: TunerIcon,
        text: "DVD players, receivers, and tuners",
      },
      {
        id: 3,
        img: ConsoleIcon,
        text: "Gaming Consoles",
      },
      {
        id: 4,
        img: LaptopIcon,
        text: "PCs, Laptops & Tablets",
      },
      {
        id: 5,
        img: SmartPhoneIcon,
        text: "Cast movies from your IOS or Android",
      },
  
      {
        id: 6,
        img: HeadPhoneWirelessIcon,
        text: "Wireless Headphones",
      },
      {
        id: 7,
        img: CablesIcon,
        text: <>HDMI, USB, VGA & Audio</>,
      },
    ]
  
    return (
      <div
        className="bg-black relative text-white border-grey-subnav py-8 xl:py-24"
        id="features"
      >
        <div className="max-w-7xl px-5 mx-auto">
          <div className="flex flex-col xl:grid xl:grid-cols-12 w-full">
            <div className="text-left xl:col-span-12 xl:text-xl mb-11">
              <h2 className="text-2xl md:text-4xl xl:text-50 font-semibold leading-c18 md:leading-none md:pb-3 pb-2">Powerful wireless and wired cinema packages</h2>
              <h3 className="txt-xl md:text-2xl xl:text-35 pb-4 xl:pb-5 max-w-full mb-0 text-orange-1000">
              Go wireless with no extension cords. Go wired for unlimited options
              </h3>
              <p className="text-lg max-w-full mb-0">
              The Timberline Outdoor Movie Theaters come in two different packages: wireless and wired.  
              The revolutionary wireless outdoor movie theater is powered by an off-grid battery, 
              allowing you to watch your favorite entertainment without running extension cords from your 
              home to the cinema equipment, and ensuring an easy and fast setup every time. The wired cinema
               package provides more options to provide your viewers with a more robust theater experience 
               by adding receivers, tuners, PA speakers, and the ability to play video games on a massive 
               cinematic screen.
              </p>
            </div>
  
            <div className="flex flex-col lg:hidden mb-8">
              <div>
                {" "}
                <StaticImage
                  className="mx-auto w-full mb-3"
                  src="../../assets/images/mobile-wireless-cinema-package-480px-x-340px.jpg"
                  alt=""
                />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl">Go Wireless</h3>
                <h4 className="font-bold text-lg">
                  No extensions cords. Fast setup every time.{" "}
                </h4>
  
                <p className="text-orange-1000 mb-0 text-lg">Connect to: </p>
                <ul className="m-0 p-0">
                  {gridItems.map(item => {
                    const Image = item.img
                    return (
                      <li className="flex items-center my-4 gap-3" key={item.id}>
                        <Image className="white-svg p-0 h-8  pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                        <span className="font-bold text-base">{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div
              className="wirelesscinema col-span-12 mx-auto w-full text-center relative hidden lg:block mb-24"
            >
              <div className="relative w-full mx-auto flex flex-start">
                <div className="block text-left pt-5 pb-10 px-10 bg-black/[.7]">
                  <div className="container mx-auto">
                    <h3 className="text-4xl">Go Wireless</h3>
                    <h4 className="text-3xl my-2">No extensions cords. </h4>
                    <h4 className="text-3xl">Fast setup every time. </h4>
                    <p className="text-xl text-orange-1000 my-2">Connect to: </p>
                    <ul className="text-xl m-0 p-0">
                      {gridItems.map(item => {
                        const Image = item.img
                        return (
                          <li className="flex items-center mb-5 gap-3" key={item.id}>
                            <Image className="white-svg p-0 h-8  pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                            <span className="ml-2 text-base">{item.text}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="">
            <div className="block lg:hidden col-span-12 ">
              <div>
                <StaticImage className="mx-auto w-full mb-3" src="../../assets/images/mobile-wired-cinema-package-480px-x-340px2.jpg" alt="" />
              </div>
              <div className="mt-5">
                <h3 className="text-2xl">Go Wired</h3>
                <h4 className="font-bold text-lg">
                  Unlimited connection options. Play video games{" "}
                </h4>
                <p className="text-orange-1000 mb-0 text-lg">Connect to: </p>
                <ul className="m-0 p-0">
                  {gridItems2.map(item => {
                    const Image = item.img
                    return (
                      <li className="flex items-center my-4 gap-3" key={item.id}>
                        <Image className="white-svg h-12 p-3 pl-0 x-auto" />
                        <span className="font-bold text-base">{item.text}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div
              className="wiredcinema mx-auto w-full relative hidden lg:block"             
            >
              <div className="reltive w-fill mx-auto flex justify-end">
                <div className="block text-left pt-5 pb-10 px-10 bg-blck-size-128 bg-black/[.7]">
                  <div className="cotainer mx-auo">
                    <h3 className="text-4xl">Go Wired</h3>
                    <h4 className="text-3xl">Unlimited connection options. </h4>
                    <h4 className="text-3xl">Play video games and more. </h4>
                    <p className="text-xl text-orange-1000 my-2">Connect to: </p>
                    <ul className="text-xl m-0 p-0">
                      {gridItems2.map(item => {
                        const Image = item.img
                        return (
                          <li className="flex items-center my-4 gap-3" key={item.id}>
                            <Image className="white-svg p-0 h-8 pb-3 lg:pb-0 lg:w-10 x-auto lg:ml-0" />
                            <span className="ml-2 text-base">{item.text}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default PowerfulCinemaSection