import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ComparisonSection = () => {
    return (
      <div
        className="bg-black relative text-white pt-12 xl:pt-24"
        id="comparison"
      >
        <div className="max-w-7xl px-5 mx-auto border-b border-grey-subnav">
          <div className="mx-auto ">
            <div className="xl:col-span-12 xl:text-xl">
              <h2 className="md:hidden text-2xl font-semibold pb-4">
                Outdoor
                <span className="block">movie theater</span>
                comparison
              </h2>
  
              <h2 className="hidden md:block text-xl xl:text-50 mb-2 md:text-4xl font-semibold md:pb-5">
                Outdoor movie theater comparison
              </h2>
  
              <h3 className="text-xl pb-5 xl:pb-7 xl:text-35 text-orange-1000">
              How does the competition stack up to the Timberline Series 150” Big Moose?
              </h3>
              <p className="text-lg md:tet-2xl max-w-full mb-0">
              There are only three types of outdoor movie theater systems available for homeowners to buy;
              the aluminum frame cinema systems (made in China), the inflatable air screens (made in China), 
              and the solid, year-round, pressure-treated frame cinema system (designed and handcrafted in
              Maine by the Wireless Outdoor Cinema Company).
              </p>
            </div>
            <div className="block lg:hidden">
              <div className="grid grid-cols-12 mt-11 text-center items-center">
                <div className="col-span-6">
                  <StaticImage src="../../assets/images/aluminum-frame-photo-423px-x-307px.png" alt="" className="md:w-80 mx-auto" />
                  <h1 className="md:py-3 text-sm md:text-31 font-medium mb-0">
                    <p className="font-semibold mb-0">Aluminum System</p>
                  </h1>
                  <p className="text-xs md:text-xl text-grey-bdbbba mb-0">
                    Cinema equipment included
                  </p>
                  <p className="text-sm md:text-xl md:pt-3 pb-6 mb-0">
                    $1,500 - 3,000
                  </p>
                  <hr className="mx-4 border-gray-500 mb-0 hr_brd" />
                </div>
                <div className="col-span-6">
                  <StaticImage src="../../assets/images/timberline-frame-photo-423px-x-307px.png" alt="" className="md:w-80 mx-auto" />
                  <h1 className="md:py-3 text-sm md:text-31 font-medium mb-0">
                    <p className="text-orange-1000 font-semibold mb-0">
                      Timberline Big Moose
                    </p>
                  </h1>
                  <p className="text-xs md:text-xl text-grey-bdbbba mb-0">
                    Cinema equipment included
                  </p>
                  <p className="text-sm md:text-xl md:pt-3 pb-6 mb-0">
                    $2,900 - 3,000
                  </p>
                  <hr className="mx-4 border-gray-500 mb-0 hr_brd" />
                </div>
              </div>
              <div className="py-5 border-b border-gray-500">
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame System Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      11 ft wide x 10' ft high
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame System Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      12 ft wide x 10' ft high
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinematic Screen Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      150" diagonal screen
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinematic Screen Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      150" diagonal screen
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">1080p Projector</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">1080p Projector</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Sound System</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Sound System</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinema Packages</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      Wired only
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinema Packages</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      Wireless & Wired
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Setup Time</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">
                      10-15 minutes
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Setup Time</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      2-5 minutes
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">
                      Custom Projector Stand
                    </h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">
                      Custom Projector Stand
                    </h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Year-Round Use</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">
                      Not in snow climates
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Year-Round Use</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      Yes
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Storage</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">
                      Needs to be broken down
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Storage</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      Stays up year-round
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Durability</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">
                      Not sturdy
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Durability</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      Strongest frame system
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">DIY Guide Available</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">DIY Guide Available</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">Yes</p>
                  </div>
                </div>
              </div>
  
              <div className="grid grid-cols-12 mt-11 text-center items-center">
                <div className="col-span-6">
                  <StaticImage src="../../assets/images/airscreen-frame-photo-423px-x-307px.png" alt="" className="md:w-80 mx-auto" />
                 111
                  <h1 className="text-sm md:py-3 md:text-31 font-medium mb-0">
                    <p className="font-semibold mb-0">Inflatable Air Screen</p>
                  </h1>
                  <p className="text-xs md:text-xl text-grey-bdbbba mb-0">
                    Cinema equipment included
                  </p>
                  <p className="text-sm md:text-xl md:pt-3 pb-6 mb-0">
                    $3,500 - 4,500
                  </p>
                  <hr className="mx-4 border-gray-500 mb-0 hr_brd" />
                </div>
                <div className="col-span-6">
                  <StaticImage src="../../assets/images/timberline-frame-photo-423px-x-307px.png" alt="" className="md:w-80 mx-auto" />
                  <h1 className="text-sm md:py-3 md:text-31 font-medium mb-0">
                    <p className="text-orange-1000 font-semibold mb-0">
                      Timberline Big Moose
                    </p>
                  </h1>
                  <p className="text-xs md:text-xl text-grey-bdbbba mb-0">
                    Cinema equipment included
                  </p>
                  <p className="text-sm md:text-xl md:pt-3 pb-6 mb-0">
                    $2,900 - 3,000
                  </p>
                  <hr className="mx-4 border-gray-500 mb-0 hr_brd" />
                </div>
              </div>
              <div className="py-5">
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame System Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      13 ft wide x 11' ft high
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame System Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      12 ft wide x 10' ft high
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinematic Screen Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      150" diagonal screen
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinematic Screen Size</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      150" diagonal screen
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">1080p Projector</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">1080p Projector</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Sound System</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Sound System</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinema Packages</h1>
                    <p className="text-sm text-center text-grey-bdbbba mb-0">
                      Wired only
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Cinema Packages</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      Wireless & Wired
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Setup Time</h1>
                    <p className="text-sm text-center text-red-b20000  mb-0">
                      25-30 minutes
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Setup Time</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      2-5 minutes
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">
                      Custom Projector Stand
                    </h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">
                      Custom Projector Stand
                    </h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Year-Round Use</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">
                      Not in snow climates
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Year-Round Use</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Storage</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">
                      Needs to be broken down
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Storage</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      Stays up year-round
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Durability</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">
                      Can potentially get air leaks
                    </p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">Frame Durability</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">
                      Strongest frame system
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 my-6 text-center items-center">
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">DIY Guide Available</h1>
                    <p className="text-sm text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-6 font-extralight">
                    <h1 className="text-sm text-center mb-0">DIY Guide Available</h1>
                    <p className="text-sm text-center text-green-1f8f13 mb-0">Yes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-12 mt-11 text-center items-center">
                <div className="col-span-12 lg:col-span-4">
                  <StaticImage src="../../assets/images/aluminum-frame-photo-423px-x-307px.png" alt="" className="md:w-80 mx-auto" />
                  <h1 className="py-3 text-31 font-medium mb-0">
                    <p className="font-semibold mb-0">Aluminum System</p>
                  </h1>
                  <p className="text-xl text-grey-bdbbba mb-0">
                    Cinema equipment included
                  </p>
                  <p className="text-xl pt-3 pb-6 mb-0">$1,500 - 3,000</p>
                  <hr className="mx-4 border-gray-500 mb-0 hr_brd" />
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <StaticImage src="../../assets/images/airscreen-frame-photo-423px-x-307px.png" alt="" className="md:w-80 mx-auto" />
                  <h1 className="py-3 text-31 font-medium mb-0">
                    <p className="font-semibold mb-0">Inflatable Air Screen</p>
                  </h1>
                  <p className="text-xl text-grey-bdbbba mb-0">
                    Cinema equipment included
                  </p>
                  <p className="text-xl pt-3 pb-6 mb-0">$3,500 - 4,500</p>
                  <hr className="mx-4 border-gray-500 mb-0 hr_brd" />
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <StaticImage src="../../assets/images/timberline-frame-photo-423px-x-307px.png" alt="" className="md:w-80 mx-auto" />
                  <h1 className="py-3 text-31 font-medium mb-0">
                    <p className="text-orange-1000 font-semibold mb-0">
                      Timberline Big Moose
                    </p>
                  </h1>
                  <p className="text-xl text-grey-bdbbba mb-0">
                    Cinema equipment included
                  </p>
                  <p className="text-xl pt-3 pb-6 mb-0">$2,900 - 3,000</p>
                  <hr className="mx-4 border-gray-500 mb-0 hr_brd" />
                </div>
              </div>
              <div className="pb-10">
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Frame System Size</h1>
                    <p className="text-xl text-center text-grey-bdbbba mb-0">
                      11 ft wide x 10' ft high
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Frame System Size</h1>
                    <p className="text-xl text-center text-grey-bdbbba mb-0">
                      13 ft wide x 11' ft high
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Frame System Size</h1>
                    <p className="text-xl text-center text-grey-bdbbba mb-0">
                      12 ft wide x 10' ft high
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Cinematic Screen Size
                    </h1>
                    <p className="text-xl text-center text-grey-bdbbba mb-0">
                      150" diagonal screen
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Cinematic Screen Size
                    </h1>
                    <p className="text-xl text-center text-grey-bdbbba mb-0">
                      150" diagonal screen
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Cinematic Screen Size
                    </h1>
                    <p className="text-xl text-center text-grey-bdbbba mb-0">
                      150" diagonal screen
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">1080p Projector</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">1080p Projector</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">1080p Projector</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Sound System</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Sound System</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Sound System</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Cinema Packages</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">
                      Wired only
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Cinema Packages</h1>
                    <p className="text2-xl text-center text-grey-bdbbba mb-0">
                      Wired only
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Cinema Packages</h1>
                    <p className="text2-xl text-center text-green-1f8f13 mb-0">
                      Wireless & Wired
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Setup Time</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      10-15 minutes
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Setup T  mb-0ime</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      25-30 minutes
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Setup Time</h1>
                    <p className="text2-xl text-center text-green-1f8f13 mb-0">
                      2-5 minutes
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Custom Equipment Stand
                    </h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Custom Equipment Stand
                    </h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Custom Equipment Stand
                    </h1>
                    <p className="text2-xl text-center text-green-1f8f13 mb-0">Yes</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Year-Round Use</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      Not in snow climates
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Year-Round Use</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      Not in snow climates
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Year-Round Use</h1>
                    <p className="text2-xl text-center text-green-1f8f13 mb-0">
                      Yes
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Frame System After Use
                    </h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      Needs to be broken down
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Frame System After Use
                    </h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      Needs to be broken down
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">
                      Frame System After Use
                    </h1>
                    <p className="text2-xl text-center text-green-1f8f13 mb-0">
                      Stays up year-round
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 my-10 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Frame Durability</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      Not sturdy
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Frame Durability</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">
                      Can potentially get air leaks
                    </p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">Frame Durability</h1>
                    <p className="text2-xl text-center text-green-1f8f13 mb-0">
                      Strongest frame system
                    </p>
                  </div>
                </div>
  
                <div className="grid grid-cols-12 mt-10 mb-12 text-center items-center">
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">DIY Guide Available</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">DIY Guide Available</h1>
                    <p className="text2-xl text-center text-red-b20000 mb-0">No</p>
                  </div>
                  <div className="col-span-12 lg:col-span-4 font-extralight text-23">
                    <h1 className="text-xl text-center mb-0">DIY Guide Available</h1>
                    <p className="text2-xl text-center text-green-1f8f13 mb-0">Yes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default ComparisonSection