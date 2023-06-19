import React from "react";
import { Link } from "gatsby";

const HeaderScroll =() => {
    return(
        <>
         <div className="desktop-subnav bg-black/[.8] z-30 sticky top-0 hidden sm:block -mt-mx border-b border-grey-subnav">
        <div className="container mx-auto h-12">
          <div className="flex justify-between text-white content-center h-full">
            <div className="hidden xl:flex text-lg h-full items-center">
              <span>How-to build a professional outdoor movie theater</span>
            </div>
            <ul className="m-0 p-0 flex justify-between xl:justify-end text-xs xl:text-sm h-full items-center w-full xl:w-auto">
              <li className="mr-1 xl:mr-4 mb-0">
                <Link to="#whatyouget" className="no-underline text-white hover:text-orange-500">
                  <span className="hidden lg:block">What You Get</span>
                  <span className="block lg:hidden">What You Get</span>
                </Link>
              </li>
              <li className="mx-1 xl:mx-4 mb-0">
                <Link to="#framesystems" className="no-underline text-white hover:text-orange-500">
                  <span className="hidden lg:block">Frame Systems</span>
                  <span className="block lg:hidden">Frames</span>
                </Link>
              </li>
              <li className="mx-1 xl:mx-4 mb-0">
                <Link to="#cinemauses" className="no-underline text-white hover:text-orange-500">
                  <span className="hidden lg:block">Cinema Uses</span>
                  <span className="block lg:hidden">Uses</span>
                </Link>
              </li>
              <li className="mx-1 xl:mx-4 mb-0">
                <Link to="#features" className="no-underline text-white hover:text-orange-500">Features</Link>
              </li>
              <li className="mx-1 xl:mx-4 mb-0">
                <Link to="#comparison" className="no-underline text-white hover:text-orange-500">
                  <span className="hidden lg:block">Comparison</span>
                  <span className="block lg:hidden">Compare</span>
                </Link>
              </li>
              <li className="mx-1 xl:mx-4 mb-0">
                <Link to="#faq" className="no-underline text-white hover:text-orange-500">FAQ</Link>
              </li>
              <li className="ml-1 xl:ml-4 mb-0">
                <Link to="#" className="px-2 py-1 xl:px-4 bg-orange-1000 rounded-md text-white no-underline">
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