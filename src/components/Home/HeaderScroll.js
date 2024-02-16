import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { globalHistory } from "@reach/router"

const HeaderScroll = () => {
  const [open, setOpen] = useState(false)
  const [openW, setOpenW] = useState(false)
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") setOpen(false)
    })
  }, [setOpen])
  return (
    <>
      <div
        className="mobile-subnav bg-black z-30 sticky top-0 block sm:hidden border-b border-grey-subnav">
        <div onClick={() => setOpenW(!openW)} className="cursor-pointer px-4">
          <div className="h-16 flex items-center justify-between text-sm text-white gap-4">
            <div className="flex flex-1 justify-around">
              <span className="text-white mr-4">How to build a professional outdoor movie theater</span>
              {/* <span>&#9660;</span> */}
              <div className={`ml-4 mt-2 arrow ${openW ? "open" : ""}`}></div>
            </div>
            <Link
              to="#"
              className="px-2 py-0 ml-1 flex-0 no-underline text-white text-center font-normal rounded-md bg-orange-1000"
            >
              Get Now
            </Link>
          </div>
          {openW && (
            <ul className="flex flex-col justify-between w-full py-3 m-0">
              <li className="py-2 border-b border-grey-subnav text-sm mb-0">
                <Link to="#whatyouget" className="no-underline text-white hover:text-orange-500 font-normal">
                  What You Get
                </Link>
              </li>
              <li className="py-2 border-b border-grey-subnav text-sm mb-0">
                <Link to="#systems" className="no-underline text-white hover:text-orange-500 font-normal">
                  Systems
                </Link>
              </li>
              <li className="py-2 border-b border-grey-subnav text-sm mb-0">
                <Link to="#framesystems" className="no-underline text-white hover:text-orange-500 font-normal">
                  Frames
                </Link>
              </li>
              <li className="py-2 border-b border-grey-subnav text-sm mb-0">
                <Link to="#screens" className="no-underline text-white hover:text-orange-500 font-normal">Screens</Link>
              </li>
              <li className="py-2 border-b border-grey-subnav text-sm mb-0">
                <Link to="#projectorstand" className="no-underline text-white hover:text-orange-500 font-normal">
                  Projector Stand
                </Link>
              </li>
              <li className="py-2 border-b border-grey-subnav text-sm mb-0">
                <Link to="#features" className="no-underline text-white hover:text-orange-500 font-normal">
                  Features
                </Link>
              </li>
              <li className="py-2 border-b border-grey-subnav text-sm mb-0">
                <Link to="#comparison" className="no-underline text-white hover:text-orange-500 font-normal">
                  Compare
                </Link>
              </li>
              <li className="pt-2 pb-6 text-sm mb-0">
                <Link to="#faq" className="no-underline text-white hover:text-orange-500 font-normal">FAQ</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="desktop-subnav z-30 sticky top-0 hidden sm:block -mt-px border-b border-grey-subnav">
        <div className="container mx-auto px-5 h-12">
          <div className="flex justify-between text-white content-center h-full">
            <div className="hidden xl:flex text-lg h-full items-center">
              <span>How to build a professional outdoor movie theater</span>
            </div>
            <ul className="m-0 p-0 flex justify-between xl:justify-end text-xs xl:text-sm h-full items-center w-full xl:w-auto">
              <li className="mr-1 xl:mr-3 mb-0">
                <Link to="#whatyouget" className="no-underline text-white hover:text-orange-500 font-normal">
                 What You Get
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#systems" className="no-underline text-white hover:text-orange-500 font-normal">
                  Systems
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#framesystems" className="no-underline text-white hover:text-orange-500 font-normal">
                  Frames
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#screens" className="no-underline text-white hover:text-orange-500 font-normal">Screens</Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#projectorstand" className="no-underline text-white hover:text-orange-500 font-normal">
                  Projector Stand
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#features" className="no-underline text-white hover:text-orange-500 font-normal">
                  Features
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#comparison" className="no-underline text-white hover:text-orange-500 font-normal">
                  Compare
                </Link>
              </li>
              <li className="mx-1 xl:mx-3 mb-0">
                <Link to="#faq" className="no-underline text-white hover:text-orange-500 font-normal">FAQ</Link>
              </li>
              <li className="ml-1 xl:ml-4 mb-0">
                <Link to="#" className="px-2 py-1 xl:px-4 bg-orange-1000 rounded-md text-white font-normal no-underline">
                  Get Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderScroll